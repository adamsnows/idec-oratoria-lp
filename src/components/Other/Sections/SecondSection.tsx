"use client";

import { useState } from "react";
import ThirdSection from "./ThirdSection";

const SecondSection = () => {
  // Estado para controlar o clique nos cards
  const [clickedCard, setClickedCard] = useState<1 | 2 | 3>(1);

  // Função para lidar com o clique no card
  const handleClick = (cardId: 1 | 2 | 3) => {
    setClickedCard(cardId); // Marcar o card clicado
  };

  return (
    <>
      <div
        className="relative w-full tracking-widest bg-black text-black text-start"
        id="formation"
      >
        <div className="container mt-20 z-[10]">
          {/* <div className="border-accent w-full mb-3 border-b-2 -ms-10" /> */}
          <span className="text-accent text-4xl font-ltWave">
            NOSSAS FORMAÇÕES
          </span>
        </div>
        <div className="container mx-auto mt-14 z-[20] py-[100px]">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 z-[10] justify-items-center gap-y-[100px] xl:gap-y-0">
            {/* Card 1 */}
            <div
              onClick={() => handleClick(1)}
              className={`rounded-2xl ${
                clickedCard === 1 ? "bg-white" : "bg-accent"
              } transition duration-200 h-[400px] w-[380px] border-accent border-2 cursor-pointer relative z-[10]`}
            >
              <div className="flex flex-col gap-4 p-10 text-base">
                <span className="text-xl font-ltWave">
                  FORMAÇÃO <br />
                  EM <strong>ESPECIALISTA COMPORTAMENTAL</strong>
                </span>
                <span>Modalidade: Presencial e online</span>
                <span>Carga horária: 100 horas</span>
                <span>
                  com <strong>Rogério Vale</strong>, Dra. Érica Belon, Ângelo
                  Henrique e Marcelo Lacerda
                </span>
              </div>
              {/* Selo que aparece ao clicar */}
              {clickedCard === 1 && (
                <img
                  src="/selos/MEC_01.png"
                  alt="Selo MEC"
                  className="absolute bottom-[-100px] left-[20px] h-[200px] w-[200px] z-[20] object-cover opacity-100 transition-opacity duration-300"
                />
              )}
            </div>

            {/* Card 2 */}
            <div
              onClick={() => handleClick(2)}
              className={`rounded-2xl ${
                clickedCard === 2 ? "bg-white" : "bg-accent"
              } transition duration-200 h-[400px] w-[380px] border-accent border-2 cursor-pointer relative z-[10]`}
            >
              <div className="flex flex-col gap-4 p-10 text-base">
                <span className="text-xl font-ltWave">
                  FORMAÇÃO <br />
                  EM{" "}
                  <strong>
                    INTELIGÊNCIA ARTIFICIAL PARA GESTORES E NEGÓCIOS
                  </strong>
                </span>
                <span>Modalidade: Presencial e online</span>
                <span>Carga horária: 30 horas</span>
                <span>
                  com <strong>Kharina Farias e especialistas convidados</strong>
                </span>
              </div>
              {/* Selo que aparece ao clicar */}
              {clickedCard === 2 && (
                <img
                  src="/selos/MEC_01.png"
                  alt="Selo MEC"
                  className="absolute bottom-[-100px] left-[20px] h-[200px] w-[200px] z-[20] object-cover opacity-100 transition-opacity duration-300"
                />
              )}
            </div>

            {/* Card 3 */}
            <div
              onClick={() => handleClick(3)}
              className={`rounded-2xl ${
                clickedCard === 3 ? "bg-white" : "bg-accent"
              } transition duration-200 h-[400px] w-[380px] border-accent border-2 cursor-pointer relative z-[10]`}
            >
              <div className="flex flex-col gap-4 p-10 text-base">
                <span className="text-xl font-ltWave">
                  FORMAÇÃO <br />
                  EM <strong>COMUNICAÇÃO E ORATÓRIA</strong>
                </span>
                <span>Modalidade: Presencial e online</span>
                <span>Carga horária: 30 horas</span>
                <span>
                  com <strong>Marcelo Lacerda</strong> e especialistas
                  convidados
                </span>
              </div>
              {/* Selo que aparece ao clicar */}
              {clickedCard === 3 && (
                <img
                  src="/selos/MEC_01.png"
                  alt="Selo MEC"
                  className="absolute bottom-[-100px] left-[20px] h-[200px] w-[200px] z-[20] object-cover opacity-100 transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        </div>

        <img
          src="/patterns/pattern_parallax.png"
          alt="Pattern"
          className="absolute bottom-0 left-0 w-full object-cover z-[0] h-[200px]"
        />
      </div>
      <ThirdSection activeCard={clickedCard} />
    </>
  );
};

export default SecondSection;
