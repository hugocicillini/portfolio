import React from 'react'
import "./Skills.css"

import Frontend from "./Frontend"
import Backend from "./Backend"

function Skills() {
    return (
        <section className="skills section" id='skills'>
            <h2 className="section__title">Ferramentas e Tecnologias</h2>
            <span className='section__subtitle'>Conheça algumas das minhas ferramentas e tecnologias que utilizo durante
            o desenvolvimento de projetos.</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills