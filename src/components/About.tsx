const About = () => {
  return (
    <div className="bg-[#63666b31] lg:w-3/4 md:rounded-xl mx-auto p-6 flex flex-col gap-8">
      <p className="leading-relaxed text-left text-zinc-200">
        Olá! Sou o Hugo, um profissional apaixonado por desafios e pela evolução
        contínua. Minha trajetória é marcada pela dedicação, visão estratégica e
        um compromisso inabalável com a excelência. Cada projeto é uma
        oportunidade de transformar ideias em soluções inovadoras, sempre com
        foco em impacto real e aprimoramento constante. Meu objetivo é ir além
        do código, criando experiências que fazem a diferença.
      </p>
      <div className="flex gap-8 justify-around text-center">
        <div>
          <span className="text-3xl font-extrabold text-white">30</span>
          <span className="font-bold text-white">+</span>
          <p className="text-sm text-zinc-400">Projetos concluídos</p>
        </div>
        <div>
          <span className="text-3xl font-extrabold text-white">3</span>
          <span className="font-bold text-white">+</span>
          <p className="text-sm text-zinc-400">Anos de experiência</p>
        </div>
      </div>
    </div>
  );
};

export default About;
