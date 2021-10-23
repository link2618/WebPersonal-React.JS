import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Title } from '../shared/Title/Title'
import { HobbieItem } from './HobbieItem'

gsap.registerPlugin(ScrollTrigger)

const Hobbies = () => {

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
                    id: `hobbie-${index+1}`, 
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

    const data = [
        {
            icono: 'flaticon/png/005-poker.png',
            autor: 'Icono realizado por Nikita Golubev de www.flaticon.com',
            titulo: 'Cardistry'
        },
        {
            icono: 'flaticon/png/004-esports.png',
            autor: 'Icono realizado por wanicon de www.flaticon.com',
            titulo: 'Video Juegos'
        },
        {
            icono: 'flaticon/png/006-excursionismo.png',
            autor: 'Icono realizado por monkik de www.flaticon.com',
            titulo: 'Caminar'
        },
        {
            icono: 'flaticon/png/007-claqueta.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Películas'
        },
        {
            icono: 'flaticon/png/009-cubo.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Rubik'
        },
        {
            icono: 'flaticon/png/008-activar-sonido.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Música'
        },
    ]

    return (
        <>
            <Title texto={'Pasatiempos'} icono={'flaticon/png/003-veintiuna.png'} autor={'Icono realizado por Darius Dan de www.flaticon.com'} id={'TooltipHobbieTitle'} />
            <div className='container hobbiesSection' ref={addToRefs}>
                {data.map( item => (
                    <HobbieItem icono={item.icono} autor={item.autor} titulo={item.titulo} key={item.titulo} id={item.titulo} />
                ))}
            </div>
        </>
    )
}

export default Hobbies