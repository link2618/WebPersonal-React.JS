import React, { useState } from 'react'
import Iframe from 'react-iframe'
import Swal from 'sweetalert2'
import * as emailjs from 'emailjs-com'

import { Title } from '../Title/Title'

const formInitial = {
    nombre: '',
    asunto: '',
    email: '',
    mensaje: ''
}

const Contact = () => {

    const [valuesForm, setValuesForm] = useState(formInitial)
    const [loading, setLoading] = useState(false)
    const {nombre, asunto, email, mensaje} = valuesForm

    const handleInputChange = ({ target }) => {
        setValuesForm({
            ...valuesForm,
            [target.name]: target.value || target.checked
        })
    }

    const handleContact = async (e) => {
        e.preventDefault()

        setLoading(true)
        const emailID = process.env.REACT_APP_EMAIL_ID
        const templateID = process.env.REACT_APP_TEMPLATE_ID
        const userID = process.env.REACT_APP_USER_ID_EMAILJS
        const resp = await emailjs.sendForm(emailID, templateID, '.contactForm', userID)

        if (resp.status === 200) {
            Swal.fire('Exito', 'Mensaje enviado con exito', 'success')
            setValuesForm(formInitial)
        } else {
            Swal.fire('Error', 'Algo salio mal', 'error')
        }

        setLoading(false)
    }
    return (
        <>
            <Title texto={'CONTÁCTAME'} icono={'flaticon/png/011-correo-electronico.png'} autor={'Icono realizado por Kiranshastry de www.flaticon.com'} id={'TooltipContactTitle'} />
            <div className='container contactSeccion'>
                <form onSubmit={handleContact} className='contactForm'>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input id="nombre" name='nombre' value={nombre} type="text" onChange={handleInputChange}  required />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">business_center</i>
                        <input id="asunto" name='asunto' value={asunto} type="text" onChange={handleInputChange} required />
                        <label htmlFor="asunto">Asunto</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" name='email' value={email} type="email" onChange={handleInputChange} required />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Email Invalido" data-success="Valido" onChange={handleInputChange}></span>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">message</i>
                        <textarea id="mensaje" name='mensaje' value={mensaje} className="materialize-textarea" data-length="120" onChange={handleInputChange} required></textarea>
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>

                    <div className="botonconf">
                        <button type="submit" className="btn waves-effect" id="enviar" name="enviar" disabled={loading}>Enviar</button>
                    </div>

                    {loading && 
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    }

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