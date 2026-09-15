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

export default function AstraLuminaPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      {/* Efeito de Fundo Celestial */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Navegação / Breadcrumbs */}
      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto relative z-10">
        
        {/* Cabeçalho do Artigo */}
        <header className="mb-12 border-b border-indigo-900/50 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-4 font-serif drop-shadow-md">
            Astra Lumina
          </h1>
          <p className="text-xl text-indigo-300 italic">
            A Morada Divina e o plano celestial além do mundo mortal.
          </p>
        </header>

        {/* Corpo do Texto */}
        <div className="space-y-8 text-lg leading-relaxed text-stone-300 font-sans">
          
          <p>
            <strong>Astra Lumina</strong> não é um local que possa ser alcançado por mapas ou navios. Trata-se de uma realidade paralela imaculada, o plano cósmico onde, de acordo com as lendas e dogmas de Carnenia, as <TermoWiki href="panteao-e-religioes">divindades</TermoWiki> residem e observam a sua criação.
          </p>

          <div className="bg-gradient-to-br from-stone-900 to-indigo-950/40 border border-indigo-900/50 p-8 rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-bold text-sky-400 mb-4 font-serif flex items-center gap-3">
              <span className="text-4xl">🌊</span> A Manifestação do Mar
            </h2>
            <p className="mb-4">
              A característica mais formidável de Astra Lumina é a sua paisagem etérea. É exclusivamente neste plano que o <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki> se manifesta de forma estritamente física.
            </p>
            <p>
              Enquanto em Carnenia o Manancial é uma força invisível tecida pelos magos, em Astra Lumina ele toma a forma de um oceano infinito de <strong>água azulada e brilhante</strong>. Suas águas são absolutas e sagradas, banhando as ilhas e florestas aéreas (como Aerthál) onde os deuses caminham.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-amber-500 mt-12 mb-6 font-serif border-b border-stone-800 pb-2">
            A Gota Sagrada em Carnenia
          </h2>
          
          <p>
            Por definição, o plano mortal é separado destas águas divinas. Contudo, existe uma única e milagrosa manifestação física do mar no mundo dos homens.
          </p>

          <p>
            Na nação de <TermoWiki href="reinos#silvusgrizzle">Silvusgrizzle</TermoWiki>, no coração do Templo de Noite Prata, repousa o <em>Burinmenri</em>, o lendário <strong>Lago Espelhado</strong>. De acordo com a fé fervorosa dos <em>Filhos das Luas Imortais</em>, o lago abriga uma singularidade cósmica:
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl text-stone-400 italic bg-stone-900/30 rounded-r-lg">
            "Nos primórdios das eras, uma única gota do vasto Mar Primordial fundiu-se com as águas prateadas do Lago da Lua em Astra Lumina. Pesada de magia e glória, esta gota cedeu e pingou sobre o solo do mundo mortal, preenchendo a bacia de pedra que hoje abriga o Burinmenri."
          </blockquote>

          <p>
            É por este motivo que as águas do Lago Espelhado não secam, não apodrecem e possuem a capacidade de reagir à alma reencarnada do Yarikhon durante o doloroso <em>Prelúdio do Oasis</em>, sendo o cordão umbilical direto entre os deuses e os homens de Carnenia.
          </p>

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