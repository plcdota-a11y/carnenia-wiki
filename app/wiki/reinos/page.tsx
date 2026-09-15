import Link from 'next/link';

const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function ReinosPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Geopolítica</span>
      </nav>

      <article className="max-w-5xl mx-auto">
        <header className="mb-16 border-b border-stone-800 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Reinos de Carnenia
          </h1>
          <p className="text-xl text-stone-400 italic">
            O grande atlas político das nações, impérios e domínios que dividem o mundo mortal.
          </p>
        </header>

        {/* ==========================================
            ÍNDICE DE NAVEGAÇÃO RÁPIDA
            ========================================== */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
          <a href="#leovalis" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">☀️ Leovalis</a>
          <a href="#ferusnoctis" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">🛡️ Ferusnoctis</a>
          <a href="#caules" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">🌊 Caules</a>
          <a href="#hrafnsyn" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">🦅 Hrafnsyn</a>
          <a href="#nzarakhur" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">🐪 Nzara'khur</a>
          <a href="#silvusgrizzle" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-amber-600 rounded-full font-serif transition-colors hover:text-amber-400">🌙 Silvusgrizzle</a>
          <a href="#tenko" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-cyan-600 rounded-full font-serif transition-colors hover:text-cyan-400">❄️ Tenkó</a>
          <a href="#husu" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-emerald-600 rounded-full font-serif transition-colors hover:text-emerald-400">🐉 Husú</a>
          <a href="#kalas" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-blue-600 rounded-full font-serif transition-colors hover:text-blue-400">⚔️ Kalas</a>
          <a href="#eldermor" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-orange-600 rounded-full font-serif transition-colors hover:text-orange-400">⛏️ Eldermor</a>
          <a href="#valank" className="px-5 py-2 bg-stone-900 border border-stone-800 hover:border-green-600 rounded-full font-serif transition-colors hover:text-green-400">🍃 Valank</a>
        </div>

        <div className="space-y-32">

          {/* 
             --------------------------------------------------
             LEOVALIS, FERUSNOCTIS, CAULES, HRAFNSYN, NZARA, SILVUSGRIZZLE, TENKÓ, HUSÚ
             (Mantidos no seu arquivo. Abaixo estão as novas seções!)
             --------------------------------------------------
          */}


          {/* ==========================================
              TENKÓ
              ========================================== */}
          <section id="tenko" className="scroll-mt-24 border-t border-stone-800 pt-16">
            <h2 className="text-4xl font-bold text-cyan-400 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              Tenkó, O Império do Horizonte Gélido
            </h2>
            
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                Entre mares de aço e montanhas de neve eterna ergue-se o arquipélago oriental de Tenkó. Para este povo moldado pelo frio e pelo isolamento, <strong>o inverno não é um castigo; é uma purificação</strong>. O reino é centrado na <em>Ilha Mãe</em>, cuja capital encosta-se nos penhascos sagrados, dividindo-se entre a fuligem marítima da Cidade Baixa e o gélido silêncio cerimonial da Cidade Alta.
              </p>
              <p>
                As fundações de Tenkó repousam sobre um pilar invisível: a Piedade Filial. Mais grave que violar uma lei imperial é <em>desonrar o Nome</em> dos ancestrais, que se acredita observarem os vivos através das nevascas. O povo comum não atinge a maioridade pela idade, mas pelo <strong>Batismo de Sal</strong>, no qual rapazes devem enfrentar as águas gélidas e retornar com uma caça marinha para serem considerados homens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* O Uro-Iota e o Trono */}
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 font-serif">O Uro-Iota e o Selo Real</h3>
                <p className="text-stone-300 text-sm mb-4">
                  O líder máximo do império é o <em>Uro-Iota</em>. Diferente de outros reinos, o herdeiro (chamado na infância de <em>Shima Uralu</em>) herda imediatamente os títulos de nobreza de seu pai, mas só se torna legítimo ao trono se for nomeado como <strong>Wa-Zura ("O Primeiro")</strong>.
                </p>
                <div className="border-l-2 border-cyan-600 pl-4 text-stone-400 text-sm">
                  Toda a burocracia do estado gravita em torno do <strong>Selo Real</strong>. Nenhuma lei tem validade sem a impressão da vontade do imperador.
                </div>
              </div>

              {/* O Augúrio e a Ascensão */}
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 font-serif">A Provação da Fumaça</h3>
                <p className="text-stone-300 text-sm mb-4">
                  Aos dezessete ciclos lunares, o Shima Uralu abandona a infância no complexo das <em>Flores da Geada</em>. Após reverenciar os deuses, ele ascende ao Terraço Ten-gen Dai.
                </p>
                <p className="text-stone-400 text-sm italic">
                  Ele acende o <strong>Kumo-no-Michi</strong> (Caminho da Nuvem). Se a fumaça sobe reta aos céus, os deuses aceitam a linhagem. Se o vento a inclinar, a capital entra em desespero profundo, temendo a ruína que uma "fumaça vacilante" traz à estabilidade do império.
                </p>
              </div>
            </div>
            
            <div className="mb-8 p-6 bg-stone-900 border border-stone-800 rounded-xl">
              <h3 className="text-2xl font-bold text-stone-200 mb-4 font-serif">O Salão das Mil Dádivas</h3>
              <p className="text-stone-300 mb-6">
                Enquanto o Uro-Iota governa através do Selo, os assuntos do império são administrados pelas <strong>Oito Vozes</strong> do Salão das Mil Dádivas, sediado no complexo de Ōnoye:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-400">
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>2 Ministros da Casa Real:</strong> Mestres das letras e do direito, burocratas do palácio.</li>
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>2 Ministros do Povo:</strong> Os únicos cargos eletivos (comerciantes e pescadores da Cidade Baixa).</li>
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>Ministro das Finanças:</strong> Senhor dos tributos, crucial para evitar a inanição no inverno.</li>
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>Ministro de Assuntos Externos:</strong> Uma pasta de diplomacia que flerta constantemente com a vigilância e espionagem.</li>
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>Ministro da Guerra:</strong> Cargo de imenso prestígio, quase sempre herdado por generais de berço.</li>
                <li className="bg-stone-950 p-3 rounded border border-stone-800"><strong>Ministro da Cultura & Religião:</strong> Representante da Comissão Bunka-kai, coordena festivais.</li>
              </ul>
            </div>

            <div className="bg-stone-950 p-8 rounded-xl border border-red-900/40 shadow-[inset_0_0_30px_rgba(153,27,27,0.05)] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-red-500 mb-4 font-serif">A Primavera das Lâminas (Guerra dos Sete Príncipes)</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                No ano de 985 DGS., o Uro-Iota Oke Mohe morreu sem nomear um Wa-Zura, arremessando o trono para o abismo de uma guerra civil sanguinária. O prestígio da antiga Dinastia Oke colapsou enquanto grandes famílias se destroçavam. 
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                A Casa Hiragi estrangulou o império com a escassez de mantimentos pelo Porto Lēmōa. A outrora implacável Casa militar Jey fragmentou-se num fratricídio nas escadarias da capital. Somente quando a neutra e sábia Casa Kogey aliou-se a <strong>Hominase da Casa Hokotone</strong>, os exércitos exaustos foram flanqueados. Hominase realizou a provação do incenso; a fumaça subiu reta e o sangue esfriou. Nascia a Dinastia Hokotone, e os príncipes derrotados foram atirados ao terror absoluto e frio de <em>Xumokuno</em>, o temido Palácio Frio.
              </p>
            </div>
          </section>

          {/* ==========================================
              HUSÚ
              ========================================== */}
          <section id="husu" className="scroll-mt-24 border-t border-stone-800 pt-16">
            <h2 className="text-4xl font-bold text-emerald-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              O Império de Husú
            </h2>
            
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                Localizado no leste exótico, Husú é uma civilização antiga que sustenta uma burocracia rígida baseada em rituais diários. A vida em Husú é ditada pelos <strong>Horários das Fumaças</strong>. O império silencia três vezes ao dia para o "Caminho do Incenso", onde as resinas queimadas (sândalo, mirra ou carvalho) anunciam o estado da nação: paz, luto ou guerra.
              </p>
              <p>
                Diferente da maioria do continente, a fé em Husú baseia-se na supremacia humana, no Rito Sheiong, crendo que apenas sua linhagem recebeu a centelha divina. Histórias sobre antigos elfos são apagadas e consideradas heresias ou "delírios das brumas".
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* O Nai e a Teocracia */}
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-serif">O Nai, o Sol de Husú</h3>
                <p className="text-stone-300 text-sm mb-4">
                  O imperador supremo de Husú. Embora possua poder totalitário, sua autoridade é uma dança constante com a aceitação divina. Seu título reflete essa opressão mística: <em>Soberano de Sheikran, Fogo da Justiça e Guarda Vigilante dos Deuses.</em>
                </p>
                <div className="border-l-2 border-emerald-700 pl-4 text-stone-400 text-sm">
                  Durante o festival "O Amainar das Marés", o Nai entra no mar até os joelhos e deposita uma escultura de sal do seu selo. Se o sal derreter rapidamente, a coroa está segura. Se demorar, ele pode ser destituído como "Renegado", afundando a nação no perigoso <strong>Estado de Brumas Brancas</strong> (a suspensão do governo).
                </div>
              </div>

              {/* O Decreto dos Céus */}
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-serif">O Decreto dos Céus</h3>
                <p className="text-stone-300 text-sm mb-4">
                  A ferramenta suprema da burocracia de Husú. Escrito em pergaminho rubro adornado a ouro com a escrita caligráfica Shénlín (lida de cima para baixo como a chuva), o decreto dita vidas e mortes.
                </p>
                <p className="text-stone-400 text-sm italic">
                  Elevar uma imperatriz, nomear um líder guerreiro (como os Jeeyong) ou destituir um nobre; a palavra selada no Salão Qìyue e anunciada pelos eunucos purificados por incenso é lei divina absoluta que não aceita recurso ou debate.
                </p>
              </div>
            </div>

            {/* Zhigāo Héxié */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-stone-200 mb-6 font-serif">As Oito Câmaras de Jade (Zhigāo Héxié)</h3>
              <p className="text-stone-300 mb-6">
                Abaixo do Nai, o poder legislativo é gerido por 32 ministros supremos, divididos em Oito Pastas que se reúnem no chão de obsidiana estelar do Salão Qìyue:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Lótus de Marfim</strong> Palácio e diplomacia (Externa).</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Câmara E’Misha</strong> Estratégia bélica e fortalezas.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Salão de Banyan</strong> Censo populacional e o Povo.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Maré Dourada</strong> Tributos, ouro, tesouros.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Ritos e Marés</strong> Festivais e manutenção de Templos.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Salão Milenar</strong> História, tradição e escribas.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Montanha e Águas</strong> Infraestrutura e estradas de Kiei'o.</div>
                <div className="p-3 border border-stone-800 rounded bg-stone-950"><strong className="text-emerald-500 block">Câmara Zhengyi</strong> A impiedosa Justiça imperial.</div>
              </div>
            </div>

            {/* As Mulheres e a Sacerdotisa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-stone-900 border-l-4 border-emerald-600 rounded-r-xl">
                <h4 className="font-bold text-stone-100 mb-2">A Corte das Pérolas</h4>
                <p className="text-sm text-stone-400">
                  Enquanto a política masculina clama nos corredores de jade, a <strong>Grande Esposa Real</strong> (Mãe da Prosperidade) e a Grande Rainha Viúva governam no silêncio dos chás. A diplomacia matrimonial traçada pelas Princesas de Husú controla a ascensão das famílias (como a rica Casa Bhutrayidha) e pavimenta o futuro da coroa.
                </p>
              </div>
              <div className="p-6 bg-stone-900 border-l-4 border-cyan-600 rounded-r-xl">
                <h4 className="font-bold text-stone-100 mb-2">A Virgem dos Rituais</h4>
                <p className="text-sm text-stone-400">
                  A <strong>Sacerdotisa do Mar</strong> é a única que não possui sangue imperial, mas que caminha ao lado do Nai nos ritos supremos. Ela é a aprovação direta de <em>Vayel</em>. Caso não haja Sacerdotisa empossada, o império afoga-se no Estado de Devanecimento: templos fechados com panos brancos e o silêncio trágico da administração.
                </p>
              </div>
            </div>
          </section>

          {/* ==========================================
              LEOVALIS
              ========================================== */}
          <section id="leovalis" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-yellow-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              Império de Leovalis
            </h2>
           
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                Conhecido como <em>O Reino do Sol e dos Caminhos</em>, Leovalis ergue-se no coração de Carnenia. A nação fundou sua identidade sobre a ideia de permanência e prosperidade solar. O povo acredita que "toda estrada leva ao Sol", e suas vastas planícies são interligadas por estradas de pedra que unem o centro do continente.
              </p>
              <p>
                A capital repousa às margens do Lago de Ais, onde a lenda afirma que Roy de Ais fincou sua espada após fugir da queda de Aika durante as invasões do Caos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 font-serif">O Trono Solar</h3>
                <p className="text-stone-300 text-sm mb-4">
                  O monarca ostenta os títulos de <em>Guia dos Caminhos</em> e <em>Servo do Sol</em>. A sucessão é feita por linhagem direta ao primogênito, independente do gênero — lei alterada após as devastadoras Guerras das Linhagens Cinzentas.
                </p>
                <div className="border-l-2 border-yellow-600 pl-4 text-stone-400 text-sm italic">
                  A coroação só ocorre no exato momento em que o primeiro raio de sol toca a Montanha Artego. Durante o rito, os sacerdotes clamam: <strong>"O Sol está acima do rei, e o rei abaixo da luz."</strong>
                </div>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 font-serif">O Conselho da Coroa</h3>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li><strong className="text-yellow-400">A Grande Rainha:</strong> Exerce forte diplomacia e mediação entre ducados.</li>
                  <li><strong className="text-yellow-400">O Mago Real:</strong> Intérprete de textos solares e supervisor eclesiástico.</li>
                  <li><strong className="text-yellow-400">O General do Sol:</strong> Lidera os exércitos que vestem capas escarlates, sob o lema <em>"Onde houver sombra, marcharemos com o amanhecer."</em></li>
                </ul>
              </div>
            </div>
           
            <div className="bg-gradient-to-r from-stone-900 to-stone-950 p-6 rounded-xl border border-stone-800">
              <h3 className="text-xl font-bold text-stone-200 mb-3">Distritos da Capital</h3>
              <p className="text-sm text-stone-400">
                A cidade divide-se no <strong className="text-amber-500">Distrito Bivania</strong> (A Cidade Velha, onde repousa o magnífico Templo das Eras Radiantes e o Palácio Real) e o <strong className="text-amber-500">Distrito Lancaster</strong> (A Cidade Nova, centro acadêmico e administrativo aos pés da montanha, iluminado à noite por lampiões que simulam pequenos sóis).
              </p>
            </div>
          </section>


          {/* ==========================================
              FERUSNOCTIS
              ========================================== */}
          <section id="ferusnoctis" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 font-serif border-b border-stone-800 pb-4">
              Ferusnoctis
            </h2>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Oculta sob as copas da densa Floresta Viridis, Ferusnoctis é o único reino de Carnenia regido por uma <strong>monarquia parlamentarista</strong>. O poder não é absoluto. O Parlamento, localizado na grandiosa <em>Casa dos Clamores</em>, é composto por 51 senadores eleitos a cada dois anos lunares por cidadãos alfabetizados maiores de 21 anos.
                </p>
                <p>
                  A nação nutre um orgulho incomensurável por seus heróis do passado, principalmente o lendário <strong>Domenico</strong>, nativo de Ferusnoctis, que junto ao grande grupo de heróis selou o poder do Caos. Este fervor culmina no <em>Festival das Dádivas Imortais</em>, o evento mais grandioso do reino.
                </p>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-blue-300 mb-4 font-serif">Ritos de Apresentação</h3>
                <p className="text-sm text-stone-400 mb-3">O herdeiro real passa por três dias solenes antes de ser coroado:</p>
                <ol className="list-decimal pl-4 space-y-2 text-sm text-stone-300">
                  <li>Sacada do Palácio: Juramento ao povo (trajando roupas simples e coroa de ramos).</li>
                  <li>Capela das Ondas Cantantes: Batismo e lealdade aos deuses pelas mãos do Mago Real.</li>
                  <li>Casa dos Clamores: Juramento de salvaguarda militar perante o parlamento.</li>
                </ol>
              </div>
            </div>

            <div className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl">
              <h4 className="font-bold text-sky-400 mb-2">Símbolos do Rei Guerreiro</h4>
              <p className="text-sm text-stone-400">
                Durante a coroação final, o herdeiro abandona a coroa de ramos e recebe a <strong>Tiara do Reino Imortal</strong>, o <em>Oráculo da Dádiva</em> e veste uma réplica militar do lendário <em>Códice de Almas Perdidas</em> que pertencia a Domenico.
              </p>
            </div>
          </section>


          {/* ==========================================
              CAULES
              ========================================== */}
          <section id="caules" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-emerald-500 mb-8 font-serif border-b border-stone-800 pb-4">
              O Reino de Caules
            </h2>
           
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                O "Reino Cercado Pelas Águas". Localizado no leste, sua capital repousa sobre a deslumbrante Ilha de Gingrër, abraçada pelas curvas do Rio Aei. Caules é o epicentro espiritual do <TermoWiki href="panteao-e-religioes">Panteão</TermoWiki> voltado ao Ar e às Águas. A Casa Corium governa este trono há três séculos com mão firme e absolutista.
              </p>
              <p>
                A devoção atinge seu ápice durante o <em>Festival do Sopro da Brisa</em>, quando barcos iluminados são lançados ao rio carregando as súplicas do povo até Astra Lumina.
              </p>
            </div>

            {/* A Hierarquia da Igreja e o Hierofante */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 font-serif">O Assento de Noxae Luxae</h3>
              <div className="bg-stone-900 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <p className="text-stone-300 mb-4">
                  Embora os monarcas dominem a política, é em Caules que reside o <strong>Hierofante da Luz</strong> — a suprema figura da fé de Noxae Luxae (religião compartilhada entre Caules, Leovalis e Ferusnoctis). Eleito num conclave silencioso por Sumo-sacerdotes, ele não herda seu cargo, é ungido divinamente.
                </p>
                <p className="text-stone-400 text-sm mb-4">
                  Sua consagração culmina com o ritual "O Sopro e a Fonte", quando os deuses entregam a ele a <em>Aliança Perpétua</em>, um tomo místico feito de folhas sagradas. Após isso, o Hierofante só é visto pelo povo uma vez ao ano, envolto em neblina, abençoando o festival.
                </p>
                <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-stone-500">
                  <span>Hierofante</span> <span>→</span>
                  <span>Servo do Ar e Águas</span> <span>→</span>
                  <span>Conselho das 7 Vozes</span> <span>→</span>
                  <span>Arcontes das Correntes</span>
                </div>
              </div>
            </div>

            {/* A Tragédia de Hering */}
            <div className="bg-stone-950 p-8 rounded-xl border border-purple-900/40 shadow-[inset_0_0_30px_rgba(88,28,135,0.1)] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-purple-500 mb-4 font-serif">A Queda de Hering e a Bruxa das Cinzas</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                O próspero reino de Hering, outrora banhado pelo Sol, caiu tragicamente durante a invasão do Caos. A defesa foi liderada por três irmãs: Talassa (A General), Elowen (A Enviada) e <strong>Yendra (A Mão do Rei)</strong>.
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Yendra nutria um amor secreto e devoto pelo Rei Hering III. Quando ele foi assassinado por um feitiço sombrio diante de seus olhos no salão do trono, a dor estilhaçou a alma de Yendra. Um antigo colar de obsidiana atendeu ao seu desespero, inundando-a com magia negra. Transfigurada no vazio da perda, ela não protegeu o reino: ela selou o cadáver amado em um sarcófago de sombras. Ao tentarem impedi-la, ela executou suas próprias irmãs e as ressuscitou como <em>Valassalos</em> — espectros guardiões imortais.
              </p>
              <p className="text-purple-300 text-sm italic font-bold mt-4">
                Hoje, não existe Rei. Hering é um covil de cinzas governado pela Bruxa de Hering.
              </p>
            </div>
          </section>

          {/* ==========================================
              HRAFNSYN
              ========================================== */}
          <section id="hrafnsyn" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-amber-500 mb-8 font-serif border-b border-stone-800 pb-4">
              Império de Hrafnsyn
            </h2>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  O reino de Hrafnsyn é a nação mais isolada de Carnenia. Rodeado por barreiras naturais intransponíveis e pelo traiçoeiro Oceano Yula, o povo antes habitante das <em>Planícies Frôndeas</em> e aliado da extinta Daria, viu-se encurralado após as guerras do Senhor do Caos amaldiçoarem as terras a leste.
                </p>
                <p>
                  A salvação veio de intervenções divinas diretas. Na cidade de Mauvidía, o Deus das Águas revelou o <strong>Golfo de Chenes</strong> — um porto seguro livre de monstros que dava acesso ao pacífico Mar Sclacies. A Deusa da Lua guiou as frotas e <TermoWiki href="panteao-e-religioes">Valacarys</TermoWiki>, Deus da Guerra, ensinou-os a lutar. Devido a isso, Mauvidía tornou-se o centro sagrado da religião do povo.
                </p>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-amber-600 mb-4 font-serif">O Caminho do Epónimo</h3>
                <p className="text-sm text-stone-400 mb-4">A cruel sucessão do líder, chamado de <strong>Assur</strong>.</p>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li><strong className="text-stone-100">1. A Caçada:</strong> Capturar noturnamente o <em>Kaab</em>, fera mágica das planícies. Apenas 6 avançam.</li>
                  <li><strong className="text-stone-100">2. Guia para o Triunfo:</strong> Coordenar tropas e subjugar rivais. Apenas 3 avançam.</li>
                  <li><strong className="text-stone-100">3. Teste do Favor Divino:</strong> Um triângulo formal de duelos sangrentos no <em>Círculo de Valacarys</em> até a submissão ou morte de dois oponentes.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-stone-900 p-6 rounded-xl border-l-4 border-red-700">
              <h4 className="font-bold text-red-500 mb-2">As Relíquias do Assur</h4>
              <p className="text-stone-400">
                O ungido recebe o sangue sacrificial, o <strong className="text-stone-200">Elmo de Ferro</strong>, o Manto das Mil Noites e a lendária <strong className="text-stone-200">Quebradora de Ondas</strong> — uma espada forjada em Xanytriun que amplifica as habilidades físicas, devolvida à coroa após a morte do monarca.
              </p>
            </div>
          </section>

          {/* ==========================================
              NZARA'KHUR
              ========================================== */}
          <section id="nzarakhur" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-amber-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              Nzara'khur
            </h2>
           
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                Erguido sobre as areias vermelhas do Deserto Al'Hamra logo após a Era do Desespero, Nzara'khur originou-se de tribos nômades que se fixaram nas margens do Rio Lo ïn. O povo Nzara possui grande prestígio histórico por ter auxiliado os heróis ancestrais, salvando Domenico do Verme Al-Qā.
              </p>
              <p>
                As relações com o reino vizinho de Silvusgrizzle são de uma paz profunda e histórica, marcadas pela constante troca de peregrinos que levam oferendas em devoção à Deusa das Luas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-amber-600 mb-4 font-serif">O Qaid e o Absolutismo</h3>
                <p className="text-stone-300 text-sm mb-4">
                  A realeza de Nzara'khur é tida como descendente direta de <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki>. O governante, chamado de <strong>Qaid</strong>, possui poder totalitário incontestável, podendo fechar templos e alterar leis divinas.
                </p>
                <p className="text-stone-400 text-sm italic">
                  Oito luas após a morte de um Qaid, o herdeiro ("O Próximo") recebe as Três Coroas (do deserto, do além-deserto e do rio) e o Báculo de Outras Eras, sendo proclamado como <em>O Vindo dos Céus</em>.
                </p>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-stone-300 mb-4 font-serif">A Veneração Mórbida</h3>
                <p className="text-stone-300 text-sm mb-4">
                  Enquanto outros reinos temem o Deus da Morte, os Nzara erguem magníficos <strong>Palácios Gelados</strong> em sua honra. Eles acreditam que esses templos "filtram e absorvem" as tragédias iminentes.
                </p>
                <p className="text-stone-400 text-sm">
                  Sacrifícios são banidos, pois a morte deve ser orgânica. Os belíssimos e coreografados ritos fúnebres dos líderes os levam ao repouso eterno no sagrado <em>Vale dos Caídos</em>.
                </p>
              </div>
            </div>
          </section>


          {/* ==========================================
              SILVUSGRIZZLE
              ========================================== */}
          <section id="silvusgrizzle" className="scroll-mt-24">
            <h2 className="text-4xl font-bold text-amber-500 mb-8 font-serif border-b border-stone-800 pb-4">
              Silvusgrizzle
            </h2>
            
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-8">
              <p>
                A grande teocracia das Planícies Shidan. O povo, autodenominado <em>Filhos das Luas Imortais</em>, acredita que seu líder supremo, o <strong>Yarikhon</strong>, é uma única alma abençoada pela <TermoWiki href="panteao-e-religioes">Deusa da Noite</TermoWiki> que renasce infinitamente para guiá-los. 
              </p>
              <p>
                A religião do reino concentra-se no culto às duas luas de Carnenia, com as cerimônias ocorrendo no Templo de Noite Prata, um observatório astronômico construído ao redor do místico <em>Burinmenri</em> (O Lago Espelhado). Lendas dizem que este lago não seca por conter uma gota diluída das águas originais do <TermoWiki href="mar-primordial">Mar Primordial</TermoWiki>.
              </p>
            </div>

            {/* A Reencarnação e as Tribos */}
            <div className="mb-8 p-6 bg-stone-900 border border-stone-800 rounded-xl">
              <h3 className="text-2xl font-bold text-amber-600 mb-4 font-serif">O Prelúdio do Oasis e o Ciclo</h3>
              <p className="text-stone-300 mb-6">
                A alma do Yarikhon renasce em uma rotatividade estrita para garantir a união do povo, passando sucessivamente entre as 5 Grandes Tribos: <strong>Ainari</strong> (Era da Fonte), <strong>Karok</strong> (Era da Rocha), <strong>Nebulim</strong> (Brumas), <strong>Bathin</strong> (Profundezas) e <strong>Sidanin</strong> (Tear).
              </p>
              <div className="bg-stone-950 p-6 rounded-lg text-sm text-stone-400 border-l-2 border-indigo-500">
                O ritual de reconhecimento ocorre na juventude do escolhido, no Plenilúnio. Os candidatos caminham nus pelo Lago Espelhado entoando o Poema às Luas. Quando a verdadeira reencarnação entra, seu reflexo desaparece, e a água prateada envolve seu corpo como tentáculos, gravando símbolos divinos em sua carne numa dor incomensurável.
              </div>
            </div>

            {/* Estrutura de Poder de Silvusgrizzle */}
            <div>
              <h3 className="text-2xl font-bold text-stone-200 mb-6 font-serif">Hierarquia de Poder Teocrático</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-stone-800 rounded-lg">
                  <h4 className="font-bold text-amber-500">1. O Yarikhon (Vigia da Noite)</h4>
                  <p className="text-sm text-stone-400 mt-2">Poder absoluto e incontestável, guiado diretamente pela vontade da Deusa. Veste-se coberto por sedas e pela Coroa dos Ramos da Noite.</p>
                </div>
                <div className="p-4 border border-stone-800 rounded-lg">
                  <h4 className="font-bold text-stone-300">2. Líder da Tribo Atual</h4>
                  <p className="text-sm text-stone-400 mt-2">O pastor-chefe da tribo em que o Yarikhon reencarnou atua como braço executivo e aplicador direto das leis materiais.</p>
                </div>
                <div className="p-4 border border-stone-800 rounded-lg">
                  <h4 className="font-bold text-pink-400">3. A/O Amada(o) pelo Servo da Noite</h4>
                  <p className="text-sm text-stone-400 mt-2">Cônjuge do Yarikhon. Possui vasto poder político e diplomático, e se for um homem, pode exercer o papel de líder bélico.</p>
                </div>
                <div className="p-4 border border-stone-800 rounded-lg">
                  <h4 className="font-bold text-stone-400">4. Conselho de Sumos-Sacerdotes</h4>
                  <p className="text-sm text-stone-400 mt-2">Governam o império apenas no <em>Tempo de Espera</em> (o vácuo de poder entre a morte de um Yarikhon e o ritual do novo corpo).</p>
                </div>
              </div>
            </div>
            
          </section>
            {/* ==========================================
              KALAS
              ========================================== */}
          <section id="kalas" className="scroll-mt-24 border-t border-stone-800 pt-16">
            <h2 className="text-4xl font-bold text-blue-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              O Império de Kalas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Localizado ao sul da costa de Hrafnsyn, Kalas compreende o selvagem <strong>Arquipélago de Acaretion</strong> (Ilhas Kalas, Yakan, Yuak, Gingordis e Iahio). Seu povo é endurecido pelo vento salgado e caçadas brutais, sendo frequentemente visto pelo continente como bárbaros e indomáveis.
                </p>
                <p>
                  Cada ilha possui uma função política e social vital para o reino, desde a preservação fervorosa dos deuses do Mar e das Tempestades até o treinamento marcial de espadachins cruéis e lendários.
                </p>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-stone-200 mb-4 font-serif">O Soberano</h3>
                <p className="text-stone-300 text-sm mb-4">
                  O Rei (ou Rainha) detém poder absoluto. Contudo, para ascender ao trono, o herdeiro deve passar por uma jornada de <strong>dezessete anos</strong> sendo forjado e avaliado pelos clãs.
                </p>
              </div>
            </div>

            {/* A Jornada do Herdeiro e os Clãs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 font-serif">A Forja Real e o Poder dos Clãs</h3>
              <p className="text-stone-300 mb-6">
                Um futuro monarca de Kalas não vive na comodidade do Palácio <em>Nicryunkmer</em>. Ele precisa ganhar o respeito de todo o arquipélago, vivendo entre os clãs que formam as Três Grandes Comissões do império:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 border border-stone-800 rounded-lg bg-stone-900">
                  <h4 className="font-bold text-sky-400 mb-2">1. Clã Yakan (Política)</h4>
                  <p className="text-sm text-stone-400 mb-3">Aos 12 anos, o herdeiro aprende astúcia e diplomacia na Academia.</p>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block border-t border-stone-800 pt-2">Comissão Lográth</span>
                  <p className="text-xs text-stone-400 mt-1">Guardiões das leis civis. Eles presidem o <strong>"Thing"</strong>, o tribunal público ao ar livre onde crimes são julgados por homens livres, resultando em pesadas multas ou proscrição.</p>
                </div>
                
                <div className="p-5 border border-stone-800 rounded-lg bg-stone-900">
                  <h4 className="font-bold text-red-500 mb-2">2. Clã Yuak (Guerra)</h4>
                  <p className="text-sm text-stone-400 mb-3">Aos 18 anos, ele treina artes marciais cruéis com os lendários e belicosos guerreiros da ilha fortificada.</p>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block border-t border-stone-800 pt-2">Comissão Varnarráth</span>
                  <p className="text-xs text-stone-400 mt-1">A força militar e a segurança interna de Kalas, agindo como protetores e executores ("a polícia" do reino).</p>
                </div>

                <div className="p-5 border border-stone-800 rounded-lg bg-stone-900">
                  <h4 className="font-bold text-cyan-500 mb-2">3. Ilha Gingordis (Fé)</h4>
                  <p className="text-sm text-stone-400 mb-3">Aos 25 anos, é isolado numa vila selvagem para aprender os ritos antigos e a história dos ancestrais.</p>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block border-t border-stone-800 pt-2">Comissão Forn-ráth</span>
                  <p className="text-xs text-stone-400 mt-1">Supervisionam as sagas e rituais aos deuses. Em Gingordis reside a <em>Gruta dos Deuses</em>, protegida pela feroz <strong>Guarda Skjöldr</strong>.</p>
                </div>
              </div>
            </div>
            
            <p className="text-stone-300 italic">
              * Apenas aos 29 anos de idade, se sobreviver aos rigores e conquistar a aceitação de todos os clãs, o herdeiro retorna para o <em>Templo Jharyvyntur</em> (onde a piscina sagrada abriga as águas da Gruta) para assumir o seu destino.
            </p>
          </section>


          {/* ==========================================
              ELDERMOR
              ========================================== */}
          <section id="eldermor" className="scroll-mt-24 border-t border-stone-800 pt-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              O Reino de Eldermor
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Situado primordialmente nas Ilhas Nakari, ao norte do vasto continente, encontra-se Eldermor, a robusta nação dos anões. Reconhecidos mundialmente por sua habilidade inigualável na construção de pedras e mineração.
                </p>
                <p>
                  A capital é dividida: na superfície, exibe palácios imponentes e pontes elevadas formidáveis. Porém, a verdadeira maravilha oculta-se no interior das Montanhas de Ferro — uma metrópole labiríntica e colossal esculpida na rocha viva, onde as incessantes batidas de martelos e picaretas formam a música orgânica da nação.
                </p>
              </div>

              <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
                <h3 className="text-xl font-bold text-orange-400 mb-4 font-serif">O Trono das Pedras</h3>
                <p className="text-stone-300 text-sm mb-4">
                  Eldermor é governado pelo <em>Rei das Pedras</em>. A sucessão é hereditária, mas rege-se por uma antiga lei sálica modificada: caso a primogênita herdeira seja uma mulher, ela só assume após o casamento, sendo o esposo o detentor legal dos poderes políticos.
                </p>
                <div className="border-l-2 border-orange-700 pl-4 text-stone-400 text-sm">
                  O poder do monarca não é absoluto. Existe o <strong>Conselho de Cinco</strong> (O Rei + 4 figuras importantes) que delibera e precisa aprovar os assuntos mais complexos da economia e soberania da nação anã.
                </div>
              </div>
            </div>

            {/* Expansão e Minérios Míticos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-stone-900 border-l-4 border-yellow-600 rounded-r-xl">
                <h4 className="font-bold text-stone-100 mb-2">As Minas de Mintaz e o Xanytrium</h4>
                <p className="text-sm text-stone-400 mb-3">
                  Eldermor estendeu seus domínios para o continente, próximo à Floresta Viridis. Lá, na Montanha Maden, fica a cidade-mina de <strong>Mintaz</strong>. 
                </p>
                <p className="text-sm text-stone-400">
                  É deste local profundo que se extrai o <em>Xanytrium</em> — o metal mais precioso e cobiçado de Carnenia. Armas forjadas com este material são naturalmente imbuídas de magia (como a lendária espada <em>Quebradora de Ondas</em> de Hrafnsyn), aprimorando sobre-humanamente os atributos físicos de quem as empunha. Um <strong>Regente</strong> governa Mintaz em nome do Rei das Pedras.
                </p>
              </div>
              
              <div className="p-6 bg-stone-900 border-l-4 border-amber-800 rounded-r-xl">
                <h4 className="font-bold text-stone-100 mb-2">A Fé nas Profundezas</h4>
                <p className="text-sm text-stone-400">
                  A terra não é apenas um recurso econômico, é a matriz espiritual dos anões. O culto a <TermoWiki href="panteao-e-religioes">Thalnok</TermoWiki>, a Grande Deusa da Terra, é fervoroso e onipresente. Eles acreditam que foi a divindade quem guiou as picaretas ancestrais aos melhores veios de ouro e ferro. Seus imponentes templos nas profundezas da terra são densamente adornados com as joias mais puras escavadas de suas minas.
                </p>
              </div>
            </div>

          </section>
            {/* ==========================================
              VALANK (O Reino Caído)
              ========================================== */}
          <section id="valank" className="scroll-mt-24 border-t border-stone-800 pt-16">
            <h2 className="text-4xl font-bold text-green-500 mb-8 font-serif border-b border-stone-800 pb-4 flex items-center gap-3">
              O Reino Perdido de Valank
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Oculto sob a vastidão da majestosa <strong>Floresta Tlali</strong>, repousam os restos da Antiga Valank, o outrora glorioso e único reino élfico de Carnenia. A nação é hoje envolta em folclore, mistérios insondáveis e negações históricas (como as pregadas pelo império de Husú).
                </p>
                <p>
                  De acordo com as lendas remanescentes do período da <em>Era do Desespero</em>, foi em Valank que o lendário elfo <strong>Achernar</strong> foi escolhido diretamente por <TermoWiki href="panteao-e-religioes">Auray-ctun</TermoWiki>, o Deus do Ar. Imbuído com o sopro divino, Achernar uniu-se ao seleto grupo de heróis que, juntos, triunfaram sobre o Senhor do Caos e salvaram o mundo mortal da completa escuridão.
                </p>
              </div>

              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                <h3 className="text-xl font-bold text-stone-400 mb-4 font-serif">O Grande Silêncio</h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Hoje, de Valank restam apenas <em>ruínas</em> silenciosas que foram lentamente devoradas pela natureza. O que aconteceu à raça de Achernar é o maior enigma arqueológico de Carnenia: em determinado momento da história, todos os elfos sumiram do continente simultaneamente, sem deixar corpos, marcas de batalha, mensagens ou qualquer rastro do seu destino.
                </p>
              </div>
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
        