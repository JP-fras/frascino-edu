import TarjetaMateria from "./TarjetaMaterias";

const ListaMaterias = () => {
  const materiasPorAnio = {
    "1er Año": [
      {
        nombre: "Álgebra y Geometria Analitica",
        descripcion: "Vectores, matrices, espacios vectoriales...",
        ruta: "/materias/algebra",
        icono: "🧠",
      },
      {
        nombre: "Arquitectura de Computadores 1",
        descripcion: "Circuitos combinacionales, FlipFlop, Assembler...",
        ruta: "/materias/arq1",
        icono: "📟",
      },
      {
        nombre: "Algoritmos y Estructuras de Datos",
        descripcion: "Algoritmos, Diagrama de flujo, estructuras básicas...",
        ruta: "/materias/algoritmos",
        icono: "💻",
      },
      {
        nombre: "Tecnologia Aplicada",
        descripcion: "Introduccion a la electronica, tablas de verdad, mapas de Karnaugh...",
        ruta: "/materias/tecnologia",
        icono: "💡",
      },
      {
        nombre: "Programacion Orientada a Objetos 1",
        descripcion: "Orientacion a objetos, UML, JAVA...",
        ruta: "/materias/poo1",
        icono: "☕",
      },
      {
        nombre: "Teoria de Sistemas y Organizaciones",
        descripcion: "Cursogramas, Teoria empresarial, management...",
        ruta: "/materias/teoria-sistemas",
        icono: "🏦",
      },
    ],
    "2do Año": [
      {
        nombre: "Analisis Matematico 1",
        descripcion: "Limite, derivadas, integrales...",
        ruta: "/materias/analisis-mat1",
        icono: "🧠",
      },
      {
        nombre: "Comunicacion y Redes 1",
        descripcion: "Señales analogicas, digitales, codificacion...",
        ruta: "/materias/analisis-mat1",
        icono: "🛰️",
      },
      {
        nombre: "Ingenieria de Software 1",
        descripcion: "Metodologias, Sommerville, Relevamiento de proyectos...",
        ruta: "/materias/ing-soft1",
        icono: "👔",
      },
      {
        nombre: "Lenguajes Formales",
        descripcion: "Lenguajes, Gramaticas, Maquina de turing...",
        ruta: "/materias/lenguajes-form",
        icono: "✏️",
      },
      {
        nombre: "Programacion Orientada a Objetos 2",
        descripcion: "Complejidad Computacional, Algoritmos, Python...",
        ruta: "/materias/poo2",
        icono: "🐍",
      },
      {
        nombre: "Sistemas Operativos 1",
        descripcion: "Procesos, Hilos, Virtualizacion...",
        ruta: "/materias/sist-op1",
        icono: "🖥️",
      },
    ],
    "3er Año": [
      {
        nombre: "Analisis Matematico 2",
        descripcion: "Derivadas dobles, Integrales Dobles/Triples, Teorema Gauss-green...",
        ruta: "/materias/analisis-mat2",
        icono: "🧠",
      },
      {
        nombre: "Base de Datos 2",
        descripcion: "Normalizacion, Optimizacion, Transacciones...",
        ruta: "/materias/bbdd2",
        icono: "💾",
      },
      {
        nombre: "Comunicacion y Redes 2",
        descripcion: "Modelo OSI, ipv4, subnetting...",
        ruta: "/materias/comu-redes2",
        icono: "📡",
      },
    ],
  };

  return (
    <div className="p-6 bg-[#F5F5F5] min-h-screen">
      {Object.entries(materiasPorAnio).map(([anio, materias]) => (
        <section key={anio} className="mb-10">
          <h2 className="text-2xl font-bold text-[#06402B] mb-4">{anio}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {materias.map((materia, index) => (
              <TarjetaMateria key={`${materia.ruta}-${index}`} {...materia} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ListaMaterias;
