'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuNavegacao() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  const links = [
    { nome: 'Dicionário', rota: '/' },
    { nome: 'Wiki do Mundo', rota: '/wiki' },
    { nome: 'Mapa de Carnenia', rota: '/mapa' },
  ];

  return (
    <>
      {/* Botão Hambúrguer (Fixo no topo esquerdo) */}
      <button 
        onClick={() => setAberto(!aberto)}
        className="fixed top-4 left-4 z-50 p-3 bg-stone-900 border border-stone-700 rounded-lg shadow-lg text-amber-400 hover:bg-stone-800 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {aberto ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Painel Lateral (Gaveta) */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-stone-950 border-r border-stone-800 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${aberto ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pt-20 flex flex-col gap-4 h-full">
          <h2 className="text-amber-500 font-carnenian text-2xl mb-4 border-b border-stone-800 pb-2">Lírico Carneniano</h2>
          
          {links.map((link) => (
            <Link 
              key={link.rota} 
              href={link.rota}
              onClick={() => setAberto(false)}
              className={`text-lg p-3 rounded-lg transition-colors ${pathname === link.rota ? 'bg-amber-900/30 text-amber-400 font-bold border border-amber-900/50' : 'text-stone-300 hover:bg-stone-900 hover:text-amber-200'}`}
            >
              {link.nome}
            </Link>
          ))}
          
          <div className="mt-auto text-xs text-stone-600">
            Powered by Next.js & Supabase
          </div>
        </div>
      </div>

      {/* Fundo escuro quando o menu abre */}
      {aberto && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
          onClick={() => setAberto(false)}
        />
      )}
    </>
  );
}