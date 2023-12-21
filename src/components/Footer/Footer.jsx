import React from 'react'
import "./Footer.css"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">hCicillini</h1>

                <ul className='footer__list'>
                    <li>
                        <a href="#home" className='footer__link'>Home</a>
                    </li>

                    <li>
                        <a href="#about" className='footer__link'>Sobre Mim</a>
                    </li>

                    <li>
                        <a href="#projects" className='footer__link'>Projetos</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/hugocicillini" className='footer__social-link' target='_blank'>
                        <FaLinkedin />
                    </a>

                    <a href="https://www.instagram.com/hugocicillini" className='footer__social-link' target='_blank'>
                        <FaInstagram />
                    </a>

                    <a href="https://www.github.com/hugocicillini" className='footer__social-link' target='_blank'>
                        <FaGithub />
                    </a>
                </div>

                <span className='footer__copy'>&#169;Hugo Cicillini. Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer