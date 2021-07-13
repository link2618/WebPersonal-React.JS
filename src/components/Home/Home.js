import React from 'react'

import { Contact } from '../Contact/Contact'
import { Education } from '../Education/Education'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Hobbies } from '../Hobbies/Hobbies'
import { Information } from '../Information/Information'
import { Skill } from '../Skill/Skill'

export const Home = () => {
    return (
        <>
            <section>
                <Header />
            </section>
            <section id="informacion" className="separacion section scrollspy">
                <Information />
            </section>
            <section className="separacion">
                <Education />
            </section>
            <section className="separacion">
                <Skill />
            </section>
            <section className="separacion">
                <Hobbies />
            </section>
            <section className="separacion">
                <Contact />
            </section>
            <section className="separacion">
                <Footer />
            </section>
        </>
    )
}
