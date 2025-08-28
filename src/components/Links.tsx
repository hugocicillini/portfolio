import { LuInstagram, LuLinkedin, LuGithub, LuMail } from 'react-icons/lu';

const Data = [
  {
    id: 1,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/hugocicillini/',
    icon: <LuLinkedin size={24} />,
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/hugocicillini',
    icon: <LuGithub size={24} />,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/hugocicillini/',
    icon: <LuInstagram size={24} />,
  },

  {
    id: 4,
    name: 'Mail',
    url: 'mailto:hugo.cicillini@gmail.com',
    icon: <LuMail size={24} />,
  },
];

const Links = () => {
  return (
    <div className="flex gap-4 lg:mr-12">
      {Data.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Links;
