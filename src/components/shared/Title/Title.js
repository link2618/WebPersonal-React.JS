import React, { useEffect, useRef } from 'react'
import ReactTooltip from 'react-tooltip'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Title = ({texto='texto', icono, autor, id = 'TooltipTitle'}) => {

    const titleRefs = useRef([])
    titleRefs.current = []

    useEffect(() => {
        titleRefs.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0,
                width: 0
            }, 
            {
                duration: 1,
                autoAlpha: 1,
                width: '100%',
                // ease: `steps(${texto.length})`, 
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
        if (e && !titleRefs.current.includes(e.target)) {
            titleRefs.current.push(e)
        }
    }

    return (
        <div className='titulos' ref={addToRefs}>
            <img className="icono" src={icono} alt={autor} data-tip data-for={id} />
            <h4> {texto.toUpperCase()} </h4>

            <ReactTooltip id={id} place="top" type="info" effect="solid">
                {autor}
            </ReactTooltip>
        </div>
    )
}
