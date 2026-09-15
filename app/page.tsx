'use client';

import { useState } from 'react';

export default function TranslatorPage() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [direction, setDirection] = useState<'pt-to-carn' | 'carn-to-pt'>('pt-to-carn');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Timer para evitar sobrecarga no servidor ao digitar rápido
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleTranslate = async (text: string, dir = direction) => {
    setInputText(text);
    
    if (!text.trim()) {
      setTranslatedText('');
      return;
    }

    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, direction: dir }),
        });
        
        const data = await response.json();
        
        if (data.error) {
           setTranslatedText(`[Erro no Servidor]: ${data.error}`);
        } else {
           setTranslatedText(data.translatedText);
        }
      } catch (error) {
        console.error('Erro ao traduzir:', error);
        setTranslatedText('[Erro de Conexão]');
      } finally {
        setIsLoading(false);
      }
    }, 500);

    setTimer(newTimer);
  };

  const invertDirection = () => {
    const newDir = direction === 'pt-to-carn' ? 'carn-to-pt' : 'pt-to-carn';
    setDirection(newDir);
    // Se tiver texto, já traduz pro outro lado
    if (translatedText && !translatedText.includes('A tradução aparecerá')) {
       handleTranslate(translatedText, newDir);
    } else {
       handleTranslate(inputText, newDir);
    }
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-stone-950 text-stone-100 min-h-screen py-10 px-4">
      {/* Regras CSS globais para a fonte personalizada (que deve estar na pasta /public) */}
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'Carneniana';
          src: url('/lirico-carneniano.ttf') format('truetype'); 
          font-weight: normal;
          font-style: normal;
          font-display: swap; 
        }
        .font-carnenian { font-family: 'Carneniana', sans-serif; }
        .escrita-vertical {
          writing-mode: vertical-lr; 
          text-orientation: upright; 
          max-height: 280px; 
          display: inline-flex;
          flex-wrap: wrap;
          gap: 1.5rem; 
          padding: 10px;
          border-left: 4px solid #f59e0b; 
          background-color: rgba(28, 25, 23, 0.5); 
          border-radius: 8px;
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="text-center mb-8 flex flex-col items-center">
          {/* Logo (Coloque a imagem logollc.png na pasta /public) */}
          <img src="/logollc.png" alt="Logo" className="h-20 w-auto mb-2 drop-shadow-md object-contain" 
               onError={(e) => (e.currentTarget.outerHTML = `<h1 class="text-4xl font-extrabold tracking-tight text-amber-400 mb-2 font-carnenian">Lírico Carneniano</h1>`)} />
          <p className="text-stone-400 text-sm">Motor SVO • Powered by Next.js & Postgres</p>
        </header>

        {/* Caixa Principal */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Barra de Direção */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-stone-900/60 flex-wrap gap-2">
            <div className="flex items-center gap-3 font-semibold text-sm">
              <span className={direction === 'pt-to-carn' ? 'text-amber-400' : 'text-stone-300'}>
                {direction === 'pt-to-carn' ? 'Português' : 'Lírico Carneniano'}
              </span>
              <button 
                onClick={invertDirection} 
                title="Inverter direção" 
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 hover:text-amber-400 text-stone-300 transition-all transform hover:scale-110">
                ⇄
              </button>
              <span className={direction === 'pt-to-carn' ? 'text-stone-300' : 'text-amber-400'}>
                {direction === 'pt-to-carn' ? 'Lírico Carneniano' : 'Português'}
              </span>
            </div>
            <span className="text-xs text-emerald-400/90 font-mono bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded shadow-sm">
              Servidor Cloud Conectado
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            
            {/* INPUT */}
            <div className="p-6 flex flex-col bg-stone-950/20">
              <textarea 
                value={inputText}
                onChange={(e) => handleTranslate(e.target.value)}
                placeholder={direction === 'pt-to-carn' ? "Digite sua frase épica..." : "Digite em Lírico Carneniano..."}
                className="w-full h-48 bg-transparent text-stone-100 placeholder-stone-600 focus:outline-none resize-none text-base leading-relaxed"
              />
              <div className="flex justify-between items-center pt-3 border-t border-stone-800/60 text-xs text-stone-500 mt-auto">
                <span>{inputText.length} caracteres</span>
                <button onClick={() => handleTranslate('')} className="hover:text-amber-400 transition-colors">Limpar</button>
              </div>
            </div>

            {/* OUTPUT */}
            <div className="p-6 bg-stone-950/50 flex flex-col">
              <div className="w-full h-48 overflow-y-auto">
                {isLoading && <span className="text-amber-500/70 italic text-sm animate-pulse">Traduzindo...</span>}
                
                {!isLoading && !translatedText && (
                  <span className="text-stone-600 font-normal italic flex items-center justify-center h-full opacity-50">
                    A tradução aparecerá aqui...
                  </span>
                )}

                {/* Exibição se for de PT para Carneniano (mostra as runas) */}
                {!isLoading && translatedText && direction === 'pt-to-carn' && (
                  <div className="flex gap-8 overflow-x-auto pb-4 pt-2">
                    {translatedText.split('\n').map((line, idx) => (
                      line.trim() === '' ? <br key={idx}/> :
                      <div key={idx} className="flex flex-col items-center shrink-0 min-w-fit">
                        <div className="font-carnenian text-4xl text-amber-400 mb-2 tracking-wider escrita-vertical text-center break-words">
                          {line}
                        </div>
                        <div className="text-sm text-stone-400 italic text-center w-full break-words">
                          {line}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Exibição se for de Carneniano para PT (mostra texto normal) */}
                {!isLoading && translatedText && direction === 'carn-to-pt' && (
                  <div className="text-amber-200 font-medium text-base leading-relaxed select-all">
                    {translatedText}
                  </div>
                )}
              </div>
              
              <div className="flex justify-end items-center pt-3 border-t border-stone-800/60 text-xs text-stone-500 mt-auto">
                <button 
                  onClick={handleCopy} 
                  className={`font-medium transition-colors ${copied ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}>
                  {copied ? 'Copiado!' : 'Copiar Texto'}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}