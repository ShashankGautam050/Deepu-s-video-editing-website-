// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white shadow-md">
      <h1 className="flex items-center text-2xl font-bold transition-transform transform hover:rotate-3 hover:scale-105 duration-300 text-white hover:text-yellow-400">
        <Link to="/" className="flex items-center">
          <FontAwesomeIcon icon={faFilm} className="mr-2" />
          Deepankar
        </Link>
      </h1>
      <nav className="flex space-x-4">
        <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link to="/pricing" className="hover:text-gray-400">Pricing</Link>
        
      </nav>
    </header>
  );
}
