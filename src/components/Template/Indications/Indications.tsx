import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import TestimonialSlider from "@/components/Other/TestimonialSlider/TestimonialSlider";

const Indications = () => {
  return (
    <div
      id="indications"
      className="flex h-[inherit] text-center xl:text-left "
    >
      <div className="container mx-auto py-10 xl:pb-3 flex flex-col items-center xl:flex-row gap-x-6 flex-1">
        <div className="flex w-full flex-1 flex-col gap-8">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
          >
            <h2 className="h2 mb-6 xl:mb-0 text-center">
              Os nossos <span className="text-accent">clientes</span> adoram o
              SMVZap! 💛
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Indications;
