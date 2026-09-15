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

export default function ConceitosMagicosPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-stone-800 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Conceitos Mágicos e Cósmicos
          </h1>
          <p className="text-xl text-stone-400 italic">
            O compêndio definitivo sobre as forças, locais e feitiços que regem as leis da realidade em Carnenia.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* 1. O Manancial */}
          <section id="o-manancial" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-amber-400 mb-6 font-serif border-b border-stone-800/50 pb-2 flex items-center gap-3">
              <span className="text-4xl text-blue-400">💧</span> O Manancial
            </h2>
            <div className="bg-stone-900/40 p-6 rounded-xl border border-stone-800/50">
              <p className="text-lg leading-relaxed text-stone-300">
                É o nome dado pelos mortais ao poder oriundo do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki>. Trata-se da energia essencial que permeia a realidade, sendo a força matriz que todos os seres vivos utilizam para canalizar feitiços e manifestar magia no plano físico.
              </p>
            </div>
          </section>

          {/* 2. Breu do Caos */}
          <section id="breu-do-caos" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-red-700 mb-6 font-serif border-b border-stone-800/50 pb-2 flex items-center gap-3">
              <span className="text-4xl">🌑</span> Breu do Caos
            </h2>
            <div className="bg-stone-950 p-6 rounded-xl border border-red-900/30 shadow-[inset_0_0_20px_rgba(153,27,27,0.1)] relative overflow-hidden">
              <p className="text-lg leading-relaxed text-stone-400 relative z-10">
                Um local aterrorizante situado inteiramente fora da realidade, onde o próprio tecido do tempo e do espaço encontra-se distorcido, culminando na ausência total de existência. 
              </p>
              <p className="text-lg leading-relaxed text-stone-400 mt-4 relative z-10">
                Foi gerado pelo Senhor do Caos a partir das <em>águas turvas</em> do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki> — áreas sombrias onde as puras águas da criação tornam-se obscuras, venenosas e corrompidas pela destruição.
              </p>
            </div>
          </section>

          {/* 3. Torre de Apanhar Estrelas */}
          <section id="torre-de-apanhar-estrelas" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-sky-200 mb-6 font-serif border-b border-stone-800/50 pb-2 flex items-center gap-3">
              <span className="text-4xl">🗼</span> Torre de Apanhar Estrelas
            </h2>
            <div className="bg-gradient-to-b from-stone-900 to-stone-950 p-6 rounded-xl border border-sky-900/30 relative overflow-hidden">
              {/* Efeito sutil de estrelas no fundo */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <p className="text-lg leading-relaxed text-stone-300 relative z-10">
                Um ambiente místico erguido em uma realidade paralela. Foi construída pela genialidade de <TermoWiki href="panteao-e-religioes">Kalinor, O Forjador</TermoWiki>, com o propósito monumental de permitir a observação do cosmos e de toda a Sua criação em sua plenitude.
              </p>
              <p className="text-lg leading-relaxed text-sky-100/80 font-medium mt-4 relative z-10">
                Geomanticamente, é o ponto ápice do universo: o local exato para onde converge absolutamente toda a energia cósmica que emana do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki>.
              </p>
            </div>
          </section>

          {/* 4. Prego do Eixo Milenar */}
          <section id="prego-do-eixo-milenar" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-amber-700 mb-6 font-serif border-b border-stone-800/50 pb-2 flex items-center gap-3">
              <span className="text-4xl">🗡️</span> Prego do Eixo Milenar
            </h2>
            <div className="bg-stone-900/60 p-6 rounded-xl border-l-4 border-amber-700 shadow-md">
              <p className="text-lg leading-relaxed text-stone-300">
                Um feitiço profano e irreversível classificado como <strong>magia de bloqueio</strong>. O Prego do Eixo Milenar é utilizado exclusivamente por grandes mestres arcanos com a finalidade de isolar completamente um indivíduo do O Manancial.
              </p>
              <p className="text-lg leading-relaxed text-stone-400 mt-4 bg-stone-950 p-4 rounded-lg">
                <span className="font-bold text-red-500">O Efeito:</span> Após a energia de um alvo ser "estancada" pelo prego, ele torna-se eternamente incapaz de tecer ou canalizar qualquer magia vinda do Mar Primordial. O indivíduo é rebaixado ao status trágico de uma <em>pessoa comum sem magia</em>, sendo privado para sempre de seu poder único.
              </p>
            </div>
          </section>

        </div>

        <footer className="mt-20 pt-8 border-t border-stone-800 text-stone-500 text-sm flex justify-between items-center">
          <p>Última modificação: Era Atual</p>
          <Link href="/wiki" className="bg-stone-900 hover:bg-stone-800 text-amber-500 px-6 py-3 rounded-lg transition-colors border border-stone-700 font-semibold">
            Voltar para a Wiki
          </Link>
        </footer>

      </article>
    </div>
  );
}