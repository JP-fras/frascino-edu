import { Link } from "react-router-dom";

const TarjetaMateria = ({ nombre, descripcion, ruta, icono }) => {
  return (
    <Link to={ruta}>
      <div className="bg-white border border-[[#C6F6D5]] rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer flex flex-col gap-2">
        <div className="text-3xl">{icono || "📚"}</div>
        <h2 className="text-lg font-semibold text-[#06402B]">{nombre}</h2>
        <p className="text-sm text-gray-600">{descripcion}</p>
      </div>
    </Link>
  );
};

export default TarjetaMateria;
