'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Menu = dynamic(() => import('../menu/page'), { ssr: false });

interface Document {
  id: number;
  name: string;
  description: string;
  highlighted: boolean;
}

const documents: Document[] = [
  { id: 1, name: 'Documento tipo 1', description: 'Resumo sobre esse documento. Descreva esse documento de em poucas palavras para que todos saibam do que se trata.', highlighted: false },
  { id: 2, name: 'Documento tipo 2', description: 'Resumo sobre esse documento. Descreva esse documento de em poucas palavras para que todos saibam do que se trata.', highlighted: false },
  { id: 3, name: 'Documento tipo 3', description: 'Resumo sobre esse documento. Descreva esse documento de em poucas palavras para que todos saibam do que se trata.', highlighted: false },
];

const GenerateDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleDocumentClick = (id: number) => {
    router.push(`/generate-document-step?docId=${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="py-10 flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-7xl">
          <button 
            onClick={handleBack} 
            className="mb-4 p-4 px-12 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow w-full max-w-7xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {documents.map((doc) => (
              <button
                onClick={() => handleDocumentClick(doc.id)}
                key={doc.id}
                className={`p-8 rounded-lg shadow-md transition-colors duration-300 ${
                  doc.highlighted ? 'bg-yellow-500 text-white' : 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                }`}
                style={{ textAlign: 'left' }}
              >
                <h2 className="text-xl font-bold">{doc.name}</h2>
                <p>{doc.description}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GenerateDocument;
