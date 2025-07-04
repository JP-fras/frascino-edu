const VisorPDF = ({ url }) => {
  return (
    <div className="flex flex-col gap-2">
      <iframe
        src={url}
        className="w-full h-[500px] border rounded"
        title="PDF Viewer"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#06402B] underline hover:text-[#FFA726] transition"
      >
        Abrir en nueva pestaña
      </a>
    </div>
  );
};

export default VisorPDF;
