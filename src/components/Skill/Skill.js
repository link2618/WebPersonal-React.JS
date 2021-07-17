import React from 'react'
import { Title } from '../shared/Title/Title'
import { SkillBar } from './SkillBar'

const Skill = () => {

    const data = [
        {
            titulo: 'Lenguajes Logicos',
            info: [
                {
                    lenguaje: 'JavaScript',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Python',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'FrontEnd',
            info: [
                {
                    lenguaje: 'React.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Redux',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Angular',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'BackEnd',
            info: [
                {
                    lenguaje: 'Node.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Express.js',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'Django',
                    porcentaje: '50%'
                },
                {
                    lenguaje: 'Docker',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'Bases de datos',
            info: [
                {
                    lenguaje: 'Mongo',
                    porcentaje: '60%'
                },
                {
                    lenguaje: 'PostgreSQL',
                    porcentaje: '50%'
                },
            ]
        },
        {
            titulo: 'Librerias BD',
            info: [
                {
                    lenguaje: 'Mongoose',
                    porcentaje: '70%'
                },
                {
                    lenguaje: 'sequelize',
                    porcentaje: '60%'
                },
            ]
        },
    ]

    return (
        <>
            <Title texto={'Habilidades'} icono={'flaticon/png/002-obrero.png'} autor={'Icono realizado por Vector Market de www.flaticon.com'} id={'TooltipSkillTitle'} />
            <div className='container skillSection'>

                {data.map( item => (
                    <div className="skillCard" key={item.titulo}>
                        {/* <!-- Titulo --> */}
                        <div className="skills-title">
                            <h3>{item.titulo}</h3>
                        </div>
                        { item.info.map( (element, index) => (
                            <SkillBar title={element.lenguaje} percent={element.porcentaje} key={index} />
                        ))}
                    </div>
                ))}
            
            </div>
        </>
    )
}

export default Skill