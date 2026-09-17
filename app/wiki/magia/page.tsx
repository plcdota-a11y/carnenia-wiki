import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function MagiaPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      
      {/* Efeito de Fundo Arcano */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent pointer-events-none"></div>

      <nav className="relative z-10 mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto relative z-10">
        
        <header className="mb-16 border-b border-indigo-900/30 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-serif drop-shadow-md">
            Magia e o Manancial
          </h1>
          <p className="text-xl text-indigo-300/80 italic">
            O fluxo de poder do Mar Primordial, suas vias de canalização e os horrores da mente partida.
          </p>
        </header>

        <div className="space-y-16 text-lg leading-relaxed text-stone-300 font-sans">
          
          {/* ==========================================
              O MANANCIAL
              ========================================== */}
          <section>
            <div className="bg-gradient-to-br from-stone-900 to-indigo-950/40 p-8 rounded-xl border border-indigo-900/50 shadow-[inset_0_0_30px_rgba(79,70,229,0.1)]">
              <h2 className="text-3xl font-bold text-indigo-400 mb-4 font-serif flex items-center gap-3">
                <span className="text-4xl">🌊</span> O Manancial
              </h2>
              <p className="mb-4">
                <strong>O Manancial</strong> é o nome dado à essência bruta e ao poder direto do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki>. É a fonte universal de energia que os seres mortais utilizam para canalizar a magia em <TermoWiki href="reinos">Carnenia</TermoWiki>.
              </p>
              <p className="text-stone-400 text-base">
                Para conjurar feitiços, um mago não invoca algo do nada; ele deve "tocar" o mar extra-dimensional e puxar para o mundo físico pequenos <em>veios de energia</em>, conhecidos como <strong>linhas</strong>.
              </p>
            </div>
          </section>


          {/* ==========================================
              FORMAS DE MAGIA
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-stone-200 mb-8 font-serif border-b border-stone-800/50 pb-2">
              As Vias de Canalização
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Magia Elemental */}
              <div className="bg-stone-900/50 p-6 rounded-xl border-t-4 border-emerald-500 shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-emerald-400 mb-3 font-serif">Magia Elemental</h3>
                <p className="text-sm text-stone-400 flex-grow">
                  A forma mais segura e difundida. Em vez de "tocar" as águas perigosas do Mar Primordial, os magos elementais manipulam o <strong>Manancial Livre</strong>. 
                </p>
                <p className="text-sm text-stone-400 mt-2">
                  Como o universo foi forjado das águas da criação, tudo o que existe (árvores, rios, pessoas, animais) carrega uma centelha de Manancial Livre. O mago usa a energia residual já presente no mundo físico para criar efeitos elementais.
                </p>
              </div>

              {/* Magia Élfica */}
              <div className="bg-stone-900/50 p-6 rounded-xl border-t-4 border-sky-400 shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-sky-400 mb-3 font-serif">Magia Élfica</h3>
                <p className="text-sm text-stone-400 flex-grow">
                  A milenar e perdida técnica desenvolvida pelo extinto povo de <TermoWiki href="reinos#valank">Valank</TermoWiki>. Os elfos possuíam uma sintonia e um acesso monumental ao Manancial.
                </p>
                <p className="text-sm text-stone-400 mt-2">
                  A maneira como eles puxavam e entrelaçavam os veios era absolutamente única. Humanos são fisicamente incapazes de replicar os grandes feitiços élficos devido à colossal quantidade de linhas de energia necessárias para suportar tais atos.
                </p>
              </div>

              {/* Magia do Caos */}
              <div className="bg-stone-900/50 p-6 rounded-xl border-t-4 border-red-600 shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-red-500 mb-3 font-serif">Magia do Caos</h3>
                <p className="text-sm text-stone-400 flex-grow">
                  A prática proibida e macabra. Ocorre quando o conjurador, ao invés de buscar a água pura, toca as <strong>Áreas de Dissonância</strong> — pontos onde o Mar Primordial está turvo e corrompido.
                </p>
                <p className="text-sm text-stone-400 mt-2">
                  Manipular a energia destas áreas mancha a alma do mago para sempre, tornando sua energia interna instável e convertendo seu próprio Manancial Livre em um lodo espúrio.
                </p>
              </div>

            </div>
          </section>


          {/* ==========================================
              OS PERIGOS DA CONJURAÇÃO
              ========================================== */}
          <section>
            <h2 className="text-3xl font-bold text-stone-300 mb-8 font-serif border-b border-stone-800/50 pb-2">
              O Preço da Ambição
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-stone-950 p-6 rounded-xl border border-blue-900/30">
                <h3 className="text-2xl font-bold text-blue-400 mb-3 font-serif">Dissolução</h3>
                <p className="text-stone-300 text-base mb-4">
                  A Dissolução é a perda irreversível da sanidade pelo excesso de magia. 
                </p>
                <ul className="text-sm text-stone-400 space-y-3 list-disc pl-4">
                  <li><strong>Tocar a Superfície:</strong> O mago traz poucos veios. É seguro e sustentável.</li>
                  <li><strong>Mergulhar:</strong> O mago tenta puxar uma torrente de veios simultâneos para um feitiço avassalador.</li>
                </ul>
                <p className="text-sm text-stone-400 mt-4">
                  Se a mente mortal não for capaz de ancorar essa quantidade de energia, a consciência do mago começa a se dissolver na vastidão do Mar Primordial. *(Nota: Qualquer ser, exceto os deuses, dissolve-se instantaneamente em <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki> caso toque fisicamente as águas reais).*
                </p>
              </div>

              <div className="bg-stone-950 p-6 rounded-xl border border-red-900/30">
                <h3 className="text-2xl font-bold text-red-500 mb-3 font-serif">A Corrupção do Ser</h3>
                <p className="text-stone-300 text-base mb-4">
                  Um espelho profano da Dissolução. O processo de perda mental e colapso físico é idêntico, porém motivado pela energia maligna.
                </p>
                <p className="text-sm text-stone-400">
                  Ocorre quando o mago falha ao ancorar as linhas extraídas de uma <em>Área de Dissonância</em> (Magia do Caos). Ao invés da mente esvair-se pacificamente pelas águas azuis, o ser é violentamente corrompido de dentro para fora pela energia turva, tornando-se uma casca da loucura escarlate.
                </p>
              </div>

            </div>
          </section>


          {/* ==========================================
              BREU DO CAOS
              ========================================== */}
          <section>
            <div className="bg-gradient-to-r from-stone-950 to-red-950/20 p-8 rounded-xl border border-red-900/50 shadow-[inset_0_0_40px_rgba(153,27,27,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-red-600 mb-4 font-serif relative z-10 flex items-center gap-3">
                <span className="text-3xl">🌑</span> O Breu do Caos
              </h2>
              <p className="text-stone-300 relative z-10">
                Criado nos alvores da guerra por <TermoWiki href="panteao-e-religioes">Dervhanan</TermoWiki>, o Senhor do Caos.
              </p>
              <p className="text-stone-400 mt-4 relative z-10">
                O Breu do Caos não é um local físico em Carnenia, mas um bolsão aberrante forjado fora dos limites da realidade através das águas turvas das Áreas de Dissonância. É um não-lugar macabro onde o tempo e o espaço estão brutalmente distorcidos; um domínio onde o Vazio absoluto é preenchido apenas pela corrupção do Manancial.
              </p>
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