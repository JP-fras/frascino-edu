// src/pages/Landing.jsx
import React from 'react';
import Hero from '../components/landing/Hero';
import SobreMi from '../components/landing/SobreMi';
import YouTube from '../components/landing/YouTube';
import Servicios from '../components/landing/Servicios';
import Contacto from '../components/landing/Contacto';

const Landing = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* Sección Sobre Mí */}
      <SobreMi />
      
      {/* Sección Servicios */}
      <Servicios/>
      
      {/* Sección YouTube */}
      <YouTube />
      
      {/* Sección Contacto */}
      <Contacto />
    </div>
  );
};

export default Landing