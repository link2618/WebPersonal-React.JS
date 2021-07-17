import React from 'react'

import { Title } from '../shared/Title/Title'
import { Project } from './Project'

const Projects = () => {

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

    return (
        <>
            <Title texto={'Projectos'} icono={'flaticon/png/013-projects.png'} autor={'Icono realizado por Freepik de www.flaticon.com'} id={'TooltipProjectTitle'} />
            <div className="container sectionProjects">
                { data.map( item => (
                    <Project img={item.img} msg={item.msg} link={item.link} key={item.msg} />
                )) }
            </div>
        </>
    )
}

export default Projects