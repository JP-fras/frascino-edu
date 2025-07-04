const YouTube = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md text-[#1A1A1A] mb-10">
      <h2 className="text-2xl font-bold text-[#06402B] mb-4">Canal de YouTube</h2>
      <p className="mb-4">
        Tengo un canal de YouTube donde subo clases de la materia que enseño en la universidad: <em>Arquitectura de Computadores</em>. 
        Próximamente, iré sumando más contenido de otras materias y temas relacionados con la informática.
      </p>
      <a
        href="https://www.youtube.com/@FrascinoJuanPablo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#FFA726] text-white px-5 py-2 rounded hover:bg-[#fb8c00] transition font-medium"
      >
        Visitar canal
      </a>
    </section>
  );
};

export default YouTube
