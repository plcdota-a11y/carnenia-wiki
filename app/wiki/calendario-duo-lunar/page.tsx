import Link from 'next/link';

export default function CalendarioPage() {
  const meses = [
    { nome: "Ordan", dias: 30, estacao: "Primavera", cor: "border-green-500/50" },
    { nome: "Escordin", dias: 30, estacao: "Primavera", cor: "border-green-500/50" },
    { nome: "Yunar", dias: 29, estacao: "Primavera", cor: "border-green-500/50" },
    { nome: "Junar", dias: 30, estacao: "Verão", cor: "border-yellow-500/50" },
    { nome: "Peikar", dias: 30, estacao: "Verão", cor: "border-yellow-500/50" },
    { nome: "Escorin", dias: 29, estacao: "Verão", cor: "border-yellow-500/50" },
    { nome: "Voltin", dias: 30, estacao: "Verão", cor: "border-yellow-500/50" },
    { nome: "Moiarin", dias: 30, estacao: "Outono", cor: "border-orange-500/50" },
    { nome: "Nóber", dias: 29, estacao: "Outono", cor: "border-orange-500/50" },
    { nome: "Dëcar", dias: 30, estacao: "Outono", cor: "border-orange-500/50" },
    { nome: "Orgin", dias: 30, estacao: "Inverno", cor: "border-blue-500/50" },
    { nome: "Mungin", dias: 29, estacao: "Inverno", cor: "border-blue-500/50" },
    { nome: "Jinfer", dias: 30, estacao: "Inverno", cor: "border-blue-500/50" },
    { nome: "Uiver", dias: 30, estacao: "Inverno", cor: "border-blue-500/50" },
  ];

  const diasSemana = ["D'kalir", "Elhelihúm", "Laselys", "Vôely", "Pracele", "Dimeer", "Foraeyl"];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-stone-800 pb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Calendário Duo-Lunar
          </h1>
          <p className="text-xl text-stone-400 italic">
            A estrutura do tempo regida pelas Duas Luas de Carnenia.
          </p>
        </header>

        {/* O Fundamento Astronômico */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">O Fundamento Astronômico</h2>
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-md">
            <p className="text-lg leading-relaxed text-stone-300 mb-4">
              O calendário é regido por duas luas: a <strong>Lua Maior</strong> e a <strong>Lua Menor</strong>. Como a Lua Menor orbita a Lua Maior, o ponto de partida para toda a contagem do tempo é o <em>Ciclo Duo-Lunar</em>.
            </p>
            <p className="text-lg leading-relaxed text-stone-300">
              Este ciclo corresponde a exatos <span className="text-amber-400 font-bold">29,7 dias</span> — o período necessário para que ambas as luas sejam vistas cheias no céu de Carnenia de forma simultânea.
            </p>
          </div>
        </section>

        {/* A Semana */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">A Semana Carneniana</h2>
          <p className="text-lg leading-relaxed text-stone-300 mb-6">
            A unidade básica do tempo é o dia. Uma semana é composta por 7 dias, baseada nos ciclos menores da Lua Maior.
          </p>
          <div className="flex flex-wrap gap-3">
            {diasSemana.map((dia, index) => (
              <span key={dia} className="bg-stone-800 border border-stone-700 text-stone-200 px-4 py-2 rounded-lg text-lg font-medium shadow-sm flex items-center gap-2">
                <span className="text-stone-500 text-sm">{index + 1}.</span> {dia}
              </span>
            ))}
          </div>
        </section>

        {/* Os Meses e as Estações */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">A Estrutura do Ano</h2>
          <p className="text-lg leading-relaxed text-stone-300 mb-6">
            O ano carneniano é composto por <strong>14 meses</strong>, totalizando <span className="text-amber-400 font-bold">416 dias</span> em anos comuns. Para garantir que o ano tenha um número inteiro de dias e manter a precisão com a média lunar, os meses se alternam entre 30 dias (9 meses) e 29 dias (5 meses).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meses.map((mes, index) => (
              <div key={mes.nome} className={`bg-stone-900 border-l-4 ${mes.cor} p-4 rounded-r-lg flex justify-between items-center`}>
                <div className="flex items-center gap-3">
                  <span className="text-stone-500 font-serif text-sm w-4">{index + 1}</span>
                  <span className="text-stone-100 font-bold text-xl font-serif">{mes.nome}</span>
                </div>
                <div className="text-right">
                  <span className="block text-amber-200 font-medium">{mes.dias} dias</span>
                  <span className="text-xs text-stone-400 uppercase tracking-widest">{mes.estacao}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Estações e Ajuste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-amber-500 mb-4 font-serif">As Estações Prolongadas</h3>
            <p className="text-stone-300 leading-relaxed">
              Com o ano beirando os 416 dias, cada estação dura cerca de <strong>104 dias</strong> (aproximadamente três meses e meio terrestres). Isso resulta em um clima muito mais persistente e enraizado na geografia de Carnenia.
            </p>
          </div>
          
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-amber-500 mb-4 font-serif">O Ajuste Civil</h3>
            <p className="text-stone-300 leading-relaxed mb-4">
              Como não existem "0,8 dias" na prática civil, a cada 5 anos ocorre um <strong>Ano Curto</strong> (415 dias).
            </p>
            <p className="text-stone-300 leading-relaxed">
              Esse ajuste perfeito (2079 dias em 5 anos) culmina no <em>Festival Sizígia das Luas</em>, o grande ano novo comemorado no fim de Uiver, quando os dois astros finalmente se alinham após meia década.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-stone-800 text-stone-500 text-sm flex justify-between items-center">
          <p>Última modificação: Era Atual</p>
          <Link href="/wiki" className="bg-stone-900 hover:bg-stone-800 text-amber-500 px-6 py-3 rounded-lg transition-colors border border-stone-700 font-semibold">
            Voltar para a Wiki
          </Link>
        </footer>

      </article>
    </div>
  );
}