'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-black w-full flex justify-between items-center py-4 px-8">
      <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      className={`p-1 bg-white border border-gray-300 rounded text-black focus:outline-none flex justify-center items-center transition duration-300 transform ${isMenuOpen ? 'rotate-90' : ''}`}
    >
      <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-black" />
    </button>

        <h1 className="text-yellow-500 text-2xl font-bold">Dr. Jarbas</h1>
        <img src="https://via.placeholder.com/40" alt="User avatar" className="rounded-full" />
      </header>
      <div style={{top:74}} className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <h5 className="text-1xl font-bold text-gray-900">Menu</h5>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 focus:outline-none hover:text-yellow-500
              transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="dashboard_1" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Documentos Gerados</a>
          <a href="access-management" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Gerenciar Acessos</a>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 flex justify-between w-full focus:outline-none transition duration-300 ease-in-out"
            >
              <span>Gerenciar Modelos</span>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="w-4 h-4" />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-40' : 'max-h-0'}`}
            >
              <div className="pl-4 flex flex-col space-y-2 border-l-4 border-gray-300">
                <a href="#" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Formulários</a>
                <a href="assistants" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Assistentes</a>
                <a href="" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Documentos</a>
              </div>
            </div>
          </div>
          <a href="integrations" className="text-gray-700 hover:text-yellow-500 rounded-lg px-2 py-1 transition duration-300 ease-in-out">Integrações</a>
        </nav>
      </div>
    </>
  );
}

export default Menu;
