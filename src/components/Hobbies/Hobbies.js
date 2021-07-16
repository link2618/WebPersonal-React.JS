import React from 'react'
import { Title } from '../Title/Title'
import { HobbieItem } from './HobbieItem'

const Hobbies = () => {

    const data = [
        {
            icono: 'flaticon/png/005-poker.png',
            autor: 'Icono realizado por Nikita Golubev de www.flaticon.com',
            titulo: 'Cardistry'
        },
        {
            icono: 'flaticon/png/004-esports.png',
            autor: 'Icono realizado por wanicon de www.flaticon.com',
            titulo: 'Video Juegos'
        },
        {
            icono: 'flaticon/png/006-excursionismo.png',
            autor: 'Icono realizado por monkik de www.flaticon.com',
            titulo: 'Caminar'
        },
        {
            icono: 'flaticon/png/007-claqueta.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Películas'
        },
        {
            icono: 'flaticon/png/009-cubo.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Rubik'
        },
        {
            icono: 'flaticon/png/008-activar-sonido.png',
            autor: 'Icono realizado por Freepik de www.flaticon.com',
            titulo: 'Música'
        },
    ]

    return (
        <>
            <Title texto={'Pasatiempos'} icono={'flaticon/png/003-veintiuna.png'} autor={'Icono realizado por Darius Dan de www.flaticon.com'} />
            <div className='container hobbiesSection'>
                {data.map( item => (
                    <HobbieItem icono={item.icono} autor={item.autor} titulo={item.titulo} key={item.titulo} />
                ))}
                {/* <HobbieItem icono={'flaticon/png/005-poker.png'} autor={'Icono realizado por Nikita Golubev de www.flaticon.com'} />
                <HobbieItem icono={'flaticon/png/005-poker.png'} autor={'Icono realizado por Nikita Golubev de www.flaticon.com'} />
                <HobbieItem icono={'flaticon/png/005-poker.png'} autor={'Icono realizado por Nikita Golubev de www.flaticon.com'} />
                <HobbieItem icono={'flaticon/png/005-poker.png'} autor={'Icono realizado por Nikita Golubev de www.flaticon.com'} />
                <HobbieItem icono={'flaticon/png/005-poker.png'} autor={'Icono realizado por Nikita Golubev de www.flaticon.com'} /> */}
            </div>
        </>
    )
}

export default Hobbies