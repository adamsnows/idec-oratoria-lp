import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCancelPresentation } from "react-icons/md";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative flex gap-[40px] flex-col h-[inherit] text-center xl:text-left overflow-x-hidden mt-14"
      >
        <div className="container mx-auto p-3 pt-[28px] flex flex-col items-start xl:flex-row gap-12 xl:gap-6 flex-1">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex w-full xl:max-w-[48%] justify-center xl:justify-start"
          >
            <Image
              src={"/person-with-arrow.webp"}
              width={500}
              height={200}
              alt=""
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex md:min-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex-1 flex flex-col justify-start gap-6 text-start">
              <h2 className="flex flex-col h3-base font-light z-10 text-start items-start">
                Para quem é o SMVZap:
              </h2>

              <ul className="flex mt-1 flex-col info text-start items-start list-disc marker:text-accent pl-5">
                <li>
                  Empresários que perdem vendas por não terem controle dos seus
                  leads.
                </li>

                <li>
                  Empresários que gastam milhares de reais com tráfego pago.
                </li>

                <li>
                  Empresários que precisam contratar mais gente para organizar o
                  seu processo de vendas.
                </li>

                <li>
                  E para você vendedor que quer realizar os seus sonhos mas luta
                  contra a falta de dinheiro.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto p-3 pt-[28px] flex flex-col-reverse items-start xl:flex-row gap-12 xl:gap-6 flex-1">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex md:min-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex-1 flex flex-col justify-start gap-6 text-start">
              <h2 className="flex flex-col h3-base font-light z-10 text-start items-start">
                Isso não é um CRM tradicional.
              </h2>

              <ul className="flex gap-2 mt-1 flex-col info text-start items-start text-base list-disc marker:text-accent pl-5">
                <li>
                  Não é só uma plataforma de vendas, mas você poderá bater a
                  meta de 1 mês em 1 semana.
                </li>

                <li>
                  Não é só uma plataforma de disparos em massa, mas muitos
                  clientes aumentaram suas vendas por meio dos disparos de
                  mensagens para seus contatos.
                </li>

                <li>
                  Não é só um controle de contatos, mas você pode conseguir
                  organizar detalhadamente os contatos de acordo com cada etapa
                  da negociação.
                </li>

                <li>
                  Não é só um sistema de agendamento de reunião, mas você
                  conseguirá agendar mensagens para enviar mensalmente e cobrar
                  os seus clientes.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex w-full xl:max-w-[48%] justify-center xl:justify-end"
          >
            <Image
              src={"/big-rocket.webp"}
              width={500}
              height={200}
              alt=""
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
