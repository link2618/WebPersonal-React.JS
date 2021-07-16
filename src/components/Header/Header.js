import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ParticlesBackground } from './ParticlesBackground'

const Header = () => {

    const name = 'Hugo Eduardo Carvajalino Solano'
    const college = 'Ingeniero de Sistemas'

    const dataInfo = [
        {
            icono: "email",
            info: "link_2618@hotmail.com"
        },
        {
            icono: "phone_iphone",
            info: "+57 316 543 0354"
        },
        {
            icono: "phone_iphone",
            info: "+57 310 482 0983"
        },
        {
            icono: "location_on",
            info: "Floridablanca, Santander, Colombia"
        },
    ]

    const facebook = 'https://www.facebook.com/Hugo.E.C.S'
    const linkedin = 'https://www.linkedin.com/in/hugo-carvajalino-solano-4420b1172/'
    const twitter = 'https://twitter.com/HugoCarvajalino'
    const whatsapp = 'https://api.whatsapp.com/send?phone=573165430354&text=Hola,%20me%20gustar%C3%ADa%20hacer%20una%20consulta.'
    const github = 'https://github.com/link2618?tab=repositories'

    return (
        <>
        <header className="header-background section scrollspy">
            <ParticlesBackground />
            <div className="container card-initial" id="pre">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div id="profile">
                                <img alt="Imagen de Perfil" className="responsive-img" src="img/hugo carvajalino.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="title name">{ name }</span>
                                <span className="college">{ college }</span>

                                <ul className="datosContacto">
                                    {dataInfo.map( (item, index) => (
                                        <li className="itemLista" key={ index }>
                                            <i className="material-icons icono">{item.icono}</i>
                                            <span className="textoInfo">
                                                {item.info}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="social">
                                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="btn-floating indigo waves-effect waves-light socialItem"> <FontAwesomeIcon icon={faFacebookF} size="lg" /> </a>
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-floating blue darken-3 waves-effect waves-light socialItem"> <FontAwesomeIcon icon={faLinkedinIn} size="lg" /> </a>
                                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="btn-floating blue waves-effect waves-light socialItem"> <FontAwesomeIcon icon={faTwitter} size="lg" /> </a>
                                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-floating green waves-effect waves-light socialItem"> <FontAwesomeIcon icon={faWhatsapp} size="lg" /> </a>
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="btn-floating grey darken-3 waves-effect waves-light socialItem"> <FontAwesomeIcon icon={faGithub} size="lg" /> </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header