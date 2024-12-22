import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Socials from "@/components/Other/Socials/Socials";
import Image from "next/image";
import { TbLayoutKanban } from "react-icons/tb";
import { MdLabelOutline } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { SiPurescript } from "react-icons/si";
import 'animate.css';

const BannerInfinity = () => {
  const items = [
    "https://smvzap.com/wp-content/uploads/2024/04/Group-8.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-7.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-6.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-5.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-9.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-8.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-7.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-6.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-5.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-9.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-8.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-7.png",
    "https://smvzap.com/wp-content/uploads/2024/04/Group-6.png",
  ];

  const items2 = [
    <div key={`kanban`} className="flex gap-2 items-center justify-start w-fit">
      <TbLayoutKanban size={25} className="shrink-0" />{" "}
      <p className="whitespace-nowrap font-medium text-black">CRM Kanban Intuitivo</p>
    </div>,
    <div
      key={`agendamentos`}
      className="flex gap-2 items-center justify-start w-fit"
    >
      <LuCalendarClock size={25} className="shrink-0" />{" "}
      <p className="whitespace-nowrap font-medium text-black">Agendamentos de mensagens</p>
    </div>,
    <div
      key={`etiqueta`}
      className="flex gap-2 items-center justify-start w-fit"
    >
      <MdLabelOutline size={25} className="shrink-0" />{" "}
      <p className="whitespace-nowrap font-medium text-black">Etiqueta personalizada</p>
    </div>,
    <div
      key={`scripts`}
      className="flex gap-2 items-center justify-start w-fit"
    >
      <SiPurescript size={25} className="shrink-0" />{" "}
      <p className="whitespace-nowrap font-medium text-black">Respostas e scripts</p>
    </div>,
  ];

  const doubledItems = [...items2, ...items2, ...items2, ...items2];

  const containerVariants = {
    hidden: { x: 0 },
    visible: {
      x: "-50%", // Move only half the container width
      transition: {
        repeat: Infinity,
        duration: 10, // Adjust duration for speed
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full flex items-center justify-start xl:h-[90px] ease-in duration-300 bg-accent text-black backdrop-blur-sm overflow-hidden">
      <div className="flex flex-row items-center gap-6 animate-scroll py-3 xl:py-6">
        {doubledItems.map((item) => item)}
      </div>
    </div>
  );
};

export default BannerInfinity;
