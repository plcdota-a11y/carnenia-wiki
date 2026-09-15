import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function CulturaSaberPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cultura & Saber</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-stone-800 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Cultura e Saber
          </h1>
          <p className="text-xl text-stone-400 italic">
            O registro da humanidade, as grandes academias e a preservação do conhecimento em Carnenia.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* ==========================================
              HISTÓRIA E DATAÇÃO
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-amber-400 mb-6 font-serif flex items-center gap-3 border-b border-stone-800/50 pb-2">
              <span className="text-4xl">⏳</span> A Datação Histórica
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-800 flex items-start gap-4">
                <div className="text-3xl font-bold text-stone-500 font-serif">AGS</div>
                <div>
                  <h4 className="font-bold text-stone-200 mb-1">Antes da Guerra de Separação</h4>
                  <p className="text-sm text-stone-400">Denomina todos os eventos ocorridos na antiguidade e durante a ascensão do conflito monumental que redefiniu o continente.</p>
                </div>
              </div>
              <div className="bg-stone-900/60 p-6 rounded-xl border border-stone-800 flex items-start gap-4">
                <div className="text-3xl font-bold text-amber-500 font-serif">DGS</div>
                <div>
                  <h4 className="font-bold text-stone-200 mb-1">Depois da Guerra de Separação</h4>
                  <p className="text-sm text-stone-400">O marco zero contemporâneo. Representa o tempo atual, desde o fim da guerra até os reinados presentes.</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-900/40 p-6 rounded-xl border border-stone-800 shadow-lg">
              <h3 className="text-xl font-bold text-stone-200 mb-2 font-serif">A Epopéia Antropocênica</h3>
              <p className="text-lg leading-relaxed text-stone-300">
                A Epopéia Antropocênica é o título acadêmico unificado utilizado para se referir a toda a história humana armazenada nas <TermoWiki href="arvore-bi-kmun">Árvores Sagradas</TermoWiki>. 
              </p>
              <p className="text-lg leading-relaxed text-stone-300 mt-4">
                O termo engloba todos os eventos transcorridos desde a colossal derrota do Senhor do Caos, <TermoWiki href="panteao-e-religioes">Dervhanan</TermoWiki>. Este nome grandioso não surgiu do povo comum, mas foi forjado em um raro consenso intelectual pelos estudiosos da <em>Academia de Husú</em> e da <em>Celestial Academia de Caules</em>, com o intuito de catalogar a Era dos Homens de forma erudita.
              </p>
            </div>
          </section>
          
          {/* Academia de Husú */}
          <section>
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 font-serif flex items-center gap-3 border-b border-stone-800/50 pb-2">
              <span className="text-4xl text-emerald-500">🐉</span> A Academia de Husú
            </h2>
            <div className="bg-gradient-to-r from-stone-900 to-emerald-950/20 p-6 rounded-xl border-l-4 border-emerald-600 shadow-md">
              <h3 className="text-xl font-bold text-stone-200 mb-2">Real Academia Hokomana de Husú</h3>
              <p className="text-stone-400 text-sm mb-6 font-medium">Fundação: Ano 40 AGS</p>
              
              <div className="space-y-4 text-stone-300">
                <p>
                  O maior e mais imponente centro educacional de toda a região oriental. A academia possui um foco rigoroso em <strong>ciências humanas, pesquisas sobre alquimia e o estudo empírico do Manancial</strong>.
                </p>
                <p>
                  Sua biblioteca abriga o maior acervo conhecido sobre a Guerra Contra o Caos, guardando artefatos, pergaminhos e registros absolutamente únicos. Foi aos estudiosos Hokomanos que o <TermoWiki href="reinos#husu">Império de Husú</TermoWiki> confiou a sagrada e dolorosa tarefa de preservar a memória do passado perdido do planalto: a história da antiga capital <em>Weio</em>, destruída durante o conflito, e os registros dos ataques fulminantes das tropas do Senhor do Caos contra o <em>Planalto Sheikran</em>.
                </p>
              </div>
            </div>
          </section>

          {/* Academia de Caules */}
          <section>
            <h2 className="text-3xl font-bold text-blue-400 mb-6 font-serif flex items-center gap-3 border-b border-stone-800/50 pb-2">
              <span className="text-4xl text-blue-500">🌊</span> A Celestial Academia de Caules
            </h2>
            <div className="bg-gradient-to-r from-stone-900 to-blue-950/20 p-6 rounded-xl border-l-4 border-blue-500 shadow-md">
              <h3 className="text-xl font-bold text-stone-200 mb-2">Celestial Academia Furgen de Caules</h3>
              <p className="text-stone-400 text-sm mb-6 font-medium">Fundação: Anterior ao fim da Guerra</p>
              
              <div className="space-y-4 text-stone-300">
                <p>
                  Sediada na idílica Ilha de Gingrër, em <TermoWiki href="reinos#caules">Caules</TermoWiki>, a Academia Furgen é uma das instituições de ensino mais veneráveis de toda Carnenia, operando desde antes do fim da Grande Guerra. 
                </p>
                <p>
                  Em contraste com o foco de Husú, os luminares de Caules direcionam seus esforços de alto saber para a <strong>biologia e a complexa Alquimia das Linhas</strong> — as metodologias místicas pelas quais a história do povo é escrita. 
                </p>
                <p>
                  Os pesquisadores da Furgen são reconhecidos mundialmente pelas várias descobertas pioneiras que realizaram em suas extensas expedições aos arredores do <TermoWiki href="arvore-bi-kmun">Bosque Argentunoctem</TermoWiki>, enfrentando as barreiras ilusórias do bosque para desvendar os segredos botânicos e arcanos da criação.
                </p>
              </div>
            </div>
          </section>
          {/* ==========================================
              OS GUIORDES (NZARA'KHUR)
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-orange-400 mb-6 font-serif flex items-center gap-3 border-b border-stone-800/50 pb-2">
              <span className="text-4xl text-orange-500">🪕</span> Tradição e Arte
            </h2>
            
            <div className="bg-stone-900/50 p-8 rounded-xl border border-stone-800 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-orange-300 mb-4 font-serif">A Tribo Guiordes</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Localização: Reino de Nzara'Khur</p>
              
              <div className="space-y-4 text-lg text-stone-300">
                <p>
                  Os <strong>Guiordes</strong> são a lendária tribo de <TermoWiki href="reinos#nzarakhur">Nzara'Khur</TermoWiki>, universalmente conhecidos como os artistas incontestáveis do reino do deserto. Eles são os responsáveis por contar histórias, fabricar e trocar instrumentos e entoar os grandes cânticos sobre a jornada do povo Nzara.
                </p>
                <div className="border-l-2 border-orange-600 pl-4 bg-stone-950/50 py-3 pr-4 rounded-r-lg">
                  <p className="text-stone-400 text-base">
                    A tradição dos Guiordes transcende a simples escolha de ofício; é uma <strong>fatalidade de sangue</strong>. Os descendentes desta tribo já nascem com o destino selado de seguir os passos líricos de seus ancestrais.
                  </p>
                  <p className="text-stone-400 text-base mt-2">
                    A cultura é tão enraizada que quase nenhum filho dos Guiordes se desvia do seu caminho musical e narrativo. Mais fascinante ainda é o fato de que a magia intrínseca da arte da tribo é um dom puramente hereditário — <em>nenhuma pessoa de fora da família é capaz de herdar ou aprender os dons mágicos e líricos dos Guiordes.</em>
                  </p>
                </div>
              </div>
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