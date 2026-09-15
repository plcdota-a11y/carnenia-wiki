import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function ArvoreBikmunPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      {/* Efeito de Fundo Florestal */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none"></div>

      {/* Navegação / Breadcrumbs */}
      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto relative z-10">
        
        {/* Cabeçalho do Artigo */}
        <header className="mb-16 border-b border-emerald-900/30 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-600 mb-4 font-serif drop-shadow-md">
            As Árvores e a Autoridade Divina
          </h1>
          <p className="text-xl text-emerald-200/60 italic">
            O pilar do mundo material, a flora cósmica e a regulação do poder divino.
          </p>
        </header>

        <div className="space-y-16 text-lg leading-relaxed text-stone-300 font-sans">
          
          {/* O Bosque Argentunoctem */}
          <section>
            <h2 className="text-3xl font-bold text-emerald-500 mb-6 font-serif flex items-center gap-3">
              <span className="text-4xl">🌲</span> Bosque Argentunoctem
            </h2>
            <div className="bg-stone-900/40 p-6 rounded-xl border border-stone-800">
              <p className="mb-4">
                Antes de se contemplar a glória da Árvore, é necessário sobreviver ao seu escudo protetor: o vasto <strong>Bosque Argentunoctem</strong>. Localizado a leste do <TermoWiki href="reinos#caules">Reino de Caules</TermoWiki>, na região de Müsrat, este labirinto florestal é delimitado a sul pelo Golfão de Heinlez, a norte pela cidade de Lingüaf e a leste pela Ilha Makivea (onde repousa a <em>Torre Solitária</em>, prisão eterna dos terríveis Soldados Sem Rosto).
              </p>
              <div className="border-l-4 border-indigo-500/50 pl-4 mt-6 text-stone-400">
                <strong className="text-indigo-400 block mb-1">A Defesa da Deusa:</strong> 
                Durante a antiga guerra contra o Caos, <TermoWiki href="panteao-e-religioes">Selenys</TermoWiki>, a Deusa da Lua, conjurou um domo invisível sobre o bosque para impedir a entrada de qualquer ser tingido pelas forças malignas. Além disso, a própria floresta é tecida com uma magia de ilusão severa: intrusos invariavelmente perdem-se, caminhando em círculos ou emergindo subitamente no exato ponto por onde entraram.
              </div>
            </div>
          </section>

          {/* A Árvore Bi-kmūn */}
          <section>
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-serif flex items-center gap-3">
              <span className="text-4xl">🌳</span> A Árvore Bi-kmūn
            </h2>
            <p className="mb-4">
              Protegida no epicentro do bosque repousa a <strong>Árvore Bi-kmūn</strong>. Entidade simultaneamente material e imaterial, as lendas narram que ela foi plantada por <TermoWiki href="panteao-e-religioes">Meeren</TermoWiki> (Deusa do Amor), com o auxílio de <TermoWiki href="panteao-e-religioes">Elayel</TermoWiki> (Regente da Vida) e Selenys.
            </p>
            <p className="mb-4">
              A árvore atua como o <em>núcleo de poder</em> e a base do mundo físico de <TermoWiki href="reinos">Carnenia</TermoWiki>; todas as coisas vivas e mágicas fluem silenciosamente para ela. Ela armazena em seu cerne a história de todo o mundo material. Diz-se que seus majestosos galhos movem-se como pincéis invisíveis, escrevendo a história dos povos através das eras.
            </p>
            <div className="bg-stone-950 p-6 rounded-lg border border-sky-900/30 text-sky-200/80 italic mt-6">
              Para os raros mortais ou sábios capazes de compreender seus mistérios, a Bi-kmūn não é apenas uma árvore: ela é uma porta. Através de seu tronco imaterial, é possível rasgar o véu da realidade e atravessar fisicamente para os domínios de <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki>.
            </div>
          </section>

          {/* A Árvore Primordial */}
          <section>
            <h2 className="text-3xl font-bold text-amber-300 mb-6 font-serif flex items-center gap-3">
              <span className="text-4xl">✨</span> A Árvore Primordial
            </h2>
            <p className="mb-4">
              A Bi-kmūn é, na verdade, apenas a "sombra terrena" de uma existência muito maior: a <strong>Árvore Primordial</strong>. Localizada na Ilha Principal — um santuário ainda sem nome no exato centro do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki> em Astra Lumina — suas raízes colossais bebem diretamente das águas sagradas da criação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-stone-900/60 p-5 rounded-lg border border-stone-800">
                <h4 className="font-bold text-amber-500 mb-2">A Escala Cósmica</h4>
                <p className="text-sm text-stone-400">
                  Quando Kalinor, O Forjador, surgiu nos primórdios da existência, a árvore possuía apenas alguns centímetros. Hoje, sua copa tem as dimensões de um reino médio e seu tronco é mais largo que um condado inteiro. 
                </p>
              </div>
              <div className="bg-stone-900/60 p-5 rounded-lg border border-stone-800">
                <h4 className="font-bold text-amber-500 mb-2">O Pincel do Cosmos</h4>
                <p className="text-sm text-stone-400">
                  Enquanto a Bi-kmūn escreve a história de Carnenia, a Árvore Primordial armazena e redige o conhecimento, os segredos e toda a história do cosmos, sendo o pincel definitivo da realidade.
                </p>
              </div>
            </div>
          </section>

          {/* Autoridade Divina */}
          <section>
            <div className="bg-gradient-to-r from-stone-900 to-indigo-950/20 p-8 rounded-xl border border-stone-800 shadow-lg">
              <h2 className="text-2xl font-bold text-stone-100 mb-4 font-serif border-b border-stone-700/50 pb-2">
                A Autoridade Divina
              </h2>
              <p className="text-stone-300 mb-4">
                A <strong>Autoridade Divina</strong> é a medida do poder absoluto que cada Deus exerce sobre o seu respectivo domínio e sobre <em>O Manancial</em>. Graças a esta autoridade, os deuses conseguem manipular o Mar Primordial livremente, sem os riscos de dissolução que afetam os mortais.
              </p>
              <p className="text-stone-400 font-medium">
                Os grandes sábios de Carnenia revelam que tanto a Árvore Primordial quanto a Bi-kmūn funcionam como os grandes "reguladores" da Autoridade Divina. Elas são a infraestrutura do universo — mantêm o equilíbrio do poder dos deuses para que a realidade não se desfaça, embora as árvores em si não possuam vontade ou autonomia própria.
              </p>
            </div>
          </section>

        </div>

        {/* Rodapé do Artigo */}
        <footer className="mt-16 pt-8 border-t border-stone-800 text-stone-500 text-sm flex justify-between items-center relative z-10">
          <p>Última modificação: Era Atual</p>
          <Link href="/wiki" className="bg-stone-900 hover:bg-stone-800 text-amber-500 px-6 py-3 rounded-lg transition-colors border border-stone-700 font-semibold shadow-lg">
            Voltar para a Wiki
          </Link>
        </footer>

      </article>
    </div>
  );
}