import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function ArsenalPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      {/* Efeito Visual Fundo Arsenal */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-stone-900/60 to-transparent pointer-events-none border-b border-stone-800/30"></div>

      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-6xl mx-auto relative z-10">
        
        <header className="mb-16 border-b border-stone-800 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-300 mb-4 font-serif drop-shadow-md">
            Arsenal e Artefatos Místicos
          </h1>
          <p className="text-xl text-stone-400 italic">
            O catálogo monumental de armamentos forjados em aço, magia, caos e divindade.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* ==========================================
              AS RELÍQUIAS DIVINAS
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-amber-400 mb-6 font-serif flex items-center gap-3 border-b border-amber-900/30 pb-2">
              <span className="text-4xl text-amber-500">✨</span> As Relíquias Divinas
            </h2>
            <p className="text-stone-400 mb-6">Artefatos originados da Morada dos Deuses ou imbuídos diretamente de sua autoridade. O poder absoluto forjado em Astra Lumina e Carnenia.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="bg-gradient-to-br from-amber-950/20 to-stone-900 p-5 rounded-lg border border-amber-900/50 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-600 text-stone-950 text-[10px] font-bold px-2 py-1 rounded-bl-lg tracking-wider">A MAIS PODEROSA</div>
                <h3 className="font-bold text-amber-300 text-lg mb-1">Tabuleta de Odes Inerentes</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Catalisador • Astra Lumina</p>
                <p className="text-sm text-stone-300">A arma mais devastadora e absoluta de todo o universo, empunhada por uma Divindade.</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Movimento de Mil Sóis</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Arco • Astra Lumina</p>
                <p className="text-sm text-stone-300">Empunhado por uma divindade; carrega o brilho celestial absoluto.</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Presságio de Hinos Exícios</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Lança • Astra Lumina</p>
                <p className="text-sm text-stone-300">A lâmina divina que prenuncia a cantiga mortal dos servos de Morsith.</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Aliança Perpétua</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Catalisador • Astra Lumina</p>
                <p className="text-sm text-stone-300">O tomo sagrado entregue pelos deuses ao <TermoWiki href="reinos#caules">Hierofante</TermoWiki> da Luz durante "O Sopro e a Fonte".</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Chama Imortal</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Catalisador • Astra Lumina</p>
                <p className="text-sm text-stone-300">Um artefato divino manipulado apenas pelos habitantes do plano cósmico.</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Perfuradora Inicial</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Espada • Astra Lumina</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Luz Celeste</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Adaga • Astra Lumina</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Subjugadora de Guerras</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Espada Grande • Astra Lumina</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Abrasadora do Caos</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Espada • Lý Sgrav (Sem dono)</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Chamado da Lua & Mapa da Terra</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Arco / Catalisador • Astra Lumina</p>
                <p className="text-sm text-stone-300">Ambos empunhados pelo misterioso(a) Oraion.</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Ciclos Celestes Infinitos</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Lança • Astra Lumina</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800">
                <h3 className="font-bold text-amber-300 text-lg mb-1">Outras Armas Divinas</h3>
                <p className="text-sm text-stone-300 mt-2">Dádiva do Mar (Caules), Borla do Guerreiro do Céu (Ferusnoctis), Flor do Réquiem (Astra Lumina), Sustentadora (Kalas), Ascensão Real (Oraion), Sintetizadora de Ventos, Olho da Tempestade, Chave dos Portões Submersos, Estandarte de Canções a Eros.</p>
              </div>
            </div>
          </section>


          {/* ==========================================
              A HERANÇA ÉLFICA
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-sky-400 mb-6 font-serif flex items-center gap-3 border-b border-sky-900/30 pb-2">
              <span className="text-4xl text-sky-500">🍃</span> A Herança Élfica
            </h2>
            <p className="text-stone-400 mb-6">Técnicas únicas de manipulação do <TermoWiki href="magia">Manancial</TermoWiki>. Os resquícios mortais do império élfico perdido de Valank e arredores.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800 border-t-2 border-t-sky-500">
                <h3 className="font-bold text-sky-300 text-lg mb-1">Códice de Almas Perdidas</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Catalisador • Valank</p>
                <p className="text-sm text-stone-300">A lendária arma do herói Domenico, perdida após a guerra (cópia usada em <TermoWiki href="reinos#ferusnoctis">Ferusnoctis</TermoWiki>).</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800 border-t-2 border-t-sky-500">
                <h3 className="font-bold text-sky-300 text-lg mb-1">Acqua Iluminada & Julgadora das Sombras</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Arco / Lança • Valank</p>
                <p className="text-sm text-stone-300">Clássicas armas empunhadas por guerreiros elfos antes da queda.</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800 border-t-2 border-t-sky-500">
                <h3 className="font-bold text-sky-300 text-lg mb-1">Esplendor Carmesim</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Espada • Leovalis</p>
                <p className="text-sm text-stone-300">Sem dono, repousa no reino solar aguardando um mestre capaz de controlá-la.</p>
              </div>

              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800 border-t-2 border-t-sky-500">
                <h3 className="font-bold text-sky-300 text-lg mb-1">Chamado Silencioso</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Adaga • Aika</p>
                <p className="text-sm text-stone-300">Lâmina que ressoa silenciosamente através dos ermos.</p>
              </div>
              
              <div className="bg-stone-900/50 p-5 rounded-lg border border-stone-800 border-t-2 border-t-sky-500 col-span-1 md:col-span-2">
                <h3 className="font-bold text-sky-300 text-lg mb-1">Outros Artefatos Élficos</h3>
                <p className="text-sm text-stone-300 mt-2">Perdição de Cinábrio (<TermoWiki href="reinos#eldermor">Eldermor</TermoWiki>), Orações para o mar (<TermoWiki href="reinos#husu">Husú</TermoWiki>), Elegia do Passado (Ly Sgrav), Prenúncio de noites inertes (<TermoWiki href="reinos#nzarakhur">Nzara'khur</TermoWiki>), Lâmina do alvorecer resplandecente & Histórias de Eras Inerentes (Valank), Pluma do Esplendor Imperial (Antiga Valank), Orvalho (Desconhecido).</p>
              </div>
            </div>
          </section>


          {/* ==========================================
              AS LÂMINAS DO CAOS
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-red-500 mb-6 font-serif flex items-center gap-3 border-b border-red-900/30 pb-2">
              <span className="text-4xl text-red-600">🌑</span> As Lâminas do Caos
            </h2>
            <p className="text-stone-400 mb-6">Armamentos manchados pelas Áreas de Dissonância. Manipuladores destas armas arriscam a <em>Corrupção do Ser</em> a cada golpe desferido.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="bg-stone-950 p-5 rounded-lg border border-red-900/50 shadow-[inset_0_0_15px_rgba(220,38,38,0.1)]">
                <h3 className="font-bold text-red-400 text-lg mb-1">Lâmina do Olvido</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Espada • Origem Desconhecida</p>
                <p className="text-sm text-stone-300">Um artefato apocalíptico que apaga memórias e esperanças; atualmente sem dono.</p>
              </div>

              <div className="bg-stone-950 p-5 rounded-lg border border-red-900/50 shadow-[inset_0_0_15px_rgba(220,38,38,0.1)]">
                <h3 className="font-bold text-red-400 text-lg mb-1">Cortadora de Mentes</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Adaga • Tsuia</p>
                <p className="text-sm text-stone-300">Afiada o suficiente para rasgar não apenas a carne, mas a psique do oponente.</p>
              </div>

              <div className="bg-stone-950 p-5 rounded-lg border border-red-900/50 shadow-[inset_0_0_15px_rgba(220,38,38,0.1)]">
                <h3 className="font-bold text-red-400 text-lg mb-1">Fruto da Morte</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Catalisador • Torre Negra</p>
                <p className="text-sm text-stone-300">Empunhado por Necromantes corrompidos que zombam do reino de Morsith.</p>
              </div>
              
              <div className="bg-stone-950 p-5 rounded-lg border border-red-900/50 shadow-[inset_0_0_15px_rgba(220,38,38,0.1)] col-span-1 md:col-span-3">
                <h3 className="font-bold text-red-400 text-lg mb-1">O Arsenal Caótico e Macabro</h3>
                <p className="text-sm text-stone-300 mt-2">Prego Perfurador de Corpos (Obliviador), Borla do esplendor alpino (Pantanal Central), Lâmina da escuridão perpetua, Fúria Inexorável (Empunhada por Demônios).</p>
              </div>

            </div>
          </section>

          {/* ==========================================
              ARSENAL ELEMENTAL & FÍSICO
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 font-serif flex items-center gap-3 border-b border-emerald-900/30 pb-2">
              <span className="text-4xl text-emerald-500">⚔️</span> Arsenal Elemental & Físico
            </h2>
            <p className="text-stone-400 mb-6">Armamentos que moldam as energias do Manancial Livre no ambiente, e ferramentas cujo corte é impulsionado por aço pesado e mestria bruta.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Elementais Destacadas */}
              <div className="bg-stone-900/40 p-6 rounded-xl border border-emerald-900/50">
                <h3 className="text-2xl font-bold text-emerald-500 mb-4 font-serif">Poder Elemental Notável</h3>
                <ul className="space-y-4 text-sm text-stone-300">
                  <li><strong className="text-emerald-300 block">Lança da Chuva & Báculo de Daria:</strong> Legado das fadas de Umbraflor e herança humana de Daria.</li>
                  <li><strong className="text-emerald-300 block">Abrasadora das Sombras (Mauvidia):</strong> Espada grande para banir a escuridão.</li>
                  <li><strong className="text-emerald-300 block">Vontade do Vento (Caules):</strong> O arco mortal do reino das águas e brisas.</li>
                  <li><strong className="text-emerald-300 block">Cálice de Hierofania (Nzara’Khur):</strong> O catalisador clerical do deserto profundo.</li>
                  <li><strong className="text-emerald-300 block">As Lâminas Duplas de Silvusgrizzle:</strong> A <em>Expulsora</em> e a <em>Perseguidora</em>; espadas elementais forjadas para trabalharem juntas na dança mortal.</li>
                  <li><strong className="text-emerald-300 block">Cortador Ígneo & Agitação Criogênica:</strong> Artefatos voláteis de Caules e Kalas (o último, incrivelmente, nas mãos de um Demônio).</li>
                </ul>
              </div>

              {/* Físicas Destacadas */}
              <div className="bg-stone-900/40 p-6 rounded-xl border border-stone-700/50">
                <h3 className="text-2xl font-bold text-stone-400 mb-4 font-serif">Mestria Física Notável</h3>
                <ul className="space-y-4 text-sm text-stone-300">
                  <li><strong className="text-stone-300 block">Quebradora de Ondas (Hrafnsyn):</strong> A massiva espada grande exclusiva do Rei (Assur), melhorada pelo metal de Xanytriun.</li>
                  <li><strong className="text-stone-300 block">Semblante de Pedras & Caminhante Perpétuo:</strong> O aço intransponível dos Anões de <TermoWiki href="reinos#eldermor">Eldermor</TermoWiki>.</li>
                  <li><strong className="text-stone-300 block">Cortadora de Nuvens (<TermoWiki href="reinos#tenko">Tenkó</TermoWiki>):</strong> A espada fria humana das ilhas do norte.</li>
                  <li><strong className="text-stone-300 block">Canção as Águas (Kalas):</strong> A brutalidade em forma de espada grande dos bárbaros caçadores.</li>
                  <li><strong className="text-stone-300 block">Escultora da Montanha (Mintaz):</strong> O peso colossal da mineração convertido em guerra.</li>
                  <li><strong className="text-stone-300 block">Trunfo do Império (Husú):</strong> Embora pertencente a uma divindade, ataca com pura e crua força física.</li>
                </ul>
              </div>

            </div>
          </section>

        </div>

        {/* Rodapé do Artigo */}
        <footer className="mt-20 pt-8 border-t border-stone-800 text-stone-500 text-sm flex justify-between items-center relative z-10">
          <p>Última modificação: Era Atual</p>
          <Link href="/wiki" className="bg-stone-900 hover:bg-stone-800 text-amber-500 px-6 py-3 rounded-lg transition-colors border border-stone-700 font-semibold shadow-lg">
            Voltar para a Wiki
          </Link>
        </footer>

      </article>
    </div>
  );
}