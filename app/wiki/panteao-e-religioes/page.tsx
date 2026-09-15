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
  const divindades = [
    { nome: "Kalinor", pronunciacao: "", titulo: "O Forjador", arma: "Tabuleta de odes inerentes", dominio: "O Criador", cor: "text-amber-400" },
    { nome: "Heliúmhar", pronunciacao: "Éliumrar", titulo: "A Chama Celestial", arma: "Movimento de mil sóis", dominio: "Sol e Luz", cor: "text-yellow-400" },
    { nome: "Selenys", pronunciacao: "", titulo: "A Dona da Noite", arma: "Ciclos celestes infinitos", dominio: "Lua e da Noite", cor: "text-indigo-300" },
    { nome: "Elyel", pronunciacao: "Élaiel", titulo: "O Sopro da Vida", arma: "Chama imortal & Tiara do Reino Imortal", dominio: "Regente da Vida", cor: "text-emerald-400" },
    { nome: "Morsith", pronunciacao: "Morsifì", titulo: "O Emissário do Fim", arma: "Presságio de Hinos exícios", dominio: "Morte", cor: "text-stone-400" },
    { nome: "Celes", pronunciacao: "", titulo: "A Vigia Silenciosa", arma: "Luz celeste", dominio: "Céu", cor: "text-sky-300" },
    { nome: "Thalnok", pronunciacao: "", titulo: "Aquela que molda", arma: "Perfuradora inicial", dominio: "Terra", cor: "text-orange-700" },
    { nome: "Vayel", pronunciacao: "", titulo: "Sussurrador das Profundezas", arma: "Chave dos Portões submersos", dominio: "Água", cor: "text-blue-500" },
    { nome: "Auray-ctun", pronunciacao: "", titulo: "O Caminhante do Céu", arma: "Sintetizadora de Ventos", dominio: "Ar", cor: "text-teal-200" },
    { nome: "Theradriel", pronunciacao: "", titulo: "O Senhor das Tempestades", arma: "Olho da Tempestade", dominio: "Trovão e das chuvas", cor: "text-purple-400" },
    { nome: "Meeren", pronunciacao: "Miirin", titulo: "A Voz do Amor", arma: "Estandarte de canções a Eros", dominio: "Amor e Proteção", cor: "text-pink-400" },
    { nome: "Valacarys", pronunciacao: "", titulo: "O Senhor das Mil Lâminas", arma: "Subjugadora de guerras", dominio: "Guerras", cor: "text-red-600" },
    { nome: "Dervhanan", pronunciacao: "Dervanã", titulo: "O Abraço da Ruína", arma: "Lâmina do Olvido", dominio: "Caos e Catástrofe", cor: "text-red-900" },
  ];

  const religioes = [
    { nome: "Noxae Luxae", reinos: ["Caules", "Leovalis", "Ferusnoctis"] },
    { nome: "O Rito Sheiong", reinos: ["Husú"] },
    { nome: "Filhos das Luas Imortais", reinos: ["Silvusgrizzle"] },
    { nome: "Descendentes de Ramaal", reinos: ["Nzara'khur"] },
    { nome: "Oráculos das dádivas divinas", reinos: ["Hrafnsyn"] },
    { nome: "Xintoísmo", reinos: ["Tenkó"] },
    { nome: "Servos de Kaldia", reinos: ["Kalas"] },
    { nome: "Culto das Rochas iridescentes", reinos: ["Eldermor"] },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav> 

      <article className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-stone-800 pb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            Panteão e Crenças
          </h1>
          <p className="text-xl text-stone-400 italic">
            Os nomes sagrados de Astra Lumina e as fés que guiam Carnenia.
          </p>
        </header>

        {/* Seção: O Panteão */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-500 mb-8 font-serif flex items-center gap-3">
            <span className="text-4xl">✨</span> As Divindades
          </h2>
          
          <div className="overflow-x-auto rounded-xl border border-stone-800 shadow-lg bg-stone-900/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900 text-stone-200 uppercase text-sm tracking-wider">
                  <th className="p-4 border-b border-stone-800 font-semibold">Deus / Regente</th>
                  <th className="p-4 border-b border-stone-800 font-semibold">Título</th>
                  <th className="p-4 border-b border-stone-800 font-semibold">Domínio</th>
                  <th className="p-4 border-b border-stone-800 font-semibold">Arma Divina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/50 text-stone-300">
                {divindades.map((deus) => (
                  <tr key={deus.nome} className="hover:bg-stone-800/30 transition-colors">
                    <td className="p-4">
                      <div className={`font-bold text-lg font-serif ${deus.cor}`}>{deus.nome}</div>
                      {deus.pronunciacao && (
                        <div className="text-xs text-stone-500 italic">Pronúncia: {deus.pronunciacao}</div>
                      )}
                    </td>
                    <td className="p-4 italic text-stone-400">{deus.titulo}</td>
                    <td className="p-4 font-medium text-stone-200">{deus.dominio}</td>
                    <td className="p-4 text-amber-200/70">{deus.arma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção: Religiões */}
        <section>
          <h2 className="text-3xl font-bold text-amber-500 mb-8 font-serif flex items-center gap-3">
            <span className="text-4xl">🛐</span> As Religiões de Carnenia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {religioes.map((religiao) => (
              <div key={religiao.nome} className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-md hover:border-amber-700/50 transition-colors">
                <h3 className="text-xl font-bold text-stone-100 mb-3">{religiao.nome}</h3>
                <div className="text-stone-400 text-sm">
                  <span className="block mb-2 text-stone-500 uppercase tracking-wide text-xs font-bold">Regiões Praticantes:</span>
                  <div className="flex flex-wrap gap-2">
                    {religiao.reinos.map((reino) => (
                      <span key={reino} className="bg-stone-800 text-amber-500/80 px-3 py-1 rounded-full text-xs font-medium border border-stone-700">
                        {reino}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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