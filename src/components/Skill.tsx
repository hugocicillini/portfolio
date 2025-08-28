import React from 'react';

import { BiLogoMongodb } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa6';
import {
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const Data = [
  {
    id: 1,
    name: 'ReactJS',
    img: <FaReact className="p-1" />,
    description: 'Biblioteca',
  },
  {
    id: 2,
    name: 'TypeScript',
    img: <SiTypescript />,
    description: 'Syntax JavaScript',
  },
  {
    id: 3,
    name: 'NextJS',
    img: <SiNextdotjs />,
    description: 'React Framework',
  },
  {
    id: 4,
    name: 'ViteJS',
    img: <SiVite />,
    description: 'Build Tool',
  },
  { 
    id: 5,
    name: 'NodeJS',
    img: <FaNodeJs />,
    description: 'JavaScript Server',
  },
  {
    id: 6,
    name: 'ExpressJS',
    img: <SiExpress />,
    description: 'Node Framework',
  },
  {
    id: 7,
    name: 'Prisma',
    img: <SiPrisma />,
    description: 'ORM',
  },
  {
    id: 8,
    name: 'MongoDB',
    img: <BiLogoMongodb />,
    description: 'NoSQL Database',
  },
];

const Skill = () => {
  return (
    <div className="p-4 flex w-4/5 mx-auto flex-col gap-6 pt-12">
      <h1 className="text-3xl font-bold">Ferramentas e Tecnologias</h1>
      <p className="text-zinc-200">
        Conheça algumas das minhas ferramentas e tecnologias que utilizo durante
        o desenvolvimento de projetos.
      </p>
      <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-2 pt-6">
        {Data.map((item) => (
          <div
            key={item.id}
            className="border-[#63666b] border-2 mt-4 flex gap-4 p-2.5 rounded-md"
          >
            <div className="text-4xl my-auto bg-[#63666b31] rounded-md p-1 hover:scale-110 transition duration-300">
              {React.cloneElement(item.img, { className: 'p-1 w-8 h-8' })}
            </div>
            <div>
              <p className="font-bold text-sm">{item.name}</p>
              <span className="text-xs text-zinc-400">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
