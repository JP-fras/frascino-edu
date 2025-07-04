import PaginaMateria from "../../../components/materias/PaginaMateria"

function Algoritmos() {

    return (
        <PaginaMateria nombreMateria={"Algoritmos y Estructura de Datos"}
        contenidos={{
            resumenes: [
                { tipo: "markdown", titulo: "Resumen", contenido: "# Proximamente" },,
            ],
            ejercicios: [
                {tipo: "pdf", titulo: "Ejercicios Diagrama de Flujo", url: "/pdfs/ejercicios_algoritmos.pdf" },
            ],
        }
        }
        />
    )
}

export default Algoritmos