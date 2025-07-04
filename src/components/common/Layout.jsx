// src/components/common/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenido principal - ocupa todo el espacio disponible */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer en la parte inferior */}
      <Footer />
    </div>
  );
};

export default Layout;