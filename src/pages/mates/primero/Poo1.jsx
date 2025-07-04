import PaginaMateria from "../../../components/materias/PaginaMateria"

function Poo1() {

    return (
        <PaginaMateria nombreMateria={"Programacion Orientada a Objetos 1"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen POO 1", url: "/pdfs/resumen_poo1.pdf"},
            ],
        }
        }
        />
    )
}

export default Poo1