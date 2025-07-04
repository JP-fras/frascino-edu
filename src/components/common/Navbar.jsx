// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/materias', label: 'Materias', destacado: true },
  ];

  const toggleMenuMovil = () => {
    setMenuMovilAbierto(!menuMovilAbierto);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#C6F6D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 ">
                <img src="/fotos/logo.png" alt="Frascino Edu Logo" className="h-15 w-auto rounded brightness-125" />
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-cuerpo font-medium transition-colors ${
                  item.destacado
                    ? 'bg-[#FFA726] text-white px-4 py-2 rounded-lg hover:bg-orange-600'
                    : isActivePath(item.path)
                    ? 'text-[#06402B]'
                    : 'text-texto-principal hover:text-[#06402B]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
          
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenuMovil}
              className="text-[#06402B] hover:text-green-800 p-2"
            >
              {menuMovilAbierto ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Móvil */}
      {menuMovilAbierto && (
        <div className="md:hidden bg-white border-t border-[#C6F6D5]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuMovilAbierto(false)}
                className={`block px-3 py-2 rounded-md font-cuerpo font-medium transition-colors ${
                  item.destacado
                    ? 'bg-[#FFA726] text-white hover:bg-orange-600'
                    : isActivePath(item.path)
                    ? 'text-[#06402B] bg-[#C6F6D5]'
                    : 'text-texto-principal hover:text-[#06402B] hover:bg-[#C6F6D5]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;