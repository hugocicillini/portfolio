import React from 'react';

import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiBootstrap, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";

import apiCountries from "../../assets/api-countries.png";
import jobFinder from "../../assets/job-finder.png"
import virtualStore from "../../assets/virtual-store.png"
import jsOop from "../../assets/js-poo.png"
import toDoList from "../../assets/to-do-js.png"

export const Data = [
    {
        name: 'API Countries',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: apiCountries,
        link: 'https://hugocicillini.github.io/rest-countries-api/'
    },
    {
        name: 'Vagas de Emprego',
        technologies: [<IoLogoReact />, <SiTailwindcss />],
        image: jobFinder,
        link: 'https://job-finder-hugo.netlify.app/'
    },
    {
        name: 'Loja Virtual',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />, <SiBootstrap />, <SiPhp />, <SiMysql />],
        image: virtualStore,
        link: 'https://github.com/hugocicillini/virtual-store'
    },
    {
        name: 'To-Do List',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: toDoList,
        link: 'https://hugocicillini.github.io/todo-list/'
    },
    {
        name: 'CRUD - Produtos',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: jsOop,
        link: 'https://hugocicillini.github.io/js-poo/'
    },
];

export default Data
