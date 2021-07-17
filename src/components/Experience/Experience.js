import React from 'react'

import { Title } from '../Title/Title'

const Experience = () => {

    const data = [
        {
            titulo: 'World Pos Solutions, WPOSS',
            texto: 'W',
            info: [{
                escuela: 'Ingeniero De Desarrollo Junior.',
                ubicacion: 'Remoto',
                fecha: 'Septiembre/2020 - Actualidad',
                extra: ['Angular', 'Express.js', 'Cassandra']
            }]
        },
        {
            titulo: 'Trabajador autónomo, Freelance',
            texto: 'F',
            info: [{
                escuela: 'Desarrollador Full Stack.',
                ubicacion: 'Remoto',
                fecha: 'Marzo/2020 - Actualidad',
                extra: ['React.js', 'React Native', 'Express.js', 'MongoDB']
            }]
        },
    ]

    return (
        <>
            <Title texto={'Experiencia'} icono={'flaticon/png/012-experience.png'} autor={'Icono realizado por surang de www.flaticon.com'} id={'TooltipExperienceTitle'} />
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
                            <h6>{item.texto}</h6>
                        </div>
                    </div>
                ])}
            </div>
        </>
    )
}

export default Experience