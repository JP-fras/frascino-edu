import PaginaMateria from "../../../components/materias/PaginaMateria"

function Tecnologia() {

    return (
        <PaginaMateria nombreMateria={"Tecnologia Aplicada"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 1er Parcial", url: "/pdfs/resumen1erpar_tecno.pdf"},
                {tipo: "pdf", titulo: "Resumen 2do Parcial", url: "/pdfs/resumen2dopar_tecno"},
            ],
        }
        }
        />
    )
}

export default Tecnologia