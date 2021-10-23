import React from 'react'

import { Timeline } from '../shared/TimeLine/Timeline'
import { Title } from '../shared/Title/Title'

const Experience = () => {

    const data = [
        {
            titulo: 'Erco Energía',
            texto: 'E',
            info: [{
                escuela: 'Desarrollor FullStack.',
                ubicacion: 'Remoto',
                fecha: 'Septiembre/2021 - Actualidad',
                extra: ['React JS', 'Express.js', 'MongoDB', 'Postgresql']
            }]
        },
        {
            titulo: 'World Pos Solutions, WPOSS',
            texto: 'W',
            info: [{
                escuela: 'Ingeniero De Desarrollo Junior.',
                ubicacion: 'Remoto',
                fecha: 'Septiembre/2020 - Agosto/2021',
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
                extra: ['React JS', 'React Native', 'Express.js', 'MongoDB']
            }]
        },
    ]

    return (
        <>
            <Title texto={'Experiencia'} icono={'flaticon/png/012-experience.png'} autor={'Icono realizado por surang de www.flaticon.com'} id={'TooltipExperienceTitle'} />
            <Timeline data={data} />
        </>
    )
}

export default Experience