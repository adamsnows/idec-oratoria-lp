import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="h-[70px] border-b w-full border-accent flex justify-center items-center">
        <img src="/idec/logo-light.png" alt="logo" className="w-[200px]" />
      </div>
      <div className="flex flex-col justify-center items-center text-center container">
        <h1 className="text-4xl font-bold">FORMAÇÃO DE</h1>
        <h1 className="text-4xl font-bold text-accent">
          ESPECIALISTA COMPORTAMENTAL
        </h1>
        <div className="my-10 flex flex-col gap-2">
          <span className="text-sm">
            Reconhecida pelo MEC, alcance seus objetivos e desbloqueie seu
            potencial máximo.
          </span>
          <span className="text-sm font-bold">
            Certificado Internacional em 4 dias!
          </span>
        </div>
        <div className="border border-accent rounded-full flex gap-4 items-center justify-center p-6">
          <FaCalendarCheck className="text-accent" />
          <span className="text-sm">20 à 23 de Fevereiro de 2025</span>
        </div>
        <div className="border-2 border-accent w-full h-[680px] rounded-lg relative mt-20 p-6">
          <img
            src="/selos/MEC_01.png"
            alt=""
            className="absolute -mt-16 -me-5 top-0 right-0 h-[100px] rotate-[10deg]"
          />
          <div className="flex flex-col mt-4">
            <span>Iniciar minha formação hoje!</span>
            <form
              action=""
              className="flex flex-col gap-4 mt-10 placeholder-[#a1afba]"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-start">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="rounded-lg py-3 placeholder-[#a1afba]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-start">
                  Telefone
                </label>
                <input
                  type="text"
                  placeholder="+55 DDD 00000-0000"
                  className="rounded-lg py-3 placeholder-[#a1afba]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-start">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Seu melhor e-mail"
                  className="rounded-lg py-3 placeholder-[#a1afba]"
                />
              </div>
              <button type="submit" className="p-3 rounded-full bg-green-600">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
