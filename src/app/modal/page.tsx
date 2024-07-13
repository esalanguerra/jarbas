'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        <div className="flex justify-center mb-4">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500" size="3x" />
        </div>
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        <div className="flex justify-between">
          <button 
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm mr-2"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg text-sm"
            onClick={onConfirm}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
