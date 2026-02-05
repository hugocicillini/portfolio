import { CircleUserRound, FileUser } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center gap-12 w-full p-8">
        <div className="flex flex-col gap-4 justify-center items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight">
            <span className="block">Hugo</span>
            <span className="block text-white/80">Cicillini</span>
          </h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-px w-10 bg-white/60" />
            <span>Desenvolvedor Full-Stack</span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs">
            {["JavaScript", "TypeScript", "React", "Node.js", ".NET"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 px-3 py-1 text-white/80"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <div className="flex gap-4 mt-8">
            <Button
              variant={"secondary"}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/ProfileHugo.pdf";
                link.download = "Currículo - Hugo.pdf";
                link.click();
              }}
              className="transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Baixar CV
              <FileUser className="inline-block ml-2" />
            </Button>
            <Button
              variant={"secondary"}
              onClick={() => {
                const contatoSection = document.getElementById("contact");
                if (contatoSection) {
                  contatoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Contato
              <CircleUserRound className="inline-block ml-2" />
            </Button>
          </div>
        </div>
        <img src="/perfil.png" alt="Perfil" className="animate-profile" />
      </div>
    </div>
  );
};

export default Hero;
