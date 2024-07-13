'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/page';
import ProfileEdit from '../access-creation/page';

interface Access {
  id: number;
  email: string;
  isActive: boolean;
  name: string;
  password: string;
}

const AccessManagement: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessList, setAccessList] = useState<Access[]>([
    { id: 1, email: 'james@site.com', isActive: true, name: 'James', password: 'password' },
    { id: 2, email: 'james@site.com', isActive: true, name: 'James', password: 'password' },
    { id: 3, email: 'james@site.com', isActive: true, name: 'James', password: 'password' },
    { id: 4, email: 'james@site.com', isActive: false, name: 'James', password: 'password' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAccess, setCurrentAccess] = useState<Access | null>(null);

  const toggleAccess = (id: number) => {
    setAccessList(accessList.map(access =>
      access.id === id ? { ...access, isActive: !access.isActive } : access
    ));
  };

  const handleDelete = (id: number) => {
    setAccessList(accessList.filter(access => access.id !== id));
  };

  const handleAddAccess = () => {
    setCurrentAccess(null);
    setIsEditing(true);
  };

  const handleEditAccess = (access: Access) => {
    setCurrentAccess(access);
    setIsEditing(true);
  };

  const handleSaveAccess = (data: { name: string, email: string, password: string }) => {
    if (currentAccess) {
      setAccessList(accessList.map(access =>
        access.id === currentAccess.id ? { ...access, ...data } : access
      ));
    } else {
      const newAccess = {
        id: accessList.length + 1,
        ...data,
        isActive: true
      };
      setAccessList([...accessList, newAccess]);
    }
    setIsEditing(false);
  };

  const handleBack = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {isEditing ? (
        <ProfileEdit
          title={currentAccess ? "Edição do perfil" : "Criar novo acesso"}
          initialData={currentAccess ? { name: currentAccess.name, email: currentAccess.email, password: currentAccess.password } : undefined}
          onSave={handleSaveAccess}
          onDelete={currentAccess ? () => handleDelete(currentAccess.id) : undefined}
          onBack={handleBack}
        />
      ) : (
        <>
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
            <div className="flex flex-col flex-grow justify-center w-full max-w-6xl mb-10">
              <h2 className="text-3xl font-bold mb-8">Acessos</h2>
              <div className="w-full flex mb-6">
                <button
                  onClick={handleAddAccess}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Gerar novo acesso
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                {accessList.map(access => (
                  <div
                    key={access.id}
                    className={`flex items-center border ${access.isActive ? 'border-yellow-500' : 'border-gray-300'} rounded-lg p-4  max-w-md w-full ${access.isActive ? 'bg-white' : 'bg-white bg-opacity-64 text-gray-500'}`}
                  >
                    <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full mr-4" />
                    <span className="flex-grow">{access.email}</span>
                    <button className="text-gray-500 hover:text-red-500 mx-2" onClick={() => handleDelete(access.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="text-gray-500 hover:text-yellow-500 mx-2" onClick={() => handleEditAccess(access)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <label className="relative inline-block w-10 align-middle select-none mx-2">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 w-0 h-0"
                        checked={access.isActive}
                        onChange={() => toggleAccess(access.id)}
                      />
                      <span className={`block overflow-hidden h-6 rounded-full cursor-pointer ${access.isActive ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
                      <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full bg-white shadow inset-y-0 left-0 focus-within:shadow-md transition-transform duration-300 ease-in-out transform ${access.isActive ? 'translate-x-4' : 'translate-x-0'}`}></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default AccessManagement;
