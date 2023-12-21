import React from 'react'

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Social() {
    return (
        <div className='home__social'>
            <a href="https://www.linkedin.com/in/hugocicillini" className='home__social-icon' target='_blank'>
                <FaLinkedin />
            </a>
            <a href="https://github.com/hugocicillini" className='home__social-icon' target='_blank'>
                <FaGithub />
            </a>
            <a href="https://instagram.com/hugocicillini" className='home__social-icon' target='_blank'>
                <FaInstagram />
            </a>
        </div>
    )
}

export default Social