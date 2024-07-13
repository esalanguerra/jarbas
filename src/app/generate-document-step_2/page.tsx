'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Menu = dynamic(() => import('../menu/page'), { ssr: false });


const GenerateDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    window.history.back();
  };

  const handleSend = () => {
    router.push('/loading');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="py-10 flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-7xl">
          <button 
            onClick={handleBack} 
            className="mb-4 p-3 px-12 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
        <div className="flex flex-col justify-center flex-grow w-full max-w-7xl mb-10">
          <h1 className="text-4xl font-bold mb-8">Documento</h1>
          <div className="flex space-x-2 mb-8">
            <span>Etapa 1</span>
            <span>&gt;</span>
            <span>Etapa 2</span>
            <span>&gt;</span>
            <span className="text-yellow-500">Final</span>
          </div>
          <p className="text-lg text-gray-600 mb-4">Informe um nome para o documento.</p>
          <input 
            type="text" 
            placeholder="digite aqui" 
            className="mb-4 p-2 border border-gray-300 rounded w-80"
          />
          <div className="w-full max-w-7xl">
            <button 
              onClick={handleSend}
              className="p-4 px-12 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 mb-4 p-2 rounded w-80"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GenerateDocument;
