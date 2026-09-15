import { NextResponse } from 'next/server';
import { Pool } from 'pg';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

function normalizar(texto: string) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

// CORREÇÃO: O Regex agora aceita o caractere "_" para não quebrar as tags ocultas
function tokenizarPalavras(frase: string) {
  return String(frase || '').match(/[\p{L}\p{M}\-_]+|\d+|[^\p{L}\p{M}\d\s]/gu) || [];
}

function ehPalavra(tok: string) { return /^[\p{L}\p{M}\-_]+$/u.test(tok); }

export async function POST(request: Request) {
  let client;
  
  try {
    client = await pool.connect();
    
    const body = await request.json();
    const { text, direction } = body;

    if (!text || !text.trim()) return NextResponse.json({ translatedText: '' });

    const { rows: dicionario } = await client.query('SELECT * FROM dictionary');

    const ptList: any[] = [];
    const carnList: any[] = [];

    const irregulares = [
        { roots: ['sou','és','é','somos','são','sao'], base: 'ser', tense: 'pres' },
        { roots: ['fui','foi','fomos','foram','era','eram'], base: 'ser', tense: 'past' },
        { roots: ['serei','será','sera','seremos','serão','serao'], base: 'ser', tense: 'fut' },
        { roots: ['estou','está','esta','estás','estão','estao','estamos'], base: 'estar', tense: 'pres' },
        { roots: ['estive','esteve','estiveram','estava','estavam'], base: 'estar', tense: 'past' },
        { roots: ['estarei','estará','estara','estaremos','estarão','estarao'], base: 'estar', tense: 'fut' },
        { roots: ['vou','vais','vai','vamos','vão','vao'], base: 'ir', tense: 'pres' },
        { roots: ['fui','foi','fomos','foram','ia','iam'], base: 'ir', tense: 'past' },
        { roots: ['irei','irá','ira','iremos','irão','irao'], base: 'ir', tense: 'fut' },
        { roots: ['faço','faco','fazes','faz','fazemos','fazem'], base: 'fazer', tense: 'pres' },
        { roots: ['fiz','fez','fizeram','fazia','faziam'], base: 'fazer', tense: 'past' },
        { roots: ['farei','fará','fara','faremos','farão','farao'], base: 'fazer', tense: 'fut' },
        { roots: ['tenho','tens','tem','temos','têm'], base: 'ter', tense: 'pres' },
        { roots: ['tive','teve','tiveram','tinha','tinham'], base: 'ter', tense: 'past' },
        { roots: ['terei','terá','tera','teremos','terão','terao'], base: 'ter', tense: 'fut' },
        { roots: ['dou','dás','das','dá','da','damos','dão','dao'], base: 'dar', tense: 'pres' },
        { roots: ['dei','deu','deram','dava','davam'], base: 'dar', tense: 'past' },
        { roots: ['darei','dará','dara','daremos','darão','darao'], base: 'dar', tense: 'fut' }
    ];

    const manuais = [
        { pt: 'o', carn: 'Pe', classe: 'artigo' }, { pt: 'a', carn: 'Te', classe: 'artigo' },
        { pt: 'os', carn: 'Ne', classe: 'artigo' }, { pt: 'as', carn: 'Ne', classe: 'artigo' },
        { pt: 'um', carn: 'Un', classe: 'artigo' }, { pt: 'uma', carn: 'Un', classe: 'artigo' },
        { pt: 'uns', carn: 'Han', classe: 'artigo' }, { pt: 'alguns', carn: 'Han', classe: 'artigo' },
        { pt: 'eu', carn: 'Ana', classe: 'pronome' }, { pt: 'tu', carn: 'Ento', classe: 'pronome' },
        { pt: 'ele', carn: 'Nof', classe: 'pronome' }, { pt: 'ela', carn: 'Nas', classe: 'pronome' },
        { pt: 'nós', carn: 'Anon', classe: 'pronome' }, { pt: 'vós', carn: 'Uri', classe: 'pronome' },
        { pt: 'eles', carn: 'Nae', classe: 'pronome' }, { pt: 'elas', carn: 'Nae', classe: 'pronome' },
        { pt: 'mim', carn: 'Ani', classe: 'pronome' }, { pt: 'ti', carn: 'Enti', classe: 'pronome' },
        { pt: 'si', carn: 'Henasui', classe: 'pronome' },
        { pt: 'este', carn: 'Ta', classe: 'pronome' }, { pt: 'esta', carn: 'Ta', classe: 'pronome' },
        { pt: 'isso', carn: 'Ta', classe: 'pronome' }, { pt: 'isto', carn: 'Ta', classe: 'pronome' },
        { pt: 'nosso', carn: 'Pura', classe: 'pronome' }, { pt: 'nossa', carn: 'Pura', classe: 'pronome' },
        { pt: 'da', carn: 'Nte Te', classe: 'prep' }, { pt: 'do', carn: 'Nte Pe', classe: 'prep' },
        { pt: 'das', carn: 'Nte Ne', classe: 'prep' }, { pt: 'dos', carn: 'Nte Ne', classe: 'prep' },
        { pt: 'em', carn: 'En', classe: 'prep' }, { pt: 'no', carn: 'En', classe: 'prep' },
        { pt: 'na', carn: 'En', classe: 'prep' }, { pt: 'para', carn: 'E', classe: 'prep' },
        { pt: 'não', carn: 'An', classe: 'adv' }, { pt: 'nao', carn: 'An', classe: 'adv' },
        { pt: 'e', carn: 'Au', classe: 'conj' }
    ];

    manuais.forEach(m => ptList.push({
        key: m.pt, target: m.carn, len: m.pt.length, prioridade: 10,
        isArtigo: m.classe === 'artigo', isPronome: m.classe === 'pronome', isSubst: false, isVerbo: false, tense: 'pres'
    }));

    dicionario.forEach(item => {
      const isVerbo = item.c_norm.includes('verbo') || item.is_verbo;
      const isSubst = item.c_norm.includes('subst') || item.c_norm.includes('nome');
      const isAdj = item.c_norm.includes('adjet') || item.c_norm.includes('adj');
      const isNeutro = item.c_norm.includes('neutro') || /\b(animais|plantas|fauna|flora|ave|pássaro|peixe|lobo|cão|cavalo|monstro|flor|fruta|mato|inseto|árvore|arvore)\b/i.test((item.notas + " " + item.traducao + " " + item.ambiente).toLowerCase());
      
      // CORREÇÃO MÁXIMA: O target deve ser sempre a palavra Carneniana (singular)!
      const targetCarneniano = item.singular;

      carnList.push({ key: item.s_norm, target: item.traducoes_array[0] || item.traducao, len: item.s_norm.length, prioridade: 1 });
      if (item.plural && item.plural !== '-') {
          carnList.push({ key: normalizar(item.plural), target: (item.traducoes_array[0] || item.traducao) + 's', len: item.plural.length, prioridade: 2 });
      }

      item.traducoes_array.forEach((cleanTr: string) => {
          let prioridade = isVerbo ? 2 : (isSubst ? 3 : 5);

          ptList.push({
              key: cleanTr, target: targetCarneniano, len: cleanTr.length, prioridade,
              isVerbo, isSubst, isAdj, isNeutro, tense: 'pres'
          });

          if ((isSubst || isAdj) && cleanTr.length > 2) {
              let pKey = cleanTr.endsWith('m') ? cleanTr.slice(0, -1) + 'ns' : cleanTr.endsWith('l') ? cleanTr.slice(0, -1) + 'is' : cleanTr + 's';
              ptList.push({
                  key: pKey, target: targetCarneniano, len: pKey.length, prioridade: prioridade - 1,
                  isVerbo, isSubst, isAdj, isNeutro, tense: 'pres', isPlural: true
              });
          }

          if (isVerbo) {
              let root = cleanTr; let base = root.replace(/[aei]r$/, '');
              ['eu', 'ou', 'iu', 'ia', 'ava', 'ram', 'sse', 'ste', 've', 'avam', 'iam'].forEach(suf => {
                  ptList.push({ key: base + suf, target: targetCarneniano, len: (base+suf).length, prioridade: 1, isVerbo: true, tense: 'past' });
              });
              ['ei', 'á', 'a', 'ão', 'ao', 'emos', 'remos', 'rão', 'rao'].forEach(suf => {
                  ptList.push({ key: root + suf, target: targetCarneniano, len: (root+suf).length, prioridade: 1, isVerbo: true, tense: 'fut' });
              });
              ['o', 'e', 'a', 'em', 'am', 'mos', 'es', 'as'].forEach(suf => {
                  ptList.push({ key: base + suf, target: targetCarneniano, len: (base+suf).length, prioridade: 1, isVerbo: true, tense: 'pres' });
              });
              irregulares.forEach(irr => {
                  if(root === irr.base) {
                      irr.roots.forEach(r => ptList.push({ key: r, target: targetCarneniano, len: r.length, prioridade: 3, isVerbo: true, tense: irr.tense }));
                  }
              });
          }
      });
    });

    ptList.sort((a, b) => b.len - a.len || b.prioridade - a.prioridade);

    function obterCandidatoDesambiguado(tokens: string[], inicio: number, outTokens: any[]) {
      for (let tamanho = Math.min(5, tokens.length - inicio); tamanho >= 1; tamanho--) {
        const trecho = tokens.slice(inicio, inicio + tamanho);
        if (!trecho.every(ehPalavra)) continue;
        const chave = normalizar(trecho.join(' '));
        
        let matches = ptList.filter(entry => entry.key === chave);
        if(matches.length > 0) {
            let bestMatch = matches[0];
            // Respeito absoluto às prioridades de Artigos e Preposições!
            if(matches.length > 1 && matches[0].prioridade === matches[1].prioridade) {
                let prev = outTokens.length > 0 ? outTokens[outTokens.length - 1].meta : null;
                if(prev && (prev.isArtigo || prev.isPronome)) {
                    let nounMatch = matches.find(m => m.isSubst);
                    if(nounMatch) bestMatch = nounMatch;
                } else {
                    let verbMatch = matches.find(m => m.isVerbo);
                    if(verbMatch) bestMatch = verbMatch;
                }
            }
            return { entry: bestMatch, tamanho };
        }
      }
      return null;
    }

    let finalTranslated = '';
    
    if (direction === 'pt-to-carn') {
      let mod = text;
      mod = mod.replace(/\b(\w+)(inha|inho)\b/gi, "pequeno $1"); 
      mod = mod.replace(/\b(\w+)(ão|zão|ona)\b/gi, "gigante $1");
      mod = mod.replace(/(^|[\s,.;:!?()"])(ó|ô|oh)(?=$|[\s,.;:!?()"])/gi, "$1_voc_");
      mod = mod.replace(/(^|[\s,.;:!?()"])(não|nao|nunca|jamais)(?=$|[\s,.;:!?()"])/gi, "$1_neg_");
      mod = mod.replace(/\b(pequeno|pequena|pequenos|pequenas|miúdo|miúda|miúdos|miúdas)\b/gi, "_dim_ink_");
      mod = mod.replace(/\b(gigante|gigantes|grande|grandes|enorme|enormes)\b/gi, "_dim_mo_");
      mod = mod.replace(/\b(grandioso|majestoso|grandiosa|majestosa)\b/gi, "_hon_re_");
      mod = mod.replace(/\b(amado|amada|querido|querida)\b/gi, "_hon_ma_");
      mod = mod.replace(/\b(desprezível|desprezivel|traidor|maldito|maldita)\b/gi, "_hon_nu_");
      mod = mod.replace(/\b(fofo|fofa|bonitinho|bonitinha)\b/gi, "_hon_li_");
      mod = mod.replace(/\b(mestre|especialista|sábio|sabio)\b/gi, "$1 _hon_jo_");
      mod = mod.replace(/\b(comigo)\b/gi, "_comp_ mim"); 
      mod = mod.replace(/\b(contigo)\b/gi, "_comp_ ti");
      mod = mod.replace(/\b(consigo)\b/gi, "_comp_ si");
      mod = mod.replace(/\b(com\s+ele)\b/gi, "_comp_ ele");
      mod = mod.replace(/\b(com\s+ela)\b/gi, "_comp_ ela");
      mod = mod.replace(/\b(conosco)\b/gi, "_comp_ nos");
      mod = mod.replace(/\b(convosco)\b/gi, "_comp_ vos");
      mod = mod.replace(/\b(com\s+eles|com\s+elas)\b/gi, "_comp_ eles");

      finalTranslated = mod.split('\n').map((line: string) => {
          if (!line.trim()) return '';
          let tokens = tokenizarPalavras(line);
          let outTokens: any[] = [];
          let isNeg = false; let isVoc = false; let isComp = false;

          for(let i=0; i < tokens.length; i++) {
              let t = tokens[i]; let nt = normalizar(t);

              if(nt === '_neg_') { isNeg = true; continue; }
              if(nt === '_voc_') { isVoc = true; continue; }
              if(nt === '_comp_') { isComp = true; continue; }
              if(nt.startsWith('_hon_') || nt.startsWith('_dim_')) {
                  outTokens.push({ text: nt, meta: { isMeta: true } }); continue;
              }

              let match = obterCandidatoDesambiguado(tokens, i, outTokens);
              if(match) {
                  let carnWord = match.entry.target;
                  let meta = match.entry;

                  if(meta.isVerbo) {
                      if(isNeg) { carnWord = 'An ' + carnWord; isNeg = false; }
                      if(meta.tense === 'past') carnWord += 'em';
                      if(meta.tense === 'fut') carnWord += 'ra';
                  }

                  if(meta.isSubst) {
                      if(meta.isPlural) carnWord += 'is';
                      if(isVoc) { carnWord = 'Ha ' + carnWord; isVoc = false; }
                  }

                  if(meta.isPronome) {
                      let objTarget = outTokens.some(x => x.meta && x.meta.isVerbo);
                      if(objTarget && !isComp && !carnWord.endsWith('i') && !['Ana','Ento','Nof','Nas','Anon','Uri','Nae'].includes(carnWord)) carnWord += 'i';
                      if(isComp) {
                          carnWord = 'Hena' + (carnWord.endsWith('i') ? carnWord : carnWord + 'i');
                          carnWord = carnWord.charAt(0).toUpperCase() + carnWord.slice(1).toLowerCase();
                          isComp = false;
                      }
                  }

                  outTokens.push({ text: carnWord, orig: t, meta: meta });
                  i += match.tamanho - 1;
              } else {
                  outTokens.push({ text: t, orig: t, meta: { isPunct: !ehPalavra(t) } });
              }
          }

          for(let i=0; i < outTokens.length; i++) {
              if(outTokens[i].text.startsWith('_hon_')) {
                  let suf = outTokens[i].text.split('_')[2];
                  let realSuf = '-' + (suf === 're' ? 'rê' : suf);
                  let target = -1;
                  for(let j=i-1; j>=0; j--) if(outTokens[j].meta && outTokens[j].meta.isSubst) { target = j; break; }
                  if(target === -1) {
                     for(let j=i+1; j<outTokens.length; j++) if(outTokens[j].meta && outTokens[j].meta.isSubst) { target = j; break; }
                  }
                  if(target !== -1) {
                      let textNode = outTokens[target].text;
                      if(textNode.endsWith('is')) { outTokens[target].text = textNode.slice(0, -2) + realSuf + 'is'; } 
                      else { outTokens[target].text += realSuf; }
                  }
                  outTokens.splice(i, 1); i--;
              }
          }

          for(let i=0; i < outTokens.length; i++) {
              if(outTokens[i].text.startsWith('_dim_')) {
                  let dim = outTokens[i].text === '_dim_ink_' ? 'Ink' : 'Mö';
                  let target = -1;
                  for(let j=i-1; j>=0; j--) if(outTokens[j].meta && outTokens[j].meta.isSubst) { target = j; break; }
                  if(target === -1) {
                     for(let j=i+1; j<outTokens.length; j++) if(outTokens[j].meta && outTokens[j].meta.isSubst) { target = j; break; }
                  }
                  if(target !== -1) { outTokens[target].text = dim + ' ' + outTokens[target].text; }
                  outTokens.splice(i, 1); i--;
              }
          }

          for(let i=0; i < outTokens.length; i++) {
              let curr = outTokens[i];
              if(curr.meta && curr.meta.isSubst) {
                  let mods = []; let j = i + 1;
                  while(j < outTokens.length) {
                      let next = outTokens[j];
                      if(next.meta && (next.meta.isPunct || next.meta.isSubst || next.meta.isVerbo)) break;
                      if(next.meta && (next.meta.isAdj || next.meta.isPronome || next.meta.isArtigo)) {
                          mods.push(next); outTokens.splice(j, 1); continue;
                      }
                      j++;
                  }
                  if(mods.length > 0) {
                      outTokens.splice(i, 0, ...mods);
                      i += mods.length; 
                  }
              }
          }

          for(let i=0; i < outTokens.length; i++) {
              let curr = outTokens[i];
              if(curr.meta && curr.meta.isSubst && curr.meta.isNeutro) {
                  let j = i - 1;
                  while(j >= 0) {
                      let prev = outTokens[j];
                      if(prev.meta && (prev.meta.isPunct || prev.meta.isVerbo)) break;
                      if(prev.meta && (prev.meta.isArtigo || prev.meta.isPronome)) {
                          let ptNorm = normalizar(prev.orig);
                          if(['o', 'a', 'os', 'as'].includes(ptNorm)) prev.text = 'Ni';
                          else if(['ele', 'ela'].includes(ptNorm)) prev.text = 'Nai';
                          else if(['eles', 'elas'].includes(ptNorm)) prev.text = 'Naie';
                          else if(['este', 'esta', 'esse', 'essa', 'isso', 'isto', 'aquilo'].includes(ptNorm)) prev.text = 'Tai';
                      }
                      j--;
                  }
              }
          }

          let resultStr = outTokens.map(t => t.text).join(' ');
          resultStr = resultStr.replace(/\s+([,.;:!?])/g, '$1').replace(/ {2,}/g, ' ').trim();
          resultStr = resultStr.replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
          return resultStr;
      }).join('\n');
    }

    return NextResponse.json({ translatedText: finalTranslated });

  } catch (error: any) {
    console.error('Erro na Tradução NLP:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}