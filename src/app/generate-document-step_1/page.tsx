'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Menu = dynamic(() => import('../menu/page'), { ssr: false });

const GenerateDocument: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Total de páginas, você pode ajustar conforme necessário

  const optionsPerPage = 4; // Número de opções por página
  const router = useRouter();

  const handleBack = () => {
    window.history.back();
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  const handleOptionClick = () => {
    router.push('/generate-document-step_2');
  };

  const renderPageNumbers = () => {
    let pages = [];
    if (currentPage === 1) {
      pages = [1, 2, 3];
    } else if (currentPage === totalPages) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }

    return pages.map((page) => (
      <button
        key={page}
        className={`px-3 py-1 rounded-lg ${currentPage === page ? 'bg-yellow-500 text-white' : 'text-gray-500'} hover:bg-yellow-500 hover:text-white transition-colors duration-300`}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </button>
    ));
  };

  const renderOptions = () => {
    const startOption = (currentPage - 1) * optionsPerPage + 1;
    const options = Array.from({ length: optionsPerPage }, (_, i) => startOption + i);

    return options.map((option) => (
      <button
        key={option}
        onClick={handleOptionClick}
        className="px-24 py-4 text-lg border border-gray-300 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300"
      >
        Opção {option}
      </button>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="py-10 flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-7xl flex justify-start">
          <button
            onClick={handleBack}
            className="mb-4 p-3 px-8 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mb-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Documento tipo 1</h1>
            <div className="flex space-x-2 mb-4">
              <span className="text-gray-500">Etapa 1</span>
              <span>&gt;</span>
              <span className="text-yellow-500">Etapa 2</span>
              <span>&gt;</span>
              <span>Final</span>
            </div>
            <div className="flex mb-2">
              <div className="flex items-center border border-gray-200 rounded-lg py-2 px-4">
                <button className="text-gray-500 mx-1 hover:bg-yellow-500 rounded-lg hover:text-white transition-colors duration-300 px-2" onClick={handleFirst}>&laquo;</button>
                <button className="text-gray-500 mx-1 hover:bg-yellow-500 rounded-lg hover:text-white transition-colors duration-300 px-2" onClick={handlePrevious}>Anterior</button>
                <div className="flex space-x-1">
                  {currentPage > 2 && <span className="text-gray-500 px-3 py-1">...</span>}
                  {renderPageNumbers()}
                  {currentPage < totalPages - 1 && <span className="text-gray-500 px-3 py-1">...</span>}
                </div>
                <button className="text-gray-500 mx-1 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300 px-2" onClick={handleNext}>Próxima</button>
                <button className="text-gray-500 mx-1 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300 px-2" onClick={handleLast}>&raquo;</button>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-2">Pergunta sobre o documento.</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 md:ml-20">
            {renderOptions()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GenerateDocument;
