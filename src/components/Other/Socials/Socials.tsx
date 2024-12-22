"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Socials = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Fecha o menu após clicar no item
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Ajustar o threshold conforme necessário
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      {/* Botão do Menu Hambúrguer */}
      <button
        className="sm:hidden block text-4xl p-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute top-full left-0 w-[175px] bg-[#000] mt-3 text-white flex flex-col items-start gap-3 p-5 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden`}
      >
        <button
          onClick={() => handleClick("about")}
          className="hover:text-accent transition-all duration-300"
        >
          SOBRE
        </button>
        <button
          onClick={() => handleClick("formation")}
          className="hover:text-accent transition-all duration-300"
        >
          FORMAÇÕES
        </button>
        <button
          onClick={() => handleClick("unity")}
          className="hover:text-accent transition-all duration-300"
        >
          UNIDADES
        </button>
        <button
          onClick={() => handleClick("contact")}
          className="hover:text-accent transition-all duration-300"
        >
          CONTATO
        </button>
      </div>

      {/* Menu Desktop */}
      <div className="hidden sm:flex xl:gap-x-5 gap-x-3 text-lg font-thin justify-end">
        <button
          onClick={() => handleClick("about")}
          className="hover:text-accent transition-all duration-300"
        >
          SOBRE
        </button>
        <button
          onClick={() => handleClick("formation")}
          className="hover:text-accent transition-all duration-300"
        >
          FORMAÇÕES
        </button>
        <button
          onClick={() => handleClick("unity")}
          className="hover:text-accent transition-all duration-300"
        >
          UNIDADES
        </button>
        <button
          onClick={() => handleClick("contact")}
          className="hover:text-accent transition-all duration-300"
        >
          CONTATO
        </button>
      </div>
    </div>
  );
};

export default Socials;
