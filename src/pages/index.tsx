import FirstSection from "@/components/Other/Sections/FirstSection";
import FourthSection from "@/components/Other/Sections/FourthSection";
import SecondSection from "@/components/Other/Sections/SecondSection";
import ThirdSection from "@/components/Other/Sections/ThirdSection";
import Seo from "@/components/Other/Seo";
import About from "@/components/Template/About/About";
import Accordion from "@/components/Template/Accordion/Accordion";
import Chooser from "@/components/Template/Chooser/Chooser";
import Contact from "@/components/Template/Contact/Contact";
import Footer from "@/components/Template/Footer/Footer";
import Hero from "@/components/Template/Hero/Hero";
import Indications from "@/components/Template/Indications/Indications";
import Instructions from "@/components/Template/Instructions/Instructions";
import Plans from "@/components/Template/Plans/Plans";
import Services from "@/components/Template/Services/Services";
import { createClickUpTask } from "@/utils/create-task";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [notification, setNotification] = useState(false);

  return (
    <>
      {!process.env.NEXT_PUBLIC_DEVELOPMENT && (
        <Toaster position="bottom-left" reverseOrder={false} />
      )}
      {/* <Analytics /> */}
      <Seo
        description="Formação em oratória
"
      />
      <FloatingWhatsApp
        notificationDelay={5}
        notificationSound
        onNotification={() => {
          setNotification(true);
        }}
        onClick={() => {
          setNotification(false);
        }}
        statusMessage="Respondo imediatamente"
        notification
        accountName="Suporte - IDEC"
        phoneNumber="+55 11 91346-8892"
        avatar="/favicon.png"
        chatMessage="Como posso te ajudar?"
        placeholder="Quero assinar..."
        darkMode
        buttonClassName="lg:mb-0"
        // onSubmit={(e: any) => {
        //   e.preventDefault();
        //   const inputValue = e.target.querySelector("input").value;
        //   // createClickUpTask(inputValue);
        // }}
      />
      {/*
      {notification && (
        <div className="inline fixed lg:bottom-[47px] md:bottom-[138px] bottom-[140px] right-[83px] p-[3.5px] pr-4 pl-2 z-[99] lg:text-base md:text-sm sm:text-xs min-[375px]:text-[10px] text-[8px] text-white bg-green-700 rounded-md">
          Alguma dúvida? Fale com a gente no WhatsApp.
        </div>
      )} */}
      <Hero />
      {/* <Services /> */}
      {/* <FirstSection />
      <SecondSection />
      <FourthSection />
      <Contact />
      <Footer />  */}
    </>
  );
};

export default HomePage;
