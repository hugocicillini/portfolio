import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Data = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/hugocicillini/",
    icon: <Linkedin size={24} />,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/hugocicillini",
    icon: <Github size={24} />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/hugocicillini/",
    icon: <Instagram size={24} />,
  },

  {
    id: 4,
    name: "Mail",
    url: "mailto:hugo.cicillini@gmail.com",
    icon: <Mail size={24} />,
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
