import React, {Suspense, lazy} from 'react'

// import Contact from '../Contact/Contact'
// import Education from '../Education/Education'
// import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
// import Hobbies from '../Hobbies/Hobbies'
// import Information from '../Information/Information'
// import Skill from '../Skill/Skill'
// import Experience from '../Experience/Experience'
// import Projects from '../Projects/Projects'

// Para carga perezosa
const Contact = lazy( () => import('../Contact/Contact') )
const Education = lazy( () => import('../Education/Education') )
const Footer = lazy( () => import('../Footer/Footer') )
const Header = lazy( () => import('../Header/Header') )
const Hobbies = lazy( () => import('../Hobbies/Hobbies') )
const Information = lazy( () => import('../Information/Information') )
const Skill = lazy( () => import('../Skill/Skill') )
const Experience = lazy( () => import('../Experience/Experience') )
const Projects = lazy( () => import('../Projects/Projects') )

export const Home = () => {
    return (
        <>
            <section id="inicio">
                <Suspense fallback={<div>Cargando Header...</div>}>
                    <Header />
                </Suspense>
            </section>
            <section id="informacion" className="separacion section scrollspy">
                <Suspense fallback={<div>Cargando Information...</div>}>
                    <Information />
                </Suspense>
            </section>
            <section id="experiencia" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Experience...</div>}>
                    <Experience />
                </Suspense>
            </section>
            <section id="habilidades" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Skill...</div>}>
                    <Skill />
                </Suspense>
            </section>
            <section id="proyectos" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Projects...</div>}>
                    <Projects />
                </Suspense>
            </section>
            <section id="educacion" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Education...</div>}>
                    <Education />
                </Suspense>
            </section>
            <section id="pasatiempos" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Hobbies...</div>}>
                    <Hobbies />
                </Suspense>
            </section>
            <section id="contactame" className="separacion scrollspy">
                <Suspense fallback={<div>Cargando Contact...</div>}>
                    <Contact />
                </Suspense>
            </section>
            <section className="separacion">
                <Suspense fallback={<div>Cargando Footer...</div>}>
                    <Footer />
                </Suspense>
            </section>
        </>
    )
}
