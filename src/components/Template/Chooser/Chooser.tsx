import { motion } from "framer-motion";

import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CiSquareCheck } from "react-icons/ci";
import { MdCancelPresentation } from "react-icons/md";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Chooser = () => {
  return (
    <>
      <div
        id="chooser"
        className={`flex text-center xl:text-left flex-col container mx-auto my-20`}
      >
        <div className=" flex flex-col  mb-6 xl:-mb-20 text-center">
          <h2 className="h2">
            Ainda tem dúvidas do por que escolher o{" "}
            <span className="text-black bg-accent px-2">SMVZAP</span>?
          </h2>
          <p className="xl:mb-4 text-center mx-auto lg:mx-0">
            Comparar é a chave para uma escolha informada.{" "}
            <strong className="text-accent">
              Veja como o SMVZAP se destaca em recursos cruciais:
            </strong>
          </p>
        </div>
        <div className=" pb-16 xl:pb-3 flex flex-col gap-6 items-center text-start lg:flex-row flex-1 mt-24">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.2 }}
            className="shadow-zinc  overflow-hidden min-h-[300px] w-full lg:-me-10 bg-gradient-to-r from-[#222] to-black/10 "
          >
            <div className="p-10 flex flex-col justify-center items-center">
              <span className="text-3xl">Outras ferramentas</span>
              <div className="mt-5 flex flex-col gap-4">
                <span className="flex items-center">
                  <MdCancelPresentation className="me-5 h-8 w-8 shrink-0" />
                  Interfaces complicadas, falta de visualização eficiente.
                </span>
                <span className="flex items-center pe-4">
                  <MdCancelPresentation className="me-5 h-8 w-8 shrink-0" />
                  Processos manuais para salvar contato, demandando tempo e
                  esforço constante.
                </span>
                <span className="flex items-center">
                  <MdCancelPresentation className="me-5 h-8 w-8 shrink-0 text" />
                  Informações confusas e de difícil entendimento e aprendizagem.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.2 }}
            className="shadow-zinc overflow-hidden min-h-[350px] w-full lg:-ms-10 bg-opacity-5 bg-gradient-to-r from-accent/70 to-black/50"
          >
            <div className="p-10 py-7 flex flex-col justify-center items-center">
              <Image
                src="/smv/smvzap.png"
                quality={100}
                height={150}
                width={150}
                alt="SMV Zap logo"
              />
              <div className="mt-5 flex flex-col gap-4">
                <span className="flex items-center">
                  <CiSquareCheck className="me-5 h-10 w-10 shrink-0" />
                  Interface amigável, com botões intuitivos, feito especialmente
                  para facilitar sua vida.
                </span>
                <span className="flex items-center">
                  <CiSquareCheck className="me-5 h-10 w-10 shrink-0" />
                  Processo automático de 1 clique - você salva os contatos dos
                  leads que chegam no WhatsApp.
                </span>
                <span className="flex items-center">
                  <CiSquareCheck className="me-5 h-10 w-10 shrink-0" />
                  Informações organizadas através de cartões móveis trazendo uma
                  visualização simplificada do CRM no estilo Kanban.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-5 z-[50]"></div>
      </div>
    </>
  );
};

export default Chooser;
