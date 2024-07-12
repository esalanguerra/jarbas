'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Note the import change
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/page';

const mockDocuments = [
  { id: 1, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
  { id: 2, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
  { id: 3, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
  { id: 4, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
  { id: 5, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
  { id: 6, name: 'Documento do Carlinhos', date: '8/12/2024 14:45', type: 'Documento tipo 1' },
];

const Dashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleGenerateDocument = () => {
    router.push('/generate-document');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex-1 flex flex-col">
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="py-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="border-4 border-yellow-500 rounded-lg h-48 flex items-center justify-center">
                    <button
                      className="flex flex-col items-center space-y-2 text-yellow-500 hover:text-yellow-600"
                      onClick={handleGenerateDocument}
                    >
                      <FontAwesomeIcon icon={faPlus} className="w-8 h-8" />
                      <span className="text-lg">Gerar novo documento</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <h2 className="text-2xl font-semibold text-gray-700">Documentos recentes</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockDocuments.map((doc) => (
                  <div key={doc.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-4 flex flex-col h-full justify-between">
                      <div className="min-h-[200px] flex items-center justify-center">
                        <p className="text-center text-gray-500">PRÉ-VISUALIZAÇÃO DE DOCUMENTO PADRÃO</p>
                      </div>
                      <div style={{ background: 'linear-gradient(to right, #333, #000)' }} className="p-4 mt-4 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{doc.name}</h3>
                          <p style={{ color: '#A3A3A3' }}>Criado dia {doc.date}</p>
                          <p style={{ color: '#A3A3A3' }}>{doc.type}</p>
                        </div>
                        <div className="flex justify-start items-center mt-5">
                          <button style={{ color: 'rgba(234, 179, 8, 1)' }} className="hover:text-red-700 mr-4">
                            Excluir
                          </button>
                          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-600 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-sm flex items-center justify-center hover:bg-yellow-600 cursor-pointer">
                  <span>Todos os documentos gerados</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
