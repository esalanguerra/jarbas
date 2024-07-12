'use client'
import React, { useState } from 'react';
import Menu from '../menu/page';

interface Document {
  id: number;
  name: string;
  description: string;
  highlighted: boolean;
}

const documents: Document[] = [
  { id: 1, name: 'Documento tipo 1', description: 'Resumo sobre esse documento.', highlighted: false },
  { id: 2, name: 'Documento tipo 2', description: 'Resumo sobre esse documento.', highlighted: false },
  { id: 3, name: 'Documento tipo 3', description: 'Resumo sobre esse documento.', highlighted: false },
];

const GenerateDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {documents.map((doc) => (
            <button
              key={doc.id}
              className={`p-8 rounded-lg shadow-md transition-colors duration-300 ${
                doc.highlighted ? 'bg-yellow-500 text-white' : 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
              }`}
              style={{ width: '350px', textAlign: 'center' }}
            >
              <h2 className="text-xl font-bold">{doc.name}</h2>
              <p>{doc.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default GenerateDocument;
