import React, { useState } from "react";
import "./Header.css"

import { FaHome, FaUser, FaFile, FaLocationArrow, FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        this.scrollY >= 80 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header")
    })

    const [Toggle, showMenu] = useState(false)

    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">hCicillini</a>

                <div className={Toggle ? "nav__menu - show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <FaHome className="nav__icon" /> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <FaUser className="nav__icon" /> Sobre Mim
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <FaFile className="nav__icon" /> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <FaComputer className="nav__icon" /> Projetos
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <FaLocationArrow className="nav__icon" /> Contato
                            </a>
                        </li>
                    </ul>

                    <FaTimes className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <AiOutlineAppstore />
                </div>
            </nav>
        </header>
    );
}

export default Header;