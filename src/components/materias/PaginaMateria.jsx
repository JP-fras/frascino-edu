import { useState } from "react";
import ContenidoItem from "../contenido/ContenidoItem";

const PaginaMateria = ({ nombreMateria, contenidos }) => {
  const [categoriaActiva, setCategoriaActiva] = useState("resumenes");

  const categorias = Object.keys(contenidos); // ['resumenes', 'apuntes', etc.]

  return (
    <div className="p-6 bg-white min-h-screen text-[#1A1A1A]">
      <h1 className="text-3xl font-bold text-[#06402B] mb-6">{nombreMateria}</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full border transition 
              ${
                categoriaActiva === cat
                  ? "bg-[#06402B] text-white border-[#06402B]"
                  : "bg-white text-[#06402B] border-[#06402B] hover:bg-[#F5F5F5]"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenido activo */}
      <div className="flex flex-col gap-4">
        {contenidos[categoriaActiva].map((item, idx) => (
          <ContenidoItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PaginaMateria;
