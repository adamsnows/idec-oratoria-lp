import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Animations/FadeIn";
import { Button } from "rizzui";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      id: 1,
      title: "Como usar a ferramenta?",
      content:
        "A ferramenta pode ser usada como uma extensão do Google Chrome, Microsoft Edge ou Opera. Funciona tanto no Windows quanto no MAC.",
    },
    {
      id: 2,
      title: "Preciso de mais atendentes, como faço?",
      content:
        "A extensão do WhatsApp Web te permite conectar até 4 atendentes. Cada usuário precisa de 1 licença, que pode ser a Free ou a Premium.",
    },
    {
      id: 3,
      title: "É seguro usar o SMVZAP?",
      content:
        "Sim, a ferramenta passou por um processo rigoroso antes de ser publicada no repositório do Google. Para estar lá, é necessário passar por um longo processo de auditoria e controle do código-fonte. Assim, o Google garante que a ferramenta não viola as políticas de privacidade.",
    },
    {
      id: 4,
      title: "O SMVZAP armazena minhas informações e as mensagens?",
      content:
        "Não. Os dados transacionados no SMVZAP ficam armazenados localmente na sua máquina. Não possuímos servidores de armazenamento, portanto, não temos acesso aos seus dados nem muito menos o arquivamos.",
    },
    {
      id: 5,
      title: "Como funciona o suporte?",
      content:
        "O suporte é via e-mail através do suporte@smvzap.com e através do WhatsApp",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
      exit="hidden"
      className="mb-10"
    >
      <span className="text-center w-full block text-accent text-3xl mt-20 mb-10 ">
        Dúvidas frequentes
      </span>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 "
        className="container mx-auto  transition duration-500 text-white lg:max-w-[600px] max-w-[350px] "
      >
        {accordionItems.map((item) => (
          <div key={item.id}>
            <h2 id={`accordion-flush-heading-${item.id}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium border-b border-gray-700 border-opacity-50  gap-3 "
                data-accordion-target={`#accordion-flush-body-${item.id}`}
                aria-expanded={activeIndex === item.id}
                aria-controls={`accordion-flush-body-${item.id}`}
                onClick={() => toggleAccordion(item.id)}
              >
                <span>{item.title}</span>
                {activeIndex === item.id ? (
                  <FaChevronUp className="text-accent" />
                ) : (
                  <FaChevronDown />
                )}
              </button>
            </h2>
            <div
              id={`accordion-flush-body-${item.id}`}
              className={`transition block duration-500 ${
                activeIndex === item.id ? "" : "hidden"
              }`}
              aria-labelledby={`accordion-flush-heading-${item.id}`}
            >
              <div className="py-5 border-b border-gray-700 border-opacity-10 ">
                <p className="mb-2 ">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accordion;
