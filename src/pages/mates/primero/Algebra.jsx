import PaginaMateria from "../../../components/materias/PaginaMateria"

function Algebra() {

    return (
        <PaginaMateria nombreMateria={"Algebra y Geometria Analitica"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 2do Parcial Algebra", url: "/pdfs/resumen2dopar_algebra.pdf"},
            ],
        }
        }
        />
    )
}

export default Algebra