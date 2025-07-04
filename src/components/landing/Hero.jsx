// src/components/landing/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#C6F6D5] to-white py-20 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-cuerpo text-[#06402B] mb-6">
              <Star className="w-4 h-4 fill-current" />
              Material actualizado 2025
            </div>
            
            <h1 className="font-titulo text-4xl md:text-5xl lg:text-6xl font-bold text-texto-principal mb-6">
              Aprendé{' '}
              <span className="text-[#06402B]">Informática</span>
              {' '}con material universitario de calidad
            </h1>
            
            <p className="font-cuerpo text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Encuentra resúmenes, ejercicios resueltos, parciales y clases de apoyo 
              de las materias de la carrera <span className="text-[#06402B]">Licenciatura en Informatica</span>. Todo organizado por años y 
              fácil de encontrar.
              
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/materias"
                className="inline-flex items-center gap-2 bg-[#FFA726] text-white font-cuerpo font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                Ver Materias
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 bg-white text-[#06402B] font-cuerpo font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#06402B]"
              >
                <Play className="w-5 h-5" />
                Conoce más
              </a>
            </div>

            <p className="font-cuerpo text-small md:text-small text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 mt-5">Si sos estudiante de la Universidad Nacional del Oeste, este es tu paraiso ;)</p>

            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="font-titulo text-2xl md:text-3xl font-bold text-[#06402B]">
                  15+
                </div>
                <div className="font-cuerpo text-sm text-gray-600">
                  Materias cubiertas
                </div>
              </div>
              <div className="text-center">
                <div className="font-titulo text-2xl md:text-3xl font-bold text-[#06402B]">
                  100+
                </div>
                <div className="font-cuerpo text-sm text-gray-600">
                  Ejercicios resueltos
                </div>
              </div>
              <div className="text-center">
                <div className="font-titulo text-2xl md:text-3xl font-bold text-[#06402B]">
                  10+
                </div>
                <div className="font-cuerpo text-sm text-gray-600">
                  Horas de video
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen/Ilustración */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-md">
              {/* Simulación de pantalla de código */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 font-codigo text-sm">
                  <div className="text-blue-400">class</div>
                  <div className="text-white ml-2">EstudianteInformatica:</div>
                  <div className="text-green-400 ml-4">def estudiar():</div>
                  <div className="text-gray-300 ml-8">return "¡Éxito!"</div>
                </div>
              </div>
              
              {/* Elementos flotantes */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-[#C6F6D5] rounded-lg p-3">
                  <BookOpen className="w-5 h-5 text-[#06402B]" />
                  <span className="font-cuerpo text-sm text-[#06402B]">
                    Resúmenes completos
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                  <Play className="w-5 h-5 text-blue-600" />
                  <span className="font-cuerpo text-sm text-blue-600">
                    Clases de apoyo
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 rounded-lg p-3">
                  <Star className="w-5 h-5 text-orange-600" />
                  <span className="font-cuerpo text-sm text-orange-600">
                    Ejercicios resueltos
                  </span>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFA726] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#06402B] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;