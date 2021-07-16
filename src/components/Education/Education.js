import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { Title } from '../Title/Title'

const Education = () => {

    const data = [
        {
            titulo: 'Escuela Primaria',
            texto: 'P',
            info: [{
                escuela: 'Instituto La Giralda',
                ubicacion: 'Cartagena, Bolívar, Colombia',
                fecha: '1996 - 2003'
            }]
        },
        {
            titulo: 'Escuela de Secundaria',
            texto: 'S',
            info: [
                {
                    escuela: 'Institución Educativa Seminario De Cartagena',
                    ubicacion: 'Cartagena, Bolívar, Colombia',
                    fecha: '2004 - 2007'
                },
                {
                    escuela: 'Colegio Seminario San Pio X',
                    ubicacion: 'Floridablanca, Santander, Colombia',
                    fecha: '2008 - 2009'
                }
            ]
        },
        {
            titulo: 'Ingeniería de Sistemas',
            texto: 'UNI',
            info: [{
                escuela: 'Universidad Francisco de Paula Santander',
                ubicacion: 'Ocaña, Norte de Santander, Colombia',
                fecha: '2013 - 2019'
            }]
        },
        {
            titulo: 'Diplomado',
            texto: 'D',
            info: [{
                escuela: 'Universidad Francisco de Paula Santander',
                ubicacion: 'Ocaña, Norte de Santander, Colombia',
                fecha: '2018',
                extra: ['Cisco Network Academy', 'Entornos LAN', 'Entornos WAN']
            }]
        },
    ]

    return (
        <>
            <Title texto={'Educación'} icono={'flaticon/png/001-curriculum.png'} autor={'Icono realizado por Freepik de www.flaticon.com'} />
            <div className='timeline container'>
                { data.map(item => [
                    <div className="timeline-event" key={item.titulo}>
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
        </>
    )
}

export default Education