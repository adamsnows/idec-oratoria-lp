import {
  RiHome2Line,
  RiUser3Line,
  RiLayout4Line,
  RiTableLine,
  RiChatQuoteLine,
  RiQuestionAnswerLine,
  RiFileHistoryFill,
  RiMailSendLine,
} from "react-icons/ri";
import { FaQuestion, FaYoutube } from "react-icons/fa";
import { FaArrowsSplitUpAndLeft, FaBuilding } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { PiBuildingsFill } from "react-icons/pi";
import { BsInfoSquareFill } from "react-icons/bs";

export const navData = [
  {
    id: "nav1",
    name: "Home",
    sectionId: "home",
    icon: <RiHome2Line className="xl:w-5 w-5" key="home" />,
  },
  // {
  //   id: "nav2",
  //   name: "Serviços",
  //   sectionId: "services",
  //   icon: <RiLayout4Line className="xl:w-5 w-5" key="services" />,
  // },
  {
    id: "nav3",
    name: "Sobre",
    sectionId: "about",
    icon: <FaBuilding className="xl:w-5 w-5" key="about" />,
  },
  {
    id: "nav4",
    name: "Nossas formações",
    sectionId: "formation",
    icon: <FaArrowsSplitUpAndLeft className="xl:w-5 w-5" key="formation" />,
  },
  {
    id: "nav5",
    name: "Instruções",
    sectionId: "description",
    icon: <MdDescription className="xl:w-5 w-5" key="description" />,
  },
  {
    id: "nav6",
    name: "Nossas Unidades",
    sectionId: "unity",
    icon: <PiBuildingsFill className="xl:w-5 w-5" key="unity" />,
  },
  // {
  //   id: "nav7",
  //   name: "Planos",
  //   sectionId: "projects",
  //   icon: <RiTableLine className="xl:w-5 w-5" key="projects" />,
  // },
  // {
  //   id: "nav8",
  //   name: "Dúvidas frequentes",
  //   sectionId: "accordion-flush",
  //   icon: <FaQuestion className="xl:w-5 w-5" key="accordion-flush" />,
  // },
  // {
  //   id: "",
  //   name: "História",
  //   sectionId: "history",
  //   icon: <RiFileHistoryFill className="xl:w-5 w-5" key="history" />,
  // },
  {
    id: "",
    name: "Contato",
    sectionId: "contact",
    icon: <RiMailSendLine className="xl:w-5 w-5" key="RiMailSendLine" />,
  },
];
