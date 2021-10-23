import React, { useEffect, useRef } from 'react'
import ReactTooltip from 'react-tooltip'
import { gsap, Elastic } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HobbieItem = ({icono, autor, titulo, id = 'TooltipHobbie'}) => {

    const hobbieItemRefs = useRef([])
    hobbieItemRefs.current = []

    useEffect(() => {
        hobbieItemRefs.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0
            }, 
            {
                duration: 1,
                autoAlpha: 1,
                ease: Elastic.out,
                scrollTrigger: {
                    id: `hobbie-item-${index+1}`, 
                    trigger: element, 
                    start: 'top center+=100', 
                    toggleActions: 'play none none reverse', 
                    // markers: true
                }
            })
        });
    }, [])

    const addToRefs = (e) => {
        if (e && !hobbieItemRefs.current.includes(e.target)) {
            hobbieItemRefs.current.push(e)
        }
    }

    return (
        <div className="hobbieItem" ref={addToRefs}>
            <img className="iconoHobbie" src={icono} alt={autor} data-tip data-for={id} />
            <span className="hobbieName">{titulo}</span>

            <ReactTooltip id={id} place="top" type="info" effect="solid">
                {autor}
            </ReactTooltip>
        </div>
    )
}
