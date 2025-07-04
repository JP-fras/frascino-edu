import PaginaMateria from "../../../components/materias/PaginaMateria"

function Arquitectura1() {

    return (
        <PaginaMateria nombreMateria={"Arquitectura de Computadores 1"}
        contenidos={{
            resumenes: [
                { tipo: "markdown", titulo: "Resumen", contenido: "# Ver los videos" },,

            ],
            videos: [
                { tipo: "video", titulo: "Clase Circuitos Combinacionales", url: "https://www.youtube.com/embed/0i9cq8dpaU4?si=n_0wDyEpZW7-oyT5" },
                { tipo: "video", titulo: "Clase FlipFlop y Diagramas de Tiempo", url: "https://www.youtube.com/embed/9opQmTeNZZQ?si=avpQ7n5h2VED9JVx" },
                { tipo: "video", titulo: "Clase Introduccion Assembler", url: "https://www.youtube.com/embed/rkKS-jNl868?si=vzj7pIWgRShwNIXT" },
                { tipo: "video", titulo: "Clase Ordenamiento con Assembler", url: "https://www.youtube.com/embed/WAP5CND4MUs?si=8OaxEmCX-L_SOFlJ" },
            ],
        }
        }
        />
    )
}

export default Arquitectura1