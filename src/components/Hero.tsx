import { LuCircleUserRound, LuFileUser } from 'react-icons/lu';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center gap-12 w-full p-8">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-6xl text-center font-bold lg:text-5xl">
            Hugo Cicillini
          </h1>
          <span className="relative pl-14 before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-white before:left-0 before:top-1/2">
            Full-Stack Developer
          </span>
          <div className="flex gap-4 mt-12">
            <Button
              variant={'secondary'}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/ProfileHugo.pdf';
                link.download = 'Currículo - Hugo.pdf';
                link.click();
              }}
              className="transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Baixar CV
              <LuFileUser className="inline-block ml-2" />
            </Button>
            <Button
              variant={'secondary'}
              onClick={() => {
                const contatoSection = document.getElementById('contact');
                if (contatoSection) {
                  contatoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Contato
              <LuCircleUserRound className="inline-block ml-2" />
            </Button>
          </div>
        </div>
        <img src="/perfil.png" alt="Perfil" className="animate-profile" />
      </div>
    </div>
  );
};

export default Hero;
