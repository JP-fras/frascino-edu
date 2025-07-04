import VisorPDF from "./VisorPDF";
import VisorMarkdown from "./VisorMarkdown";
import VisorVideo from "./VisorVideo";

const ContenidoItem = ({ tipo, titulo, url, contenido }) => {
  return (
    <div className="border border-[#C6F6D5] rounded-lg p-4 bg-[#F9FAFB] shadow-sm">
      <h3 className="text-lg font-semibold text-[#06402B] mb-2">{titulo}</h3>
      
      {tipo === "pdf" && <VisorPDF url={url} />}
      {tipo === "markdown" && <VisorMarkdown contenido={contenido} />}
      {tipo === "video" && <VisorVideo url={url} />}
      
      {/* Para evitar errores en caso de tipo inválido */}
      {!["pdf", "markdown", "video"].includes(tipo) && (
        <p className="text-sm text-red-500">Tipo de contenido no soportado.</p>
      )}
    </div>
  );
};

export default ContenidoItem
