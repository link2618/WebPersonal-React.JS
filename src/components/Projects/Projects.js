import React from 'react'

import { Title } from '../Title/Title'
import { Project } from './Project'

const Projects = () => {
    return (
        <>
            <Title texto={'Projectos'} icono={'flaticon/png/013-projects.png'} autor={'Icono realizado por Freepik de www.flaticon.com'} />
            <div className="container">
                <Project />
            </div>
        </>
    )
}

export default Projects