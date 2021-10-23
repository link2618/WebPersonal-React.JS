import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SkillBar = ({title, percent}) => {

    const skillBarRefs = useRef([])
    skillBarRefs.current = []

    useEffect(() => {
        skillBarRefs.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0,
                width: 0
            }, 
            {
                duration: 1,
                autoAlpha: 1,
                width: `${percent}`, 
                ease: Power2.in, 
                scrollTrigger: {
                    id: `skill-bar-${index+1}`, 
                    trigger: element, 
                    start: 'top center+=100', 
                    toggleActions: 'play none none reverse', 
                    // markers: true
                }
            })
        });
    }, [percent])

    const addToRefs = (e) => {
        if (e && !skillBarRefs.current.includes(e.target)) {
            skillBarRefs.current.push(e)
        }
    }

    return (
        <>
            <div className="skills-item-header">
                <span className="skills-title-bar">{title}</span>
                <span className="skills-percent">{percent}</span>
            </div>
            <div className="skills-item-bar">
                <div className="skills-item-percent" style={{width: `${percent}`}} ref={addToRefs}></div>
            </div>
        </>
    )
}
