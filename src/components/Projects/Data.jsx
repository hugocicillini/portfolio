import React from 'react';

import { BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiBootstrap, SiMysql, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";


import apiCountries from "../../assets/api-countries.png";
import jobFinder from "../../assets/job-finder.png";
import jsOop from "../../assets/js-poo.png";
import nextAuth from "../../assets/next-auth.png";
import toDoList from "../../assets/to-do-js.png";
import virtualStore from "../../assets/virtual-store.png";
import bookManagement from "../../assets/gerenciamento-livro.png";

export const Data = [
    {
        name: 'Gerenciamento de Livros',
        technologies: [<IoLogoReact />, <FaNodeJs />,<SiTailwindcss />, <SiBootstrap />, <BiLogoMongodb />],
        image: bookManagement,
        link: 'https://github.com/hugocicillini/book-management'
    },
    {
        name: 'Autenticação NextJS',
        technologies: [<SiNextdotjs />, <IoLogoReact />, <BiLogoTypescript />, <FaNodeJs />, <BiLogoPostgresql />],
        image: nextAuth,
        link: 'https://next-auth-sigma-nine.vercel.app/'
    },
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
