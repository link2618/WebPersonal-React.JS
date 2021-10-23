import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Title } from '../shared/Title/Title'
import { SkillBar } from './SkillBar'

gsap.registerPlugin(ScrollTrigger)

const Skill = () => {

    const skillRefs = useRef([])
    skillRefs.current = []

    useEffect(() => {
        skillRefs.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0
            }, 
            {
                duration: 1,
                autoAlpha: 1, 
                ease: Power2.in, 
                scrollTrigger: {
                    id: `skill-${index+1}`, 
                    trigger: element, 
                    start: 'top center+=100', 
                    toggleActions: 'play none none reverse', 
                    // markers: true
                }
            })
        });
    }, [])

    const addToRefs = (e) => {
        if (e && !skillRefs.current.includes(e.target)) {
            skillRefs.current.push(e)
        }
    }

    const data = [
        {
            titulo: 'Lenguajes Logicos',
            info: [
                {
                    lenguaje: 'JavaScript',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Python',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'FrontEnd',
            info: [
                {
                    lenguaje: 'React.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Redux',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Angular',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'BackEnd',
            info: [
                {
                    lenguaje: 'Node.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Express.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Django',
                    porcentaje: '50%'
                },
                {
                    lenguaje: 'Docker',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'Bases de datos',
            info: [
                {
                    lenguaje: 'Mongo',
                    porcentaje: '60%'
                },
                {
                    lenguaje: 'PostgreSQL',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'Librerias BD',
            info: [
                {
                    lenguaje: 'Mongoose',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Sequelize',
                    porcentaje: '60%'
                },
            ]
        },
    ]

    return (
        <>
            <Title texto={'Habilidades'} icono={'flaticon/png/002-obrero.png'} autor={'Icono realizado por Vector Market de www.flaticon.com'} id={'TooltipSkillTitle'} />
            <div className='container skillSection' ref={addToRefs}>

                {data.map( item => (
                    <div className="skillCard" key={item.titulo} ref={addToRefs}>
                        {/* <!-- Titulo --> */}
                        <div className="skills-title">
                            <h3>{item.titulo}</h3>
                        </div>
                        { item.info.map( (element, index) => (
                            <SkillBar title={element.lenguaje} percent={element.porcentaje} key={index} />
                        ))}
                    </div>
                ))}
            
            </div>
        </>
    )
}

export default Skill