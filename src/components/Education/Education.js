import React from 'react'

import { Title } from '../shared/Title/Title'
import { Timeline } from '../shared/TimeLine/Timeline'

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
            <Title texto={'Educación'} icono={'flaticon/png/001-curriculum.png'} autor={'Icono realizado por Freepik de www.flaticon.com'} id={'TooltipEducationTitle'} />
            <Timeline data={data} />
        </>
    )
}

export default Education