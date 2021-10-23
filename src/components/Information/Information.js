import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Information = () => {

    const information = 'Ingeniero de Sistemas de la Universidad Francisco de Paula Santander Ocaña, Emprendedor y trabajador, con gran sentido de pertenencia, responsable, proactivo, excelente disposición para el trabajo en equipo  y capacidad para adaptarme al entorno de trabajo en el cual me desempeñe, con capacidad de discernir un problema globalmente dentro del mundo del saber, definiendo y encontrando alternativas de solución, aplicando y aprovechando al máximo mis habilidades y conocimientos adquiridos, utilizando para ello el diseño, desarrollo y soporte de sistemas de información complejos de cualquier tipo de organización.'
    const skillBarRefs = useRef([])
    skillBarRefs.current = []

    useEffect(() => {
        skillBarRefs.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0
            }, 
            {
                duration: 1,
                autoAlpha: 1,
                ease: Power2.in, 
                scrollTrigger: {
                    id: `information-${index+1}`, 
                    trigger: element, 
                    start: 'top center+=100', 
                    toggleActions: 'play none none reverse', 
                    // markers: true
                }
            })
        });
    }, [])

    const addToRefs = (e) => {
        if (e && !skillBarRefs.current.includes(e.target)) {
            skillBarRefs.current.push(e)
        }
    }
    
    return (
        <div className="container" ref={addToRefs}>
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
                                {/* <a href="#contactame" className="btn waves-effect">Contactame</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information