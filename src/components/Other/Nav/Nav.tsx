import { navData } from "@/data/nav";
import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
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
      { threshold: 0.5 } // Adjust threshold as needed
    );

    navData.forEach((button) => {
      const section = document.getElementById(button.sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col items-center justify-center gap-y-4 fixed inset-y-1/2	 mt-auto xl:right-[2%] z-[100] top-0 w-full xl:w-14 xl:max-w-md  h-[250px]">
      <div className="flex w-full xl:flex-col items-center justify-center fixed bottom-0 xl:relative xl:bottom-[unset] gap-y-10 gap-x-6 px-4 md:px-40 h-[6dvh] xl:px-0 xl:h-max py-4 xl:py-8 bg-black/50  backdrop-blur xl:bg-black/80 xl:backdrop-blur-sm text-3xl xl:text-xl ms-0 lg:ms-10">
        {navData.map((button, index) => {
          return (
            <button
              className={`${
                button.sectionId === activeSection && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300 xl:w-fit w-6 `}
              key={index}
              aria-label={button.name}
              onClick={() => handleClick(button.sectionId)}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold ">
                    {button.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div className="xl:w-5 w-4 cursor-pointer">{button.icon}</div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
