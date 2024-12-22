import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";

const Plans = () => {
  return (
    <div id="projects" className="flex h-[inherit]">
      <div className="container mx-auto py-10 xl:pb-3 flex flex-col items-center gap-x-6 flex-1 mt-10">
        <div className="flex w-full flex-1 flex-col  gap-8">
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
              <h2 className="h2">
                Escolha o{" "}
                <span className="text-black bg-accent px-2">plano ideal</span>{" "}
                para o seu negócio
              </h2>
              <p className="xl:mb-4 text-center mx-auto lg:mx-0">
                Não se contente com o comum. Faça a escolha inteligente para sua
                gestão no WhatsApp. Experimente o SMVZAP e descubra como a
                simplicidade pode ser a chave para o sucesso nas suas interações
                comerciais.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full"
          ></motion.div>
          {/* <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full"
          >
            <div className="w-full border bg-white h-[200px] flex flex-col group">
              <span className="text-accent text-center block mx-auto mt-6 text-xl">
                + DE 5 LICENÇAS ANUAIS
              </span>
              <div className="text-lg mt-auto flex items-center justify-centergap-2 text-nowrap w-full bg-accent lg:bg-accent/80 hover:bg-accent transition duration-500 max-w-[350px] mx-auto mb-6">
                <Link
                  target="_blank"
                  href={"link"}
                  className="flex mx-auto items-center justify-center gap-2 p-2 "
                >
                  <span className="text-black">COMPRAR AGORA</span>
                  <RiArrowRightLine className="group-hover:-rotate-45 group-hover:text-white transition-all duration-300 text-2xl " />
                </Link>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Plans;
