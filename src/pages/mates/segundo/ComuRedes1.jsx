import PaginaMateria from "../../../components/materias/PaginaMateria"

function ComuRedes1() {

    return (
        <PaginaMateria nombreMateria={"Comunicacion y Redes 1"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 1er Parcial Redes", url: "/pdfs/resumen1erpar_comuredes1.pdf"},
                {tipo: "pdf", titulo: "Resumen 2do Parcial Redes", url: "/pdfs/resumen2dopar_comuredes1.pdf"},

            ],
        }
        }
        />
    )
}

export default ComuRedes1