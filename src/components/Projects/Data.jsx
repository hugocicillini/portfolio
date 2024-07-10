import React from 'react';

import { BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiBootstrap, SiClerk, SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";
import { TbAuth2Fa } from 'react-icons/tb';

import apiCountries2 from "../../assets/api-countries-2.png";
import apiCountries from "../../assets/api-countries.png";
import bookManagement2 from "../../assets/gerenciamento-livro-2.png";
import bookManagement from "../../assets/gerenciamento-livro.png";
import jobFinder2 from "../../assets/job-finder-2.png";
import jobFinder from "../../assets/job-finder.png";
import jsOop from "../../assets/js-poo.png";
import nextAuth2 from "../../assets/next-auth-2.png";
import nextAuth3 from "../../assets/next-auth-3.png";
import nextAuth from "../../assets/next-auth.png";
import pokedex from "../../assets/pokedex.png";
import socialMedia from "../../assets/social-media-2.png";
import socialMedia2 from "../../assets/social-media-3.png";
import socialMedia3 from "../../assets/social-media.png";
import toDoList from "../../assets/to-do-js.png";

export const Data = [
    {
        name: 'Gerenciamento de Livros',
        technologies: [<IoLogoReact />, <FaNodeJs />, <SiTailwindcss />, <SiBootstrap />, <BiLogoMongodb />],
        image: [bookManagement, bookManagement2],
        link: 'https://github.com/hugocicillini/book-management'
    },
    {
        name: 'Social Media',
        technologies: [<SiNextdotjs />, <IoLogoReact />, <BiLogoTypescript />, <SiPrisma />, <SiClerk />, <BiLogoPostgresql />],
        image: [socialMedia, socialMedia2, socialMedia3],
        link: 'https://github.com/hugocicillini/social-media'
    },
    {
        name: 'Autenticação NextJS',
        technologies: [<SiNextdotjs />, <IoLogoReact />, <BiLogoTypescript />, <FaNodeJs />, <TbAuth2Fa />, <BiLogoPostgresql />],
        image: [nextAuth, nextAuth2, nextAuth3],
        link: 'https://github.com/hugocicillini/next-auth'
    },
    {
        name: 'API Countries',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: [apiCountries, apiCountries2],
        link: 'https://hugocicillini.github.io/rest-countries-api/'
    },
    {
        name: 'Pokédex API',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: [pokedex],
        link: 'https://hugocicillini.github.io/pokedex-api/'
    },
    {
        name: 'Vagas de Emprego',
        technologies: [<IoLogoReact />, <SiTailwindcss />],
        image: [jobFinder, jobFinder2],
        link: 'https://job-finder-hugo.netlify.app/'
    },
    {
        name: 'To-Do List',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: [toDoList],
        link: 'https://hugocicillini.github.io/todo-list/'
    },
    {
        name: 'CRUD - Produtos',
        technologies: [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
        image: [jsOop],
        link: 'https://hugocicillini.github.io/js-poo/'
    },
];

export default Data
