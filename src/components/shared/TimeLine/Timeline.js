import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(ScrollTrigger)

export const Timeline = ({data}) => {

    const experienceItem = useRef([])
    experienceItem.current = []

    useEffect(() => {
        experienceItem.current.forEach((element, index) => {
            gsap.fromTo(element, {
                autoAlpha: 0,
                y: 100
            }, 
            {
                duration: 1,
                autoAlpha: 1,
                y: 0,
                ease: Power2.in, 
                scrollTrigger: {
                    id: `timeline-${index+1}`, 
                    trigger: element, 
                    start: 'top center+=100', 
                    toggleActions: 'play none none reverse', 
                    // markers: true
                }
            })
        });
    }, [])

    const addToRefs = (e) => {
        if (e && !experienceItem.current.includes(e.target)) {
            experienceItem.current.push(e)
        }
    }

    return (
        <div className='timeline container'>
                { data.map(item => [
                    <div className="timeline-event" key={item.titulo} ref={addToRefs}>
                        <div className="card z-depth-2 timeline-content">
                            <blockquote>
                                <div className="card-content">
                                    <span className="card-title">{item.titulo}</span>
                                    { item.info.map( (info, index) => (
                                        <div key={index}>
                                        { (index >= 1) &&
                                            <>
                                            <br />
                                            <div className="divider" style={{background:'#7B7B7B'}}></div>
                                            <br />
                                            </>
                                        }
                                        <font size='3'>
                                            <p>{info.escuela}</p>
                                            { (info.extra) &&
                                                info.extra.map( (extra, index) => (
                                                    <p key={index}>{extra}</p>
                                                ))
                                            }
                                            <p>{info.ubicacion}</p>
                                        </font>
                                        <br />
                                        <font size='2'><i><p>{info.fecha}</p></i></font>
                                        </div>
                                    ))}
                                </div>
                            </blockquote>
                        </div>
                        <div className="timeline-badge">
                            <h6>
                                {(item.texto !== 'UNI') ? 
                                    item.texto :
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                }
                            </h6>
                        </div>
                    </div>
                ])}
            </div>
    )
}
