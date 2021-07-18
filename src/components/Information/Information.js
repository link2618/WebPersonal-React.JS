import React from 'react'

const Information = () => {

    const information = 'Ingeniero de Sistemas de la Universidad Francisco de Paula Santander Ocaña, Emprendedor y trabajador, con gran sentido de pertenencia, responsable, proactivo, excelente disposición para el trabajo en equipo  y capacidad para adaptarme al entorno de trabajo en el cual me desempeñe, con capacidad de discernir un problema globalmente dentro del mundo del saber, definiendo y encontrando alternativas de solución, aplicando y aprovechando al máximo mis habilidades y conocimientos adquiridos, utilizando para ello el diseño, desarrollo y soporte de sistemas de información complejos de cualquier tipo de organización.'
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card z-depth-2">
                        <div className="card-content">
                            <p className="text-uppercase">
                                {information}
                            </p>
                        </div>
                        <div className="card-action">
                            <div className="botonconf">
                                <a download href="pdf/Hoja de vida - Ingeniero Hugo Carvajalino.pdf" className="btn waves-effect">Descargar HV</a>
                                <a href="#contactame" className="btn waves-effect">Contactame</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information