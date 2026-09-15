'use client'; // <-- ESTA É A LINHA MÁGICA QUE RESOLVE O ERRO

import dynamic from 'next/dynamic';

// Isso força o Next.js a carregar o mapa APENAS no navegador
const MapaInterativo = dynamic(() => import('@/components/MapaInterativo'), { 
  ssr: false,
  loading: () => <div className="flex h-screen items-center justify-center text-amber-500 bg-stone-950">Carregando Cartografia...</div>
});

export default function MapaPage() {
  return (
    <main className="h-screen w-full bg-stone-950">
      <MapaInterativo />
    </main>
  );
}