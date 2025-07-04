import PaginaMateria from "../../../components/materias/PaginaMateria"

function TestMat() {

    return (
        <PaginaMateria nombreMateria={"Algoritmos y Estructura de Datos"}
        contenidos={{
            resumenes: [
                {tipo: "pdf", titulo: "RR", url: "/pdfs/p.pdf"},
                { tipo: "markdown", titulo: "Resumen 2", contenido: "# Algorimos..." },
            ],
            ejercicios: [
                { tipo: "pdf", titulo: "Ejercicio 1", url: "/pdfs/p.pdf" },
            ],
            videos: [
                { tipo: "video", titulo: "Clase 1", url: "https://www.youtube.com/embed/WAP5CND4MUs?si=FOeyO5Azi12p6O2M" },
            ],
        }
        }
        />
    )
}

export default TestMat