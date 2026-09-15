import Link from 'next/link';

export default function WikiHomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 flex flex-col md:flex-row pt-16 md:pt-0">
      
      {/* ==========================================
          MENU LATERAL DA WIKI (Categorias)
          ========================================== */}
      <aside className="w-full md:w-72 md:min-h-screen bg-stone-900/50 border-r border-stone-800 p-8 md:pt-24 flex-shrink-0">
        <h2 className="text-amber-500 font-serif text-3xl mb-8 border-b border-stone-700 pb-4">
          Compêndio
        </h2>
        
        <nav className="space-y-8">
          <div>
            <h3 className="text-stone-500 uppercase text-xs font-bold mb-3 tracking-widest">Cosmologia & Magia</h3>
            <ul className="space-y-3 pl-2 border-l border-stone-800">
              <li><Link href="/wiki/arvore" className="hover:text-amber-400 transition-colors">As Árvores e a Autoridade Divina</Link></li>
              <li><Link className="hover:text-amber-400 transition-colors" href="/wiki/panteao-e-religioes">Panteão e Religiões</Link></li>
              <li><Link className="hover:text-amber-400 transition-colors" href="/wiki/calendario-duo-lunar">Calendário Duo-Lunar</Link></li>
              <li><Link href="/wiki/conceitos-magicos" className="hover:text-amber-400 transition-colors">Conceitos Mágicos</Link></li>
              <li><Link href="/wiki/genese-e-fim" className="hover:text-amber-400 transition-colors">Gênese e Fim (O Findar das Eras)</Link></li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-stone-500 uppercase text-xs font-bold mb-3 tracking-widest">Geopolítica</h3>
            <ul className="space-y-3 pl-2 border-l border-stone-800">
              <li><Link href="/wiki/reinos" className="hover:text-amber-400 transition-colors font-bold">👑 Reinos de Carnenia</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-500 uppercase text-xs font-bold mb-3 tracking-widest">Linguística</h3>
            <ul className="space-y-3 pl-2 border-l border-stone-800">
              <li><Link href="/wiki/gramatica-lirico" className="hover:text-amber-400 transition-colors">O Lírico-Carneniano</Link></li>
              <li><Link href="/wiki/sufixos-honorificos" className="hover:text-amber-400 transition-colors">Sufixos (-ma, -li, -k)</Link></li>
            </ul>
          </div>

          {/* Adicione isso abaixo do bloco de Linguística */}
          <div className="mt-8">
            <h3 className="text-stone-500 uppercase text-xs font-bold mb-3 tracking-widest">Instituições</h3>
            <ul className="space-y-3 pl-2 border-l border-stone-800">
              <li><Link href="/wiki/cultura-e-saber" className="hover:text-amber-400 transition-colors">Cultura e Academias</Link></li>
            </ul>
          </div>
        </nav>
      </aside>
      

      {/* ==========================================
          CONTEÚDO PRINCIPAL (Destaques da Home)
          ========================================== */}
      <main className="flex-1 p-8 md:p-16 md:pt-24 lg:px-24">
        
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6 drop-shadow-lg font-serif">
            Arquivos de Carnenia
          </h1>
          <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
            Bem-vindo ao repositório sagrado do conhecimento. Explore a história das grandes nações, os mistérios deixados pelos povos antigos e a mecânica das magias que moldaram o nosso mundo.
          </p>
        </header>

        {/* Grade de Artigos em Destaque */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Destaque 1: Mar Primordial */}
          <Link href="/wiki/mar-primordial" className="group bg-stone-900 border border-stone-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-lg">
            <h3 className="text-2xl text-stone-100 font-bold mb-3 group-hover:text-amber-400 transition-colors">
              🌊 O Mar Primordial
            </h3>
            <p className="text-stone-400 leading-relaxed">
              A origem de toda a matéria e magia do mundo. Descubra como as correntes primordiais ditam as regras da realidade.
            </p>
          </Link>

          {/* Destaque 2: Astra Lumina (Lado a Lado com o Mar) */}
          <Link href="/wiki/astra-lumina" className="group bg-stone-900 border border-stone-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-lg">
            <h3 className="text-2xl text-stone-100 font-bold mb-3 group-hover:text-amber-400 transition-colors">
              ✨ Astra Lumina
            </h3>
            <p className="text-stone-400 leading-relaxed">
              O plano cósmico e a morada divina. O único lugar na existência onde as águas sagradas do Mar Primordial podem ser vistas em sua glória física.
            </p>
          </Link>

          {/* Destaque 3: O Atlas dos Reinos (Ocupa as duas colunas embaixo) */}
          <Link href="/wiki/reinos" className="group bg-stone-900 border border-stone-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-lg lg:col-span-2">
            <h3 className="text-2xl text-stone-100 font-bold mb-3 group-hover:text-amber-400 transition-colors">
              👑 Atlas dos Reinos de Carnenia
            </h3>
            <p className="text-stone-400 leading-relaxed max-w-4xl">
              Do império solar de Leovalis e isolamento gélido de Tenkó às burocracias de jade de Husú e os picos de Eldermor. Explore a história, religião e a política de todas as nações do mundo mortal.
            </p>
          </Link>

        </div>
      </main>
    </div>
  );
}