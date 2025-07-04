import PaginaMateria from "../../../components/materias/PaginaMateria"

function IngSoft1() {

    return (
        <PaginaMateria nombreMateria={"Ingenieria de Software 1"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen Ing Soft", url: "/pdfs/resumen_ingsoft1.pdf"},
            ],
        }
        }
        />
    )
}

export default IngSoft1