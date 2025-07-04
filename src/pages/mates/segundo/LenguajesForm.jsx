import PaginaMateria from "../../../components/materias/PaginaMateria"

function LenguajesForm() {

    return (
        <PaginaMateria nombreMateria={"Lenguajes Formales"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen Lenguajes Formales", url: "/pdfs/resumen_lengform.pdf"},
            ],
        }
        }
        />
    )
}

export default LenguajesForm