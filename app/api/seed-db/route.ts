import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
function normalizar(texto: string) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function gerarPluralPadrao(singular: string) {
  const s = singular.trim();
  if (!s || s === '-' || s === '...') return '-';
  return s.endsWith('is') ? s : s + 'is';
}

function gerarPronunciaAutomatica(singular: string) {
  if (!singular || singular === '-' || singular.includes(' ')) return singular;
  return singular.split('-').map(p => {
    let lowerP = p.toLowerCase();
    let indexTonica = (lowerP.startsWith('i') || lowerP.startsWith('u') || /^(p|s|r|tr|ge|q)[iu]/i.test(lowerP)) ? 1 : 0; 
    let silabada = p.replace(/([aeiouāēōūäëöàèìòùáéíóúy])([bcdfghjklmnpqrstvwxz]+)([aeiouāēōūäëöàèìòùáéíóúy])/gi, '$1-$2$3');
    silabada = silabada.replace(/([iu])([aeiouāēōūäëöàèìòùáéíóúy])/gi, '$1-$2');
    let silabas = silabada.split('-');
    let targetIndex = (indexTonica === 0) ? 0 : (silabas.length - 1);
    if(targetIndex >= silabas.length) targetIndex = silabas.length - 1;
    if (!/[āēōūäëöàèìòùáéíóú]/.test(silabas[targetIndex])) {
        silabas[targetIndex] = silabas[targetIndex].replace(/([aeiou])/i, (match) => {
            const mapa: Record<string, string> = {'a':'á', 'e':'é', 'i':'í', 'o':'ó', 'u':'ú', 'A':'Á', 'E':'É', 'I':'Í', 'O':'Ó', 'U':'Ú'};
            return mapa[match] || match;
        });
    }
    return silabas.join('-');
  }).join('-');
}

export async function GET() {
  const client = await pool.connect();
  try {
    const filePath = path.join(process.cwd(), 'dicionario.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const dadosBrutos = JSON.parse(fileContent);

    let count = 0;
    const vistos = new Set();

    for (const raw of dadosBrutos) {
        let singular = '', traducao = '', classe = '', plural = '', pronuncia = '', uso = '', ambiente = '';

        if (Array.isArray(raw)) {
            const limpos = raw.filter(item => item !== null && item !== undefined && String(item).trim() !== '');
            singular  = limpos[0] || ''; traducao  = limpos[1] || ''; classe = limpos[2] || '';
            plural    = limpos[3] || ''; pronuncia = limpos[4] || ''; uso    = limpos[5] || '';
            ambiente  = limpos[6] || '';
        } else if (typeof raw === 'object' && raw !== null) {
            const keys = Object.keys(raw);
            const getVal = (palavrasChave: string[]) => {
                for (let p of palavrasChave) {
                    const foundKey = keys.find(k => normalizar(k).includes(normalizar(p)));
                    if (foundKey && raw[foundKey] && String(raw[foundKey]).trim() !== '') {
                        return String(raw[foundKey]).trim();
                    }
                }
                return '';
            };

            singular  = getVal(['singular', 'palavra', 'dicionario', 'field1', 'column1']);
            traducao  = getVal(['traducao', 'significado', 'field2', 'column2']);
            classe    = getVal(['classe', 'clase', 'field3', 'column3']);
            plural    = getVal(['plural', 'field4', 'column4']);
            pronuncia = getVal(['pronuncia', 'field5', 'column5']);
            uso       = getVal(['notas', 'uso', 'origem', 'field6', 'column6']);
            ambiente  = getVal(['ambiente', 'field7', 'column7']);

            if (!singular && !traducao && keys.length >= 2) {
                const vals = Object.values(raw).map(v => v !== null && v !== undefined ? String(v).trim() : '').filter(v => v !== '');
                singular  = vals[0] || ''; traducao  = vals[1] || ''; classe = vals[2] || '';
                plural    = vals[3] || ''; pronuncia = vals[4] || ''; uso    = vals[5] || '';
                ambiente  = vals[6] || '';
            }
        }

        if (!singular || /^null$/i.test(singular)) continue;
        if (/^(pessoa|palavra|tipo|honorifico|honíficos|dicionario|palavra\/singular)$/i.test(normalizar(singular))) continue;

        if (singular && traducao) {
            const sNorm = normalizar(singular);
            const tNorm = normalizar(traducao);
            const cNorm = normalizar(classe);
            const isVerbo = /\bverbo\b/.test(cNorm);
            const isSubstantivo = cNorm.includes('substant') || cNorm.includes('subst');
            const isAdjetivo = cNorm.includes('adjet') || cNorm.includes('adj');

            if ((isSubstantivo || isAdjetivo) && (!plural || plural === '-' || /^null$/i.test(plural))) {
                plural = gerarPluralPadrao(singular);
            }

            if (!pronuncia || pronuncia === '-' || /^null$/i.test(pronuncia)) {
                pronuncia = gerarPronunciaAutomatica(singular);
            }

            const chave = `${sNorm}|${tNorm}|${cNorm}`;
            if (!vistos.has(chave)) {
                vistos.add(chave);
                
                const traducoesArray = traducao.split(/[\/,;()]/).map((t: string) => normalizar(t)).filter(Boolean);

                try {
                    await client.query(
                      `INSERT INTO dictionary (singular, traducao, classe, plural, pronuncia, notas, ambiente, is_verbo, s_norm, t_norm, c_norm, traducoes_array)
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
                      [singular, traducao, classe, plural, pronuncia, uso, ambiente, isVerbo, sNorm, tNorm, cNorm, traducoesArray]
                    );
                    count++;
                } catch (insertError) {
                    console.log(`[Aviso] Erro ao inserir ${singular}:`, insertError);
                }
            }
        }
    }

    return NextResponse.json({ message: `Sucesso! ${count} palavras inseridas no banco de dados.`, total: count }, { status: 200 });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    client.release();
  }
}