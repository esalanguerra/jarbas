'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Note the import change
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/page';
import Doc from '../../../public/images/doc_default.png';

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
    <div className="min-h-screen flex">
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
                  <div className="flex mb-10 flex-col justify-center items-center bg-white ">
                  <div className="bg-white shadow rounded-lg overflow-hidden mb-6 w-full max-w-lg">
                    <div className="relative bg-gray-100 flex items-center justify-center" style={{ paddingTop: '56.25%' }}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${Doc.src})`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center p-4">
                          <h3 className="text-2xl font-semibold text-white">Documento do carlinhos</h3>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: 'linear-gradient(to right, #333, #000)' }} className="p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Documento tipo 1</h3>
                        <p style={{ color: '#A3A3A3' }}>Criado dia 8/12/2024 14:45</p>
                      </div>

                      <div className="flex mt-3">
                      <button className="mr-5 mt-3 text-yellow-500 rounded-lg shadow-md  hover:text-white transition-colors duration-300 flex items-center justify-center">
                      Excluir
                    </button>
                    <button className="mr-3 p-3 mt-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
                      Download
                    </button>
                  </div>
                    </div>
                    
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
