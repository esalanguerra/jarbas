'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/page';
import OpenAi from '../../../public/images/openai.png';
import Modal from '../modal/page';

const Assistants: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [assistantKey, setAssistantKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    // lógica de exclusão do assistente
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="py-10 flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-7xl flex justify-start mb-4">
          <button 
            onClick={handleBack} 
            className="p-4 px-12 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
        <div className="flex flex-col flex-grow justify-center w-full max-w-7xl mb-10">
          <h2 className="text-3xl font-bold mb-8">Assistentes</h2>
          <div className="flex flex-wrap gap-4">
            {/* Assistente existente */}
            <div className={`shadow-md rounded-lg p-1 max-w-xs pb-3 flex-1 ${isSwitchOn ? 'bg-black shadow-md' : 'bg-gray-100 bg-opacity-64 text-gray-500'}`}>
              <div className="flex justify-center mb-4">
                <Image src={OpenAi} alt="OpenAI Logo" width={600} height={50} />
              </div>
              <div className="mb-4 flex justify-between">
                <div className='mx-3'>
                  <h3 className="font-bold">Nome do assistente</h3>
                  <p className="text-gray-400 text-sm">Criado dia 8/12/2024 14:45</p>
                </div>
                <div className='flex items-center mx-2'>
                  <button 
                    className={`text-gray-500 hover:text-red-500 mx-2 ${!isSwitchOn ? 'text-gray-300 cursor-not-allowed' : ''}`} 
                    onClick={handleDelete} 
                    disabled={!isSwitchOn}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <label className="relative inline-block w-10 align-middle select-none mx-2">
                    <input 
                      type="checkbox" 
                      className="absolute opacity-0 w-0 h-0" 
                      checked={isSwitchOn}
                      onChange={toggleSwitch} 
                    />
                    <span className={`block overflow-hidden h-6 rounded-full cursor-pointer ${isSwitchOn ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
                    <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full bg-white shadow inset-y-0 left-0 focus-within:shadow-md transition-transform duration-300 ease-in-out transform ${isSwitchOn ? 'translate-x-4' : 'translate-x-0'}`}></span>
                  </label>
                </div>
              </div>
              <div className="mb-4 mx-3">
                <input
                  type="text"
                  className="border rounded-lg p-2 w-full text-sm text-black"
                  placeholder="Chave do assistente"
                  value={assistantKey}
                  onChange={(e) => setAssistantKey(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex justify-between items-center mb-4 mx-3">
                <button 
                  className={`bg-yellow-500 text-white py-2 px-4 rounded-lg text-sm ${!isSwitchOn ? 'bg-gray-300 cursor-not-allowed' : ''}`} 
                  disabled={!isSwitchOn}
                >
                  Concluir
                </button>
              </div>
              <div className="text-center mx-4 my-2">
                <button
                  className={`text-yellow-500 border border-yellow-500 py-2 px-4 rounded-lg text-sm w-full ${!isSwitchOn ? 'text-gray-300 border-gray-300 cursor-not-allowed' : ''}`}
                  onClick={handleEdit}
                  disabled={!isSwitchOn}
                >
                  {isEditing ? 'Salvar' : 'Editar'}
                </button>
              </div>
            </div>
            {/* Novo assistente */}
            <div className="border-2 border-yellow-500 flex items-center justify-center rounded-lg p-4 max-w-xs text-center flex-1">
              <button className="flex items-center text-yellow-500">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Novo assistente
              </button>
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <Modal
          title="Deseja mesmo excluir?"
          description="A exclusão deste assistente pode impactar no funcionamento do sistema."
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default Assistants;
