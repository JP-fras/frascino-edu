import PaginaMateria from "../../../components/materias/PaginaMateria"

function Poo2() {

    return (
        <PaginaMateria nombreMateria={"Programacion Orientada a Objetos 2"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 2do Parcial", url: "/pdfs/resumen_poo2.pdf"},
            ],
        }
        }
        />
    )
}

export default Poo2