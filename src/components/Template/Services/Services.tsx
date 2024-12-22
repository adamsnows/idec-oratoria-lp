import { motion } from "framer-motion";
import { fadeIn } from "@/components/Animations/FadeIn";
import ServiceSlider from "@/components/Other/ServiceSlider/ServiceSlider";

const Services = () => {
  return (
    <div
      id="services"
      className="container mx-auto py-10 xl:pb-3 flex flex-col items-center xl:flex-row gap-x-6 flex-1 mt-14"
    >
      <div className="flex w-full flex-1 flex-col gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className=" flex flex-col  mb-6 xl:mb-0 text-center">
            <h2 className="h2 text-accent">Como o SMVZap Funciona</h2>
            <p className="xl:mb-4 text-center mx-auto lg:mx-0">
              Conheça o SMVZAP, a ferramenta de WhatsApp com CRM Kanban que vai
              revolucionar a forma como você gerencia seus leads, organiza suas
              conversas e impulsiona suas vendas.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
          className="w-full"
        >
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
