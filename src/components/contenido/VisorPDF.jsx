import { useState, useEffect } from 'react';

const VisorPDF = ({ url }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [useEmbedded, setUseEmbedded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const mobile = mobileRegex.test(userAgent.toLowerCase());
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Función para descargar el PDF
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    link.click();
  };

  // URL para PDF.js viewer
  const getPDFViewerUrl = () => {
    return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(url)}`;
  };

  // Renderizado para móvil
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {/* Opciones de visualización */}
        <div className="flex gap-2 p-2 bg-gray-100 rounded">
          <button
            onClick={() => setUseEmbedded(false)}
            className={`px-3 py-1 text-sm rounded ${
              !useEmbedded 
                ? 'bg-[#06402B] text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            PDF
          </button>
          <button
            onClick={() => setUseEmbedded(true)}
            className={`px-3 py-1 text-sm rounded ${
              useEmbedded 
                ? 'bg-[#06402B] text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Previsualizar
          </button>
        </div>

        {useEmbedded ? (
          /* Visor embebido usando PDF.js */
          <div className="flex flex-col gap-2">
            <iframe
              src={url}
              className="w-full h-[60vh] border rounded"
              title="PDF Viewer"
            />
            <div className="flex gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#06402B] text-white px-4 py-2 rounded hover:bg-[#FFA726] transition text-sm"
              >
                Abrir Original
              </a>
              <button
                onClick={downloadPDF}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm"
              >
                Descargar
              </button>
            </div>
          </div>
        ) : (
          /* Vista rápida con acciones */
          <div className="flex flex-col gap-4 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Documento PDF</h3>
                <p className="text-sm text-gray-600">Toca para ver opciones</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#06402B] text-white px-4 py-3 rounded-lg hover:bg-[#FFA726] transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en nueva pestaña
              </a>
              
              <button
                onClick={downloadPDF}
                className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Renderizado para escritorio
  return (
    <div className="flex flex-col gap-2">
      <iframe
        src={url}
        className="w-full h-[500px] border rounded"
        title="PDF Viewer"
      />
      <div className="flex gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#06402B] underline hover:text-[#FFA726] transition"
        >
          Abrir en nueva pestaña
        </a>
        <button
          onClick={downloadPDF}
          className="text-sm text-gray-600 underline hover:text-gray-800 transition"
        >
          Descargar
        </button>
      </div>
    </div>
  );
};

export default VisorPDF;