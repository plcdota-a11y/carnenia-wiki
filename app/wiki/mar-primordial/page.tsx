import Link from 'next/link';

// Componente para criar os links clicáveis (Termos da Wiki)
const TermoWiki = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={`/wiki/${href}`} 
    className="text-amber-400 font-semibold hover:text-amber-300 hover:underline decoration-amber-500/50 underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

export default function MarPrimordialPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 py-16 px-6 md:px-16 lg:px-32">
      
      {/* Navegação / Breadcrumbs */}
      <nav className="mb-12 text-sm text-stone-500 font-serif">
        <Link href="/wiki" className="hover:text-amber-500 transition-colors">Wiki</Link> 
        <span className="mx-2">/</span> 
        <span className="text-stone-300">Cosmologia & Magia</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        
        {/* Cabeçalho do Artigo */}
        <header className="mb-12 border-b border-stone-800 pb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 font-serif drop-shadow-md">
            O Mar Primordial
          </h1>
          <p className="text-xl text-stone-400 italic">
            Também conhecido no mundo mortal como O Manancial.
          </p>
        </header>

        {/* Corpo do Texto */}
        <div className="space-y-8 text-lg leading-relaxed text-stone-300 font-sans">
          
          <p>
            O Mar Primordial é a fonte de todo o poder existente no universo, sendo a manifestação física dos poemas da criação. Contam as lendas que ele surgiu ao mesmo tempo que <TermoWiki href="kalinor">Kalinor</TermoWiki>, como uma manifestação direta do seu poder. Fisicamente, o Mar só pode ser visto em <TermoWiki href="astra-lumina">Astra Lumina</TermoWiki>, onde suas águas banham todas as ilhas da morada divina. 
          </p>

          <p>
            No mundo mortal de <TermoWiki href="carnenia">Carnenia</TermoWiki>, ele é invisível e é conhecido como <strong>O Manancial</strong>. Toda a magia realizada pelos mortais é, em sua essência, o ato de tocar as águas deste mar invisível e tomar para si uma porcentagem ínfima do seu poder.
          </p>

          <h2 className="text-3xl font-bold text-amber-500 mt-12 mb-6 font-serif">A Essência da Magia e seus Níveis</h2>
          
          <p>
            O poder do mar está presente em Carnenia na forma de energia elemental. Fios de energia correm do mar — a tinta usada para criar a realidade — permeando a terra, as árvores e o ar. Essa energia abundante pode ser acessada e canalizada para conjurar feitiços elementais, nutrindo tudo e todos.
          </p>

          <ul className="list-disc pl-8 space-y-4 text-stone-400 my-6 marker:text-amber-600">
            <li>
              <strong className="text-stone-200">Magia de Bênção e Clérigos:</strong> Algumas pessoas nascem com o raro dom de sentir a energia do mar e tocar sua superfície de forma segura. Estes tecem um "fio de poder" que se manifesta na realidade. É a magia mais comum entre os clérigos, que acreditam que divindades filtram esse poder para eles.
            </li>
            <li>
              <strong className="text-stone-200">Magia Divina:</strong> É o ato perigoso de <em>mergulhar as mãos</em> no mar e trazer uma porção (não apenas um fio) de poder para a realidade. Tocar a fonte com tanta vividez corre o risco de fazer o usuário se afogar magicamente e deixar a existência.
            </li>
            <li>
              <strong className="text-stone-200">Magia Élfica:</strong> Semelhante à Magia Divina, mas refinada. A <TermoWiki href="magia-elfica">magia élfica</TermoWiki> consiste em mergulhar apenas os dedos no mar, tecendo o fio com muito mais vividez que os mortais comuns.
            </li>
            <li>
              <strong className="text-stone-200">Magia Física (Artefatos):</strong> Ocorre quando um artífice consegue condensar uma gota do poder do mar em um artefato físico, concedendo habilidades que são passadas ao portador do item.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-amber-500 mt-12 mb-6 font-serif">A Corrupção e os Riscos</h2>
          
          <p>
            Mesmo em áreas puras, os mortais não podem tocar o mar livremente. O seu poder é imenso e incontrolável. Tentar absorver mais do que o corpo suporta pode levar a mente à loucura ou resultar na <TermoWiki href="dissolucao">Dissolução</TermoWiki> — o trágico destino em que a alma perde sua individualidade, desfazendo-se de volta no Mar e tornando-se apenas parte do infinito.
          </p>

          <div className="bg-stone-900/80 border-l-4 border-red-900 p-6 rounded-r-lg my-8 shadow-lg">
            <h3 className="text-xl font-bold text-red-500 mb-2">A Área de Dissonância e o Caos</h3>
            <p className="text-stone-400">
              A <TermoWiki href="magia-do-caos">magia do caos</TermoWiki> também provém do Mar Primordial, originada de uma região corrompida chamada Área de Dissonância. Neste local, as águas são turvas e fluem pelo <em>Breu do Caos</em>. Aqueles que tocam estas águas geram feitiços de poder destrutivo imenso, capazes de apodrecer o ar e a terra. O uso desta energia resulta na terrível <TermoWiki href="corrupcao-do-ser">Corrupção do Ser</TermoWiki>, um estado terminal onde a alma do mortal é contaminada e os poemas sagrados que a forjaram começam a borrar e se desfazer.
            </p>
          </div>

        </div>

        {/* Rodapé do Artigo */}
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