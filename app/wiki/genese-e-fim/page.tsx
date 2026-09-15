import Link from 'next/link';

// Componente para links internos da Wiki
const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function GeneseFimPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      {/* Efeito Visual - Metade Criação (Dourado/Branco), Metade Fim (Roxo/Cinza escuro) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>

      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto relative z-10">
        
        <header className="mb-16 border-b border-stone-800 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Gênese e Fim
          </h1>
          <p className="text-xl text-stone-400 italic">
            Como os poemas de Kalinor forjaram o mundo material e como os Hinos de Morsith irão desfazê-lo.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* ==========================================
              A CRIAÇÃO (OS POEMAS DE KALINOR)
              ========================================== */}
          <section>
            <h2 className="text-4xl font-bold text-amber-400 mb-8 font-serif flex items-center gap-3">
              <span className="text-5xl text-yellow-500">✨</span> A Criação de Carnenia
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-stone-300">
              <p>
                No princípio absoluto, na glória de <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki>, <strong>Kalinor, O Forjador</strong>, decidiu criar algo genuinamente novo. Ele não utilizou fogo ou martelos; Kalinor forjou o universo através de seus <em>Poemas</em> — a mais pura essência de seu poder e a manifestação tangível de sua vontade divina.
              </p>
              
              <div className="bg-gradient-to-r from-stone-900 to-amber-950/20 p-8 rounded-xl border-l-4 border-amber-500 shadow-md">
                <p className="text-stone-300 italic mb-4">
                  "Os poemas de Kalinor pairaram sobre o abismo, onde absolutamente nada existia; uma realidade escura, além de Astra Lumina... um lugar de <strong>nada</strong>."
                </p>
                <p className="text-stone-400 text-base">
                  Desses poemas que tocaram o vazio cósmico, nasceu <strong>Carnenia</strong>, o mundo mortal. Em suas terras recém-formadas brotaram as raças mortais: humanos, elfos, anões, trolls, fadas e toda a flora da natureza.
                </p>
              </div>

              <p>
                Entretanto, os seres forjados pelas palavras divinas eram frágeis e desprovidos de conhecimento sobre a própria existência. Compadecido, Kalinor enviou a Carnenia as suas primeiras e mais grandiosas criações: os <strong>Doze Discípulos</strong>, hoje reverenciados como os Deuses do <TermoWiki href="panteao-e-religioes">Panteão</TermoWiki>. Cada discípulo representava um conceito fundamental para sustentar o mundo:
              </p>

              <div className="bg-stone-900/50 p-6 rounded-lg border border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex gap-2"><span className="text-yellow-400 font-bold">Heliúmhar:</span> Sol e Luz</div>
                <div className="flex gap-2"><span className="text-pink-400 font-bold">Meeren:</span> Amor e Proteção</div>
                <div className="flex gap-2"><span className="text-orange-600 font-bold">Thalnok:</span> A Terra e os Minérios</div>
                <div className="flex gap-2"><span className="text-blue-500 font-bold">Vayel:</span> A Água e o Mar</div>
                <div className="flex gap-2"><span className="text-green-500 font-bold">Elyel:</span> A Vida e suas leis</div>
                <div className="flex gap-2"><span className="text-stone-400 font-bold">Morsith:</span> A Morte</div>
                <div className="flex gap-2"><span className="text-sky-300 font-bold">Celes:</span> O Céu</div>
                <div className="flex gap-2"><span className="text-purple-400 font-bold">Theradriel:</span> Chuvas e Tempestades</div>
                <div className="flex gap-2"><span className="text-indigo-300 font-bold">Selenys:</span> A Lua</div>
                <div className="flex gap-2"><span className="text-teal-300 font-bold">Auray-ctun:</span> Ventos e Brisas</div>
                <div className="flex gap-2"><span className="text-red-500 font-bold">Valacarys:</span> Conflitos e Guerra</div>
              </div>

              <div className="border-l-4 border-red-800 pl-6 py-2 mt-8 text-stone-400">
                <h3 className="font-bold text-red-500 text-xl mb-2">A Queda do Décimo Segundo</h3>
                <p>
                  Quando as onze divindades estabeleceram a fundação do mundo, alertaram Kalinor de que o 12º discípulo não seria necessário e que sua descida não traria bonança aos mortais. O Forjador retrucou, afirmando que todos eram fundamentais à sua maneira. Assim, <strong>Dervhanan</strong> desceu a Carnenia, trazendo consigo, inevitavelmente, o caos, a ruína e a catástrofe. E com todos os doze pilares fincados, o mundo seguiu o seu curso.
                </p>
              </div>
            </div>
          </section>


          {/* ==========================================
              A DESTRUIÇÃO (O FINDAR DAS ERAS)
              ========================================== */}
          <section>
            <h2 className="text-4xl font-bold text-indigo-400 mb-8 font-serif flex items-center gap-3">
              <span className="text-5xl text-stone-600">🌑</span> O Findar das Eras
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-stone-300">
              <p>
                Em Carnenia, a crença escatológica (o estudo do fim do mundo) é praticamente universal. Tradições tão divergentes quanto o Xintoísmo de <TermoWiki href="reinos#tenko">Tenkó</TermoWiki>, o Rito Sheiong de <TermoWiki href="reinos#husu">Husú</TermoWiki>, os adoradores da lua em <TermoWiki href="reinos#silvusgrizzle">Silvusgrizzle</TermoWiki> e as imponentes catedrais de Noxae Luxae comungam de uma única certeza mística: o universo não será destruído por armas ou fogo, mas pelo som.
              </p>

              <div className="bg-stone-900 border border-indigo-900/50 rounded-xl p-8 shadow-[inset_0_0_30px_rgba(49,46,129,0.2)]">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4 font-serif">Os Cantores Exícios</h3>
                <p className="text-stone-300 mb-4">
                  Os Cantores Exícios são entidades celestiais assustadoras e belas que servem diretamente a <strong>Morsith, o Senhor da Morte</strong>. Durante a manutenção atual do mundo, sua função é entoar as "Canções de Morte", murmúrios etéreos que guiam em segurança as almas dos falecidos para o mundo dos mortos, garantindo que alcancem as águas pacíficas do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki> para repousar eternamente.
                </p>
                
                <hr className="border-stone-800 my-6" />

                <h3 className="text-2xl font-bold text-purple-400 mb-4 font-serif">O Hino Final</h3>
                <p className="text-stone-300">
                  A profecia dita que, no limiar do fim de tudo, os céus irão se romper. Descendo diretamente de Astra Lumina, o coral imenso dos Cantores Exícios surgirá ladeado pelo próprio Morsith.
                </p>
                <p className="text-stone-300 mt-4 italic font-semibold text-purple-300/80">
                  Eles não brandirão espadas. Eles simplesmente entoarão os <strong>Hinos do Findar das Eras</strong>. 
                </p>
                <p className="text-stone-400 mt-4">
                  O som destas vozes terá um poder singular e aterrador: <strong>apagar os Poemas de Kalinor</strong>. Cada nota do hino fará a realidade desatar-se. As palavras que forjaram a matéria começarão a se dissolver. A existência mortal será varrida silenciosamente para fora da tapeçaria cósmica, e absolutamente tudo o que existiu em Carnenia voltará a ser apenas uma parte líquida do infinito Mar Primordial. O Vazio, enfim, retomará seu lugar.
                </p>
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