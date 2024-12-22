import Link from "next/link";

import Socials from "@/components/Other/Socials/Socials";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className={`fixed z-[999] w-full flex items-center xl:px-0 h-[100px] py-6 ease-in duration-300 bg-black bg-opacity-90 backdrop-blur-sm border-b-4 border-[#f1c663] font-ltWave font-normal`}
    >
      <div className="container mx-auto p-0 w-full">
        <div className="flex flex-row-reverse sm:flex-row justify-between items-center gap-y-6 xl:py-8 w-full">
          <Link href={"/"} className="">
            <img
              src="/idec/logo-light.png"
              alt="Logo IDEC"
              className="mx-auto max-w-[300px] pe-4 sm:pe-0"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
