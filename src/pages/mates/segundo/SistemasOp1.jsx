import PaginaMateria from "../../../components/materias/PaginaMateria"

function SistemasOp1() {

    return (
        <PaginaMateria nombreMateria={"Sistemas Operativos 1"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen Sistemas Operativos", url: "/pdfs/resumen_sistemasoperativos1.pdf"},
            ],
        }
        }
        />
    )
}

export default SistemasOp1