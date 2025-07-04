import PaginaMateria from "../../../components/materias/PaginaMateria"

function TeoriaSistemas() {

    return (
        <PaginaMateria nombreMateria={"Teoria de Sistemas y Organizaciones"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "Resumen 2do Parcial", url: "/pdfs/resumen2doparcial_teoriasistemas.pdf"},
            ],
        }
        }
        />
    )
}

export default TeoriaSistemas