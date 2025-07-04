import PaginaMateria from "../../../components/materias/PaginaMateria"

function AnalisisMat2() {

    return (
        <PaginaMateria nombreMateria={"Analisis Matematico 2"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen Analisis Mat 2", url: "/pdfs/resumen_analisismat2.pdf"},
            ],
            ejercicios: [
                {tipo: "pdf", titulo: "Ejercicios Analisis Mat 2", url: "/pdfs/ejercicios_analisimat2.pdf"},
            ],
        }
        }
        />
    )
}

export default AnalisisMat2