import PaginaMateria from "../../../components/materias/PaginaMateria"

function AnalisisMat1() {

    return (
        <PaginaMateria nombreMateria={"Analisis Matematico 1"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen", url: "/pdfs/resumen_analisismat1.pdf"},
            ],
            ejercicios: [
                { tipo: "pdf", titulo: "Practica 1", url: "/pdfs/ejerciciosfinal_anmat1.pdf" },
                { tipo: "pdf", titulo: "Practica 2", url: "/pdfs/ejerciciosfinal2_anmat1.pdf" },
            ],
        }
        }
        />
    )
}

export default AnalisisMat1