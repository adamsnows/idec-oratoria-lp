import Link from "next/link";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaArrowDown, FaCheckDouble } from "react-icons/fa";
import YouTube from "react-youtube";

const Hero: React.FC = () => {
  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    topElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col relative overflow-hidden" id="top">
      <div className="absolute z-0 flex justify-center items-center md:min-h-screen">
        <img
          src="/banners/mobile/mob_02.jpg"
          alt=""
          className="h-[1350px] object-cover md:hidden"
        />
        <img
          src="/banners/4k/banner_2.jpg"
          alt=""
          className="w-full h-screen object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
      </div>

      <div className="absolute top-0 h-[70px] border-b w-full border-accent flex justify-center items-center z-10 bg-black">
        <img src="/idec/logo-light.png" alt="logo" className="w-[200px] " />
      </div>
      <div className="flex flex-col md:flex-row md:gap-20 justify-center items-center text-center container z-10 my-5 md:min-h-screen h-full mt-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">FORMAÇÃO DE</h1>
          <h1 className="text-4xl font-bold text-accent">
            COMUNICAÇÃO E ORATÓRIA
          </h1>
          <div className="my-10 flex flex-col gap-2">
            <span className="text-sm">
              Reconhecida pelo MEC, alcance seus objetivos e desbloqueie seu
              potencial máximo.
            </span>

            <span className="text-sm ">
              Desperte o comunicador de alto impacto que existe em você!
            </span>
            <span className="text-sm font-bold">
              Certificado Internacional em 4 dias
            </span>

            <span className="text-sm font-bold">
              Escolha abaixo a melhor opção!
            </span>

            <Link
              className="border border-accent rounded-full flex gap-4 items-center justify-center p-6 animate-pulse hover:bg-accent duration-200 group"
              href="https://sun.eduzz.com/E05ZGOVK9X"
              target="_blank"
            >
              <FaCalendarCheck className="text-accent group-hover:text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm">22 e 23 de Fevereiro de 2025</span>
                <span className="text-sm font-bold">EM MARINGÁ</span>
              </div>
            </Link>
            <Link
              className="border border-accent rounded-full flex gap-4 items-center justify-center p-6 animate-pulse hover:bg-accent duration-200 group"
              href="https://sun.eduzz.com/VWG37P6V07"
              target="_blank"
            >
              <FaCalendarCheck className="text-accent group-hover:text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm">14 e 15 de Março de 2025</span>
                <span className="text-sm font-bold">EM ALPHAVILLE</span>
              </div>
            </Link>
            <Link
              className="border border-accent rounded-full flex gap-4 items-center justify-center p-6 animate-pulse hover:bg-accent duration-200 group"
              href="https://sun.eduzz.com/KW83P7DO01"
              target="_blank"
            >
              <FaCalendarCheck className="text-accent group-hover:text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm">29 e 30 de Março de 2025</span>
                <span className="text-sm font-bold">EM SALVADOR</span>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="border-2 border-accent w-full rounded-lg relative mt-10 xl:mt-20 p-6 backdrop-blur-md mb-20">
          <img
            src="/selos/MEC_01.png"
            alt=""
            className="absolute -mt-16 -me-5 top-0 right-0 h-[100px] xl:h-[150px] rotate-[10deg]"
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
            <span className="text-xs text-gray-500 mt-5">
              SEUS DADOS ESTÃO 100% PROTEGIDOS
            </span>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col gap-2 bg-black w-full h-full z-10 container text-center py-10 ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10 xl:-mt-20">
          <img
            src="/banners/formacao/oratoria.png"
            alt=""
            className="rounded-lg"
          />
          <img
            src="/banners/formacao/oratoria-2.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white w-full h-full z-10  text-center py-5 -mt-10 md:py-20">
        <div className="container">
          <h1 className="text-3xl font-bold text-accent uppercase">
            Por que você precisa desta formação?
          </h1>
          <span className="text-base text-gray-900">
            A comunicação é a habilidade número 1 para o sucesso profissional e
            pessoal. Quer se destacar em sua carreira, conquistar a confiança de
            grandes audiências e transmitir suas ideias com clareza e impacto?{" "}
            <br />A Formação em Comunicação e Oratória do IDEC é o caminho para
            transformar sua voz na sua maior ferramenta de influência.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-black w-full h-full z-10 container text-center py-10 ">
        <h1 className="text-3xl font-bold text-accent">
          PARA QUEM É NOSSA FORMAÇÃO?
        </h1>
        <div className="mx-auto border p-4 rounded-full my-5 border-accent animate-bounce">
          <FaArrowDown className="text-4xl mx-auto" />
        </div>
        <div className="border-b border-accent w-full" />
        <div className="f gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          <div className="flex gap-5 items-center text-start">
            <FaCheckDouble className="text-accent text-2xl flex-shrink-0" />
            <span className="text-sm ">
              Gestores e líderes que precisam se comunicar de forma clara e
              assertiva.
            </span>
          </div>
          <div className="flex gap-5 items-center text-start">
            <FaCheckDouble className="text-accent text-2xl flex-shrink-0" />
            <span className="text-sm ">
              Professores, palestrantes e treinadores que desejam causar impacto
              em suas audiências.
            </span>
          </div>
          <div className="flex gap-5 items-center text-start">
            <FaCheckDouble className="text-accent text-2xl flex-shrink-0" />
            <span className="text-sm ">
              Empreendedores que precisam vender suas ideias e inspirar seus
              times.
            </span>
          </div>
          <div className="flex gap-5 items-center text-start">
            <FaCheckDouble className="text-accent text-2xl flex-shrink-0" />
            <span className="text-sm ">
              Profissionais de vendas que querem persuadir e negociar com
              excelência.
            </span>
          </div>
          <div className="flex gap-5 items-center text-start">
            <FaCheckDouble className="text-accent text-2xl flex-shrink-0" />
            <span className="text-sm ">
              Qualquer pessoa que deseja vencer o medo de falar em público e
              transmitir confiança.
            </span>
          </div>
        </div>
      </div>
      <div className="h-[40px] w-full bg-accent " />
      <h1 className="text-3xl font-bold text-accent text-center my-10">
        O QUE VOCÊ VAI APRENDER?
      </h1>
      <div className="container z-10 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 ">
        <div className="border border-lg rounded-lg p-10 border-[#3f3f3f] flex flex-col gap-4 bg-[#070707]">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-accent">
              Domine a arte de falar em público:
            </span>
            <div className="border-b border-[#3f3f3f] w-16 my-1"></div>
            <span className="text-sm text-gray-300">
              Técnicas práticas para estruturar discursos e apresentações que
              engajam e inspiram.
            </span>
          </div>
        </div>

        <div className="border border-lg rounded-lg p-10 border-[#3f3f3f] flex flex-col gap-4 bg-[#070707]">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-accent">
              Supere o medo de falar em público
            </span>
            <div className="border-b border-[#3f3f3f] w-16 my-1"></div>
            <span className="text-sm text-gray-300">
              Controle suas emoções e desenvolva confiança para enfrentar
              qualquer audiência.
            </span>
          </div>
        </div>

        <div className="border border-lg rounded-lg p-10 border-[#3f3f3f] flex flex-col gap-4 bg-[#070707]">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-accent">
              Melhore sua comunicação verbal e não verbal
            </span>
            <div className="border-b border-[#3f3f3f] w-16 my-1"></div>
            <span className="text-sm text-gray-300">
              Aprenda a usar gestos, postura e entonação para potencializar sua
              mensagem.
            </span>
          </div>
        </div>

        <div className="border border-lg rounded-lg p-10 border-[#3f3f3f] flex flex-col gap-4 bg-[#070707]">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-accent">
              Persuadir e influenciar
            </span>
            <div className="border-b border-[#3f3f3f] w-16 my-1 "></div>
            <span className="text-sm text-gray-300">
              Descubra como comunicar ideias com clareza e convencer diferentes
              tipos de públicos.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full border-b border-accent pb-10">
        <button
          className="bg-accent text-black  rounded-full text-base font-bold py-4 px-4"
          onClick={scrollToTop}
        >
          INICIAR MINHA JORNADA AGORA!
        </button>
      </div>

      <div className="bg-[#0a0a0a]  w-full">
        <h1 className="text-3xl font-bold text-center text-white mt-10">
          DEPOIMENTOS
        </h1>
        <div className="container grid grid-cols-1 gap-2 py-10">
          <YouTube
            videoId={"Pgn7CwIjHvU"}
            className={"w-full h-full shadow-md shadow-black/30 z-10"}
            iframeClassName={"w-full h-full"}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="mx-auto my-5 bg-accent text-black p-3 rounded-full text-base font-bold py-4 "
            onClick={scrollToTop}
          >
            INICIAR MINHA JORNADA AGORA!
          </button>
        </div>
      </div>
      <div className="h-[40px] w-full bg-accent" />

      <div className="h-[850px] md:h-auto relative">
        <img
          src="/unidades/alphvl_1.jpg"
          alt=""
          className="w-full object-cover h-full md:max-h-[550px]"
        />
        <div className="absolute inset-0 bg-black/85 md:bg-black/50 flex flex-col items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <div className="font-bold text-2xl text-center">
              <h1 className="text-accent mb-5">TURMA MAIS PRÓXIMA</h1>
              <h1>Alphaville - São Paulo</h1>
              <h1>Office Shopping Tamboré</h1>
              <div className="flex flex-col gap-4 text-2xl font-bold text-center py-10">
                <span className="bg-accent rounded-full py-3 w-full text-lg font-normal text-black">
                  Turma presencial
                </span>
                <span className="bg-accent rounded-full py-3 w-full text-lg font-normal text-black">
                  20 à 23 de Fevereiro de 2025
                </span>
                <button
                  className="bg-accent text-black p-3 rounded-full text-base font-bold py-4"
                  onClick={scrollToTop}
                >
                  INICIAR MINHA JORNADA AGORA!
                </button>
              </div>
            </div>

            <div className="rounded-lg container w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25306.193300391653!2d-46.834557!3d-23.50635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01000bfba25d%3A0xc31447c548ca2f19!2sOffice%20Shopping%20Tambor%C3%A9!5e1!3m2!1spt-BR!2sus!4v1734897458319!5m2!1spt-BR!2sus"
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-accent text-2xl text-center uppercase font-bold">
              POR QUE O IDEC É A SUA MELHOR ESCOLHA?
            </h1>
            <span className="text-base text-gray-900 text-center">
              O <span className="font-bold">IDEC</span> é uma referência
              nacional e internacional em desenvolvimento humano, com unidades
              em Alphaville – São Paulo, Maringá – Paraná, Salvador – Bahia e
              Lisboa – Portugal. <br />
              Nossos professores são especialistas no desenvolvimento
              comportamental, e nossa metodologia já transformou a vida de
              milhares de alunos, preparando-os para liderar e inspirar no
              mercado global.
            </span>

            <button
              className="bg-accent text-black p-3 rounded-full text-base font-bold py-4 mt-5 max-w-[300px] mx-auto"
              onClick={scrollToTop}
            >
              INICIAR MINHA JORNADA AGORA!
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black">
        <h1 className="text-3xl font-bold text-center text-white container mt-10">
          CONHEÇA OS PRINCIPAIS OBJETIVOS DA NOSSA FORMAÇÃO!
        </h1>
        <div className="container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          <div className="min-h-[215px] flex flex-col gap-4 border border-accent rounded-lg p-10 bg-[#0d0d0d]">
            <img
              src="/placeholders/head.png"
              alt=""
              className="h-[45px] w-[45px]"
            />
            <span className="text-base text-gray-300">
              Aumentar a autoconsciência e a autoconfiança
            </span>
          </div>
          <div className="min-h-[215px] flex flex-col gap-4 border border-accent rounded-lg p-10 bg-[#0d0d0d]">
            <img
              src="/placeholders/graphics.png"
              alt=""
              className="h-[45px] w-[45px]"
            />
            <span className="text-base text-gray-300">
              Desenvolver habilidades e competências
            </span>
          </div>
          <div className="min-h-[215px] flex flex-col gap-4 border border-accent rounded-lg p-10 bg-[#0d0d0d]">
            <img
              src="/placeholders/rounded.png"
              alt=""
              className="h-[45px] w-[45px]"
            />
            <span className="text-base text-gray-300">
              Melhorar a comunicação e o relacionamento interpessoal
            </span>
          </div>
          <div className="min-h-[215px] flex flex-col gap-4 border border-accent rounded-lg p-10 bg-[#0d0d0d]">
            <img
              src="/placeholders/target.png"
              alt=""
              className="h-[45px] w-[45px]"
            />
            <span className="text-base text-gray-300">
              Potencializar o foco e a motivação
            </span>
          </div>
          <div className="min-h-[215px] flex flex-col gap-4 border border-accent rounded-lg p-10 bg-[#0d0d0d]">
            <img
              src="/placeholders/stars.png"
              alt=""
              className="h-[45px] w-[45px]"
            />
            <span className="text-base text-gray-300">
              Ampliar as possibilidades e as oportunidades, gerando mudanças
              positivas e duradouras
            </span>
          </div>
        </div>
      </div> */}
      <div className="flex relative">
        <img
          src="/idec/temporario.jpg"
          alt=""
          className="w-full h-full object-cover object-top max-h-[750px] md:hidden"
        />
        <img
          src="/banners/4k/banner_2.jpg"
          alt=""
          className="w-full h-full object-cover object-top max-h-[750px] hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black flex flex-col gap-4 justify-center items-center text-center">
          <div className="container">
            <h1 className="text-3xl font-bold text-white mt-20">
              GARANTA SUA VAGA AGORA MESMO!
            </h1>
            <div className="flex flex-col">
              <span>
                As vagas são limitadas e costumam esgotar rapidamente. Não perca
                esta oportunidade de transformar sua vida e sua carreira.
              </span>
              <span className="font-bold">Extraia o melhor de si mesmo.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center container py-10">
        <img src="/idec/logo-light.png" alt="" className="w-[200px]" />
        <div className="my-5 border-b border-accent w-full" />
        <div className="flex flex-col gap-2 text-xs text-center">
          <span>Copyright © 2023 IDEC. Todos os direitos reservados.</span>
          <span>CNPJ 10.333.073/0001-59</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
