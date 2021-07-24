// import React, { useRef, useEffect } from 'react'
import React from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Title } from '../shared/Title/Title'
import { Project } from './Project'

// gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

    // const projectRef = useRef(null)
    // const projectRefs = useRef([])
    // projectRefs.current = []

    // useEffect(() => {
    //     // gsap.from(projectRef.current, {duration: 1, autoAlpha: 0, ease: 'none', delay: 1})

    //     projectRefs.current.forEach((element, index) => {
    //         gsap.fromTo(element, {
    //             autoAlpha: 0
    //         }, 
    //         {
    //             duration: 1,
    //             autoAlpha: 1, 
    //             easy: 'none', 
    //             scrollTrigger: {
    //                 id: `section-${index+1}`, 
    //                 trigger: element, 
    //                 start: 'top center+=100', 
    //                 toggleActions: 'play none none reverse', 
    //                 markers: true
    //             }
    //         })
    //     });
    // }, [])

    const data = [
        {
            img: 'img/mrRapido.png',
            msg: 'Mr Rapido',
            link: 'https://play.google.com/store/apps/details?id=com.designocana.mrrapido&hl=es_CO&gl=US'
        },
        {
            img: 'img/Salud_Estetica.png',
            msg: 'Salud y Estética',
            link: 'https://saludyesteticaclinicaodontologica.com.co'
        },
    ]

    // const addToRefs = (e) => {
    //     if (e && !projectRefs.current.includes(e.target)) {
    //         projectRefs.current.push(e)
    //     }
    //     console.log('-->', projectRefs.current)
    // }

    return (
        <>
            <Title texto={'Proyectos'} icono={'flaticon/png/013-projects.png'} autor={'Icono realizado por Freepik de www.flaticon.com'} id={'TooltipProjectTitle'} />
            {/* <div className="container sectionProjects" ref={projectRef}> */}
            <div className="container sectionProjects">
                    {/* <div className="card z-depth-2" key={item.msg} ref={addToRefs}> */}
                { data.map( item => (
                    <div className="card z-depth-2" key={item.msg} >
                    <Project img={item.img} msg={item.msg} link={item.link} />
                    </div>
                )) }
            </div>
        </>
    )
}

export default Projects