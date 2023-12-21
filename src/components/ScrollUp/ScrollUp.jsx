import React from 'react'
import "./ScrollUp.css"

import { FaArrowUp } from "react-icons/fa"

function ScrollUp() {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        this.scrollY >= 560 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
    })
    return (
        <a href="#" className="scrollup">
            <FaArrowUp className='scrollup__icon' />
        </a>
    )
}

export default ScrollUp