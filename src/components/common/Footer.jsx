// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Youtube, Mail, MessageCircle, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06402B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8" />
              <span className="font-titulo text-xl font-bold">Frascino Edu</span>
            </div>
            <p className="font-cuerpo text-gray-300 mb-4 max-w-md">
              Tu plataforma de estudio para la carrera de Informática. 
              Encuentra resúmenes, ejercicios resueltos y material de apoyo 
              para todas las materias.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@FrascinoJuanPablo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/JP-fras"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/juan-pablo-frascino-87870a27b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-titulo text-lg font-semibold mb-4">
              Enlaces rápidos
            </h3>
            <ul className="font-cuerpo space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/materias"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Materias
                </Link>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-titulo text-lg font-semibold mb-4">
              Contacto
            </h3>
            <div className="font-cuerpo space-y-3">
              <a
                href="mailto:frascinojuanpablo@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                frascinojuanpablo@gmail.com
              </a>
              <a
                href="https://wa.me/5491164001674"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-cuerpo text-gray-300 text-sm">
              © {currentYear} Frascino Edu. Todos los derechos reservados.
            </p>
            <p className="font-cuerpo text-gray-300 text-sm mt-2 md:mt-0">
              Hecho con ❤️ para estudiantes de Informática
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;