import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { FaArrowRight, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { LuLoader, LuMail, LuSend } from 'react-icons/lu';
import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Email enviado com sucesso!');
          formRef.current?.reset();
        },
        (error) => {
          toast.error('Erro ao enviar email!');
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="p-4 flex lg:w-4/5 mx-auto flex-col gap-6" id="contact">
      <h1 className="text-3xl font-bold lg:w-full w-4/5 mx-auto">Contato</h1>
      <p className="text-zinc-200 lg:w-full w-4/5 mx-auto text-left">
        Entre em contato hoje mesmo para discutirmos seu projeto!
      </p>
      <div className="flex flex-col pt-12 lg:flex-row justify-around gap-6">
        <div className="flex flex-col gap-6 w-full lg:w-1/4">
          <Card className="bg-[#63666b31] p-6 flex gap-2 text-sm flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#63666b41]">
            <div className="bg-[#63666b46] p-3 rounded-full mb-2">
              <LuMail className="text-3xl text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Email</p>
              <span className="text-zinc-200">hugo.cicillini@hotmail.com</span>
            </div>
            <a
              href="mailto:hugo.cicillini@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-200 bg-[#63666b36] rounded-md p-2 mt-2 hover:bg-[#63666b46] transition-all w-full justify-center"
            >
              Fale comigo{' '}
              <FaArrowRight
                size={12}
                className="hover:translate-x-1 transition group-hover:translate-x-1"
              />
            </a>
          </Card>

          <Card className="bg-[#63666b31] p-6 flex gap-2 text-sm flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#63666b41]">
            <div className="bg-[#63666b46] p-3 rounded-full mb-2">
              <FaLinkedin className="text-3xl text-white" />
            </div>
            <div>
              <p className="text-white font-medium">LinkedIn</p>
              <span className="text-zinc-200">Hugo Cicillini</span>
            </div>
            <a
              href="https://www.linkedin.com/in/hugocicillini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-200 bg-[#63666b36] rounded-md p-2 mt-2 hover:bg-[#63666b46] transition-all w-full justify-center"
            >
              Fale comigo{' '}
              <FaArrowRight
                size={12}
                className="hover:translate-x-1 transition group-hover:translate-x-1"
              />
            </a>
          </Card>

          <Card className="bg-[#63666b31] p-6 flex gap-2 text-sm flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#63666b41]">
            <div className="bg-[#63666b46] p-3 rounded-full mb-2">
              <FaInstagram className="text-3xl text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Instagram</p>
              <span className="text-zinc-200">hugocicillini</span>
            </div>
            <a
              href="https://www.instagram.com/hugocicillini/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-200 bg-[#63666b36] rounded-md p-2 mt-2 hover:bg-[#63666b46] transition-all w-full justify-center"
            >
              Fale comigo{' '}
              <FaArrowRight
                size={12}
                className="hover:translate-x-1 transition group-hover:translate-x-1"
              />
            </a>
          </Card>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full h-fit lg:w-1/2 sm:p-6 mt-4 lg:mt-0 bg-[#63666b31] rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-6 text-white">
            Envie sua mensagem
          </h2>
          <div className="flex flex-col gap-6">
            <div className="relative">
              <Label className="mb-2 font-medium" htmlFor="name">
                Nome
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                className="py-5 bg-[#63666b36] border-none focus-visible:ring-1 focus-visible:ring-white/50"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="relative">
              <Label className="mb-2 font-medium" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                className="py-5 bg-[#63666b36] border-none focus-visible:ring-1 focus-visible:ring-white/50"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="relative">
              <Label className="mb-2 font-medium" htmlFor="message">
                Mensagem
              </Label>
              <Textarea
                id="message"
                name="message"
                className="min-h-32 bg-[#63666b36] border-none focus-visible:ring-1 focus-visible:ring-white/50"
                placeholder="Escreva sua mensagem"
                required
              />
            </div>

            <Button
              type="submit"
              className="cursor-pointer bg-zinc-200 hover:bg-zinc-200 text-gray-800"
              variant={'secondary'}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Enviando...
                  <LuLoader className="animate-spin" />
                </>
              ) : (
                <>
                  Enviar <LuSend />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
