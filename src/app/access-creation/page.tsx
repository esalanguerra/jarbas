'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/page';

interface ProfileEditProps {
  title: string;
  initialData?: { name: string, email: string, password: string };
  onSave: (data: { name: string, email: string, password: string }) => void;
  onDelete?: () => void;
  onBack: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ title, initialData, onSave, onDelete, onBack }) => {
  const [formData, setFormData] = useState(initialData || { name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
               <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="py-10 flex-1 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-7xl flex justify-start mb-4">
              <button 
                onClick={onBack} 
                className="p-4 px-12 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
              >
                Voltar
              </button>
            </div>
            <div className="flex flex-col flex-grow justify-center w-full max-w-7xl mb-10">
           
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div className="flex flex-col ">
            <div className="flex items-center mb-4">
              <img src="https://via.placeholder.com/80" alt="User Avatar" className="rounded-full mr-4" />
              <button className="text-gray-500 hover:text-yellow-500 mx-2">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              {onDelete && (
                <button className="text-gray-500 hover:text-red-500 mx-2" onClick={onDelete}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </div>
            <div className="w-full max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="nome do usuário"
                className="border rounded-lg p-2 w-full mb-4"
              />
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="border rounded-lg p-2 w-full mb-4"
              />
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <div className="relative mb-4">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="border rounded-lg p-2 w-full"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <button 
                onClick={handleSave} 
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full hover:bg-yellow-600 transition-colors duration-300"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
