import React, { useState } from 'react'
import Iframe from 'react-iframe'

import { Title } from '../Title/Title'

const formInitial = {
    nombre: '',
    asunto: '',
    email: '',
    mensaje: ''
}

const Contact = () => {

    const [valuesForm, setValuesForm] = useState(formInitial)
    const {nombre, asunto, email, mensaje} = valuesForm

    const handleInputChange = ({ target }) => {
        setValuesForm({
            ...valuesForm,
            [target.name]: target.value || target.checked
        })
    }

    const handleContact = (e) => {
        e.preventDefault()
        console.log('handleContact')
        console.log(valuesForm)
    }
    return (
        <>
            <Title texto={'CONTÁCTAME'} icono={'flaticon/png/011-correo-electronico.png'} autor={'Icono realizado por Kiranshastry de www.flaticon.com'} />
            <div className='container contactSeccion'>
                <form onSubmit={handleContact} className='contactForm'>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input id="nombre" name='nombre' value={nombre} type="text" className="validate" onChange={handleInputChange}  required />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">business_center</i>
                        <input id="asunto" name='asunto' value={asunto} type="text" className="validate" onChange={handleInputChange} required />
                        <label htmlFor="asunto">Asunto</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" name='email' value={email} type="email" className="validate" onChange={handleInputChange} required />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Email Invalido" data-success="Valido" onChange={handleInputChange}></span>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">message</i>
                        <textarea id="mensaje" name='mensaje' value={mensaje} className="materialize-textarea" data-length="120" onChange={handleInputChange} required></textarea>
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>

                    <div className="botonconf">
                        <button type="submit" className="btn waves-effect" id="enviar" name="enviar">Enviar</button>
                    </div>
                </form>
                <Iframe 
                    url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31675.301708757906!2d-73.11634460480165!3d7.078057711484529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f61d96e0699%3A0x247ca9bc744c07f0!2sFloridablanca%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1586966137085!5m2!1ses-419!2sco'
                    className='mapa'
                    display='initial'
                    position='relative'
                />
            </div>
        </>
    )
}

export default Contact;