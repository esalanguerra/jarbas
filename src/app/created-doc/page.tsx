'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Doc from '../../../public/images/doc_default.png';
import Menu from '../menu/page';

const CreatedDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <div className="flex mb-10 flex-col justify-center items-center bg-white p-4">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">Documento gerado com sucesso!</h1>
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
        <div style={{ background: 'linear-gradient(to right, #333, #000)' }} className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Documento tipo 1</h3>
            <p style={{ color: '#A3A3A3' }}>Criado dia 8/12/2024 14:45</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3 w-full max-w-lg">
        <button className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
          Visualizar o documento
        </button>
        <button className="w-full px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faDownload} className="mr-2" /> Salvar
        </button>
      </div>
    </div>
    </div>
  );
};

export default CreatedDocument;
