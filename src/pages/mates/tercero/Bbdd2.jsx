import PaginaMateria from "../../../components/materias/PaginaMateria"

function Bbdd2() {

    return (
        <PaginaMateria nombreMateria={"Base de Datos 2"}
        contenidos={{
            resumenes: [
                { tipo: "markdown", titulo: "Resumen", contenido: "# Proximamente" },,
            ],
            ejercicios: [
                {tipo: "pdf", titulo: "Ejercicios Optimizacion y Transacciones", url: "/pdfs/ejercicios_bbdd2.pdf" },
            ],
        }
        }
        />
    )
}

export default Bbdd2