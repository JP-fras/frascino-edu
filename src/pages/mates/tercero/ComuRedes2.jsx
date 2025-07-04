import PaginaMateria from "../../../components/materias/PaginaMateria"

function ComuRedes2() {

    return (
        <PaginaMateria nombreMateria={"Comunicacion y Redes 2"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 1er Parcial Redes 2", url: "/pdfs/resumen1er_comuredes2.pdf"},
                {tipo: "pdf", titulo: "Resumen 2do Parcial Redes 2", url: "/pdfs/resumen2dp_comuredes2.pdf"},
            ],
        }
        }
        />
    )
}

export default ComuRedes2