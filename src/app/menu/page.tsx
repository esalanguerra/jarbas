'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <header className="bg-black w-full flex justify-between items-center py-4 px-8">
        <button className="text-white focus:outline-none" onClick={() => setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
        <h1 className="text-yellow-500 text-2xl font-bold">Dr. Jarbas</h1>
        <img src="https://via.placeholder.com/40" alt="User avatar" className="rounded-full" />
      </header>
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-gray-900">Menu</h1>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-1">Documentos gerados</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-1">Ajuda</a>
        </nav>
      </div>
    </>
  );
}

export default Menu;
