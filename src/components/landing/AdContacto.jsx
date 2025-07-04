const AdContacto = () => {
  return (
    <div className="bg-[#C6F6D5] border-l-4 border-[#06402B] p-6 rounded-xl shadow-md mb-10">
      <h2 className="text-xl font-semibold text-[#06402B] mb-2">
        ¿Necesitás una clase particular para preparar un examen?
      </h2>
      <p className="text-[#1A1A1A] mb-4">
        ¿O estás complicado con una materia y necesitás los apuntes de toda la cursada?
      </p>
      <a
        href="https://wa.me/5491164001674"
        className="inline-block bg-[#FFA726] text-white px-5 py-2 rounded hover:bg-[#fb8c00] transition font-medium"
      >
        Contactame para cotizar y coordinar
      </a>
    </div>
  );
};

export default AdContacto
