"use client";

import { useState } from 'react';
import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function PanteaoReligioesPage() {
  const [religiaoAberta, setReligiaoAberta] = useState<string | null>(null);

  const toggleReligiao = (id: string) => {
    setReligiaoAberta(religiaoAberta === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-900/20 via-stone-900 to-transparent pointer-events-none"></div>

      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-5xl mx-auto relative z-10">
        
        <header className="mb-16 border-b border-amber-900/30 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-600 mb-4 font-serif drop-shadow-md">
            Panteão e Religiões
          </h1>
          <p className="text-xl text-amber-200/60 italic">
            Os Doze Discípulos, a fé mortal e o dogma unificado do Fim das Eras.
          </p>
        </header>

        <div className="space-y-20 text-lg leading-relaxed text-stone-300 font-sans">
          
          {/* ==========================================
              O PANTEÃO DIVINO
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-amber-400 mb-8 font-serif flex items-center gap-3 border-b border-stone-800/50 pb-2">
              <span className="text-4xl text-yellow-500">👑</span> O Panteão e a Criação
            </h2>
            <p className="mb-6">
              Acima de todas as crenças mortais reside <strong>Kalinor, O Forjador</strong>, a entidade primordial que teceu a realidade a partir de seus <TermoWiki href="genese-e-fim">Poemas</TermoWiki> em <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki>. Para guiar a existência em Carnenia, Kalinor enviou suas maiores criações: os <strong>Doze Discípulos</strong>, hoje cultuados como os Deuses do Panteão.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-yellow-400"><strong className="text-yellow-400 block">Heliúmhar</strong>Deus do Sol e da Luz</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-pink-400"><strong className="text-pink-400 block">Meeren</strong>Deusa do Amor e Proteção</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-orange-600"><strong className="text-orange-600 block">Thalnok</strong>Regente da Terra e Minérios</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-blue-500"><strong className="text-blue-500 block">Vayel</strong>Deus da Água e dos Mares</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-green-500"><strong className="text-green-500 block">Elyel</strong>Regente da Vida e suas Leis</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-stone-400"><strong className="text-stone-400 block">Morsith</strong>Senhor da Morte</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-sky-400"><strong className="text-sky-300 block">Celes</strong>Deus do Céu</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-purple-400"><strong className="text-purple-400 block">Theradriel</strong>Domínio das Chuvas e Tempestades</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-indigo-300"><strong className="text-indigo-300 block">Selenys</strong>Deusa da Lua</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-teal-300"><strong className="text-teal-300 block">Auray-ctun</strong>Senhor do Ar, Ventos e Brisas</div>
              <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 border-t-2 border-t-red-500"><strong className="text-red-500 block">Valacarys</strong>Regente dos Conflitos e da Guerra</div>
              <div className="bg-stone-950 p-4 rounded-lg border border-red-900/50 border-t-2 border-t-red-700 shadow-[inset_0_0_10px_rgba(220,38,38,0.1)]"><strong className="text-red-600 block">Dervhanan</strong>O 12º, Senhor do Caos e Catástrofe</div>
            </div>
          </section>

          {/* ==========================================
              AS RELIGIÕES PELO MUNDO (ACORDEÃO)
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-stone-200 mb-8 font-serif border-b border-stone-800/50 pb-2">
              As Fé e a Adoração em Carnenia
            </h2>
            
            <div className="flex flex-col gap-4">
              
              {/* Igreja de Noxae Luxae */}
              <div className="border border-indigo-900/50 rounded-xl overflow-hidden bg-stone-900/20">
                <button 
                  onClick={() => toggleReligiao('noxae')}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-900/60 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-400 font-serif">A Igreja de Noxae Luxae</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Caules • Leovalis • Ferusnoctis</p>
                  </div>
                  <span className="text-3xl text-indigo-500 font-light">{religiaoAberta === 'noxae' ? '−' : '+'}</span>
                </button>
                {religiaoAberta === 'noxae' && (
                  <div className="p-6 pt-0 text-stone-300 text-base border-t border-indigo-900/30 mt-2 space-y-6">
                    <p className="mt-4">
                      Instituição hegemônica fundada no período pós-guerra na cidade de <TermoWiki href="reinos#caules">Caules</TermoWiki>, baseada na soberania dos deuses restaurados do Ar (<TermoWiki href="panteao-e-religioes">Auray-ctun</TermoWiki>) e da Água (<TermoWiki href="panteao-e-religioes">Vayel</TermoWiki>).
                    </p>
                    <div className="bg-stone-950 p-5 rounded-lg border border-indigo-900/30">
                      <h4 className="font-bold text-indigo-300 mb-2">O Sopro e a Fonte</h4>
                      <p className="text-sm text-stone-400">
                        O milagroso ritual de consagração realizado exatamente 24 horas após a aclamação de um novo líder. Durante a cerimônia, os avatares de Auray-ctun e Vayel descem ao plano mortal para confiar ao eleito o tomo de folhas de ouro sagrado: a <TermoWiki href="arsenal">Aliança Perpétua</TermoWiki>. Após isso, o pontífice permanece recluso na grandiosa Basílica de Nuestra Lux, revelando-se ao povo apenas anualmente no <em>Dia de Divinitatis</em>.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-200 mb-3 border-b border-stone-800 pb-2">A Hierarquia Clériga</h4>
                      <ul className="space-y-3">
                        <li className="flex flex-col"><strong className="text-indigo-400">1. Hierofante da Luz</strong> <span className="text-sm text-stone-400">O pontífice supremo.</span></li>
                        <li className="flex flex-col"><strong className="text-indigo-300">2. Servo do Ar e das Águas</strong> <span className="text-sm text-stone-400">Secretário-geral e sucessor emergencial imediato.</span></li>
                        <li className="flex flex-col"><strong className="text-indigo-300">3. Conselho das Vozes</strong> <span className="text-sm text-stone-400">Os 7 Sumo-Sacerdotes inamovíveis.</span></li>
                        <li className="flex flex-col"><strong className="text-indigo-300">4. Arcontes das Correntes</strong> <span className="text-sm text-stone-400">Governadores provinciais com a terrível prerrogativa de declarar heresia.</span></li>
                        <li className="flex flex-col"><strong className="text-indigo-300">5. Altos-Sacerdotes e Sacerdotes da Luz</strong> <span className="text-sm text-stone-400">As lideranças paroquiais e regionais.</span></li>
                        <li className="flex flex-col"><strong className="text-indigo-200">6. Acólitos</strong> <span className="text-sm text-stone-400">Estudantes em formação doutrinária.</span></li>
                        <li className="flex flex-col"><strong className="text-stone-400">7. Servidores da Corrente</strong> <span className="text-sm text-stone-500">Leigos dedicados às funções operacionais e materiais dos templos.</span></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Rito Sheiong */}
              <div className="border border-emerald-900/50 rounded-xl overflow-hidden bg-stone-900/20">
                <button 
                  onClick={() => toggleReligiao('sheiong')}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-900/60 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 font-serif">O Rito Sheiong</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Império de Husú</p>
                  </div>
                  <span className="text-3xl text-emerald-500 font-light">{religiaoAberta === 'sheiong' ? '−' : '+'}</span>
                </button>
                {religiaoAberta === 'sheiong' && (
                  <div className="p-6 pt-0 text-stone-300 text-base border-t border-emerald-900/30 mt-2 space-y-4">
                    <p className="mt-4">
                      A religião oficial do império de <TermoWiki href="reinos#husu">Husú</TermoWiki>, estruturada sobre os ensinamentos do histórico e mítico <em>Reino Sheiong</em> (cuja capital sagrada era a cidade de Weio).
                    </p>
                    <p>
                      A religião é profundamente centrada no culto aos deuses aliado ao rigoroso equilíbrio moral e espiritual. No Rito, exige-se absoluto respeito aos rituais, à hierarquia dos superiores e, acima de tudo, à <strong>Ordem</strong>. Para os seguidores do Rito, a Ordem é o grande pilar do universo; tudo o que é feito para mantê-la é interpretado como o sagrado equilíbrio divino.
                    </p>
                    <div className="bg-stone-950 p-4 border-l-4 border-emerald-600 rounded-r-lg">
                      <p className="text-sm text-stone-400">
                        O rito é permeado de símbolos e cerimônias complexas. Estes atos não servem apenas como expressões de fé, mas como lembretes da eternidade. Eles reafirmam que, desde os tempos glorioosos do Império Sheiong até a era presente, o povo permanece o mesmo e inabalável sob o olhar benevolente dos deuses.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Filhos das Luas Imortais */}
              <div className="border border-slate-700/50 rounded-xl overflow-hidden bg-stone-900/20">
                <button 
                  onClick={() => toggleReligiao('luas')}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-900/60 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-slate-300 font-serif">Os Filhos das Luas Imortais</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Reino de Silvusgrizzle</p>
                  </div>
                  <span className="text-3xl text-slate-400 font-light">{religiaoAberta === 'luas' ? '−' : '+'}</span>
                </button>
                {religiaoAberta === 'luas' && (
                  <div className="p-6 pt-0 text-stone-300 text-base border-t border-slate-700/50 mt-2 space-y-4">
                    <p className="mt-4">
                      O povo de <TermoWiki href="reinos#silvusgrizzle">Silvusgrizzle</TermoWiki> encontra sua unificação inabalável na crença dos Filhos das Luas Imortais. Eles acreditam fervorosamente que as luas brilhando no firmamento não são meros astros, mas os olhos e a manifestação direta de sua deusa protetora, <strong>Selenys</strong>.
                    </p>
                    <p>
                      Por ser formado por uma miscigenação cultural vinda das Planícies Shidan, a religião é quase monoteísta em sua veneração a Selenys, porém carrega um forte sincretismo com o céu e as águas, resultando no culto secundário aos deuses <TermoWiki href="panteao-e-religioes">Celes</TermoWiki> e <TermoWiki href="panteao-e-religioes">Vayel</TermoWiki>.
                    </p>
                    
                    <div className="bg-stone-950 p-5 rounded-lg border border-slate-700/30 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-bold text-slate-200 mb-2">O Yarikhon</h4>
                        <p className="text-sm text-stone-400">
                          O líder supremo da religião. De acordo com o dogma, o pontífice é a eterna reencarnação do <em>Primeiro Emissário da Aurora das Luas</em>, um jovem lendário que desceu para anunciar a vontade da Deusa aos povos primitivos da planície.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-200 mb-2">O Lago Espelhado</h4>
                        <p className="text-sm text-stone-400">
                          No santuário mais sagrado de toda a região Oeste, ocorre o agonizante ritual do <em>Prelúdio do Oasis</em>. O Lago Espelhado é o único local em Carnenia com comprovação absoluta de manifestação divina entre os mortais desde o início da <TermoWiki href="cultura-e-saber">Guerra da Separação</TermoWiki>.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Filhos de Hamaal */}
              <div className="border border-orange-900/50 rounded-xl overflow-hidden bg-stone-900/20">
                <button 
                  onClick={() => toggleReligiao('hamaal')}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-900/60 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400 font-serif">Os Filhos de Hamaal</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Reino de Nzara'Khur</p>
                  </div>
                  <span className="text-3xl text-orange-500 font-light">{religiaoAberta === 'hamaal' ? '−' : '+'}</span>
                </button>
                {religiaoAberta === 'hamaal' && (
                  <div className="p-6 pt-0 text-stone-300 text-base border-t border-orange-900/30 mt-2">
                    A crença ardente do deserto. Focada na sobrevivência e nas lendas passadas através da música e da arte. Suas tradições são mantidas vivas e propagadas por tribos sagradas, como os <TermoWiki href="cultura-e-saber">Guiordes</TermoWiki>.
                  </div>
                )}
              </div>

              {/* Xintoísmo */}
              <div className="border border-sky-900/50 rounded-xl overflow-hidden bg-stone-900/20">
                <button 
                  onClick={() => toggleReligiao('xintoismo')}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-900/60 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-sky-300 font-serif">O Xintoísmo</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Arquipélago de Tenkó</p>
                  </div>
                  <span className="text-3xl text-sky-500 font-light">{religiaoAberta === 'xintoismo' ? '−' : '+'}</span>
                </button>
                {religiaoAberta === 'xintoismo' && (
                  <div className="p-6 pt-0 text-stone-300 text-base border-t border-sky-900/30 mt-2">
                    Praticado no rigoroso isolamento do norte gélido, é uma fé animista que venera as forças brutas da natureza, as tempestades de gelo e a honra isolacionista de seu povo.
                  </div>
                )}
              </div>

            </div>
          </section>

          {/* ==========================================
              O DOGMA UNIVERSAL
              ========================================== */}
          <section>
            <div className="bg-stone-950 p-8 rounded-xl border border-indigo-900/40 relative overflow-hidden">
              <h2 className="text-3xl font-bold text-indigo-400 mb-4 font-serif relative z-10 flex items-center gap-3">
                <span className="text-4xl text-purple-500">🌑</span> O Consenso Escatológico
              </h2>
              <p className="text-stone-300 relative z-10 mb-4 text-lg">
                Apesar das imensas diferenças culturais e dogmáticas, <strong>todas as religiões listadas acima compartilham uma única profecia idêntica</strong> para o fim do mundo.
              </p>
              <p className="text-stone-400 relative z-10">
                Os Filhos das Luas, a Igreja de Noxae Luxae, os Filhos de Hamaal, o Rito Sheiong e os praticantes do Xintoísmo preveem o mesmo evento: o firmamento se rasgará e de Astra Lumina descerá um coral celestial acompanhado por Morsith. Eles entoarão os <strong>Hinos do Findar das Eras</strong>, apagando os Poemas de Kalinor e dissolvendo toda a realidade de volta para o Mar Primordial.
              </p>
              <div className="mt-6 relative z-10">
                <Link href="/wiki/genese-e-fim" className="text-indigo-400 hover:text-indigo-300 font-bold underline decoration-indigo-500/50 underline-offset-4 transition-colors">
                  Leia mais sobre o Fim das Eras e os Cantores Exícios →
                </Link>
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