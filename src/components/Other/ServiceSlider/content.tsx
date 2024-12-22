import { IoFunnel } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { SiPurescript } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import Image from "next/image";

export const Services: IServices = {
  funnel: {
    label: "Funil de vendas",
    icon: <IoFunnel size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Funil de vendas</h2>
        <Image
          src={"/services/Funil.png"}
          width={300}
          height={300}
          alt="Funil de vendas"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Organize seus contatos e suas conversas como em um CRM profissional
          estilo Kanban (Trello)
        </p>
      </div>
    ),
  },
  schedule: {
    label: "Agende mensagens",
    icon: <LuCalendarClock size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Agende mensagens</h2>
        <Image
          src={"/services/Agendamento.jpg"}
          width={300}
          height={300}
          alt="Agende mensagens"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Jamais esqueça de dar retorno. Agende mensagens de lembrete para cada
          contato e tenha um atendimento de excelência.
        </p>
      </div>
    ),
  },
  contacts: {
    label: "Exporte os contatos",
    icon: <GrContactInfo size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Exporte os contatos</h2>
        <Image
          src={"/services/Contatos.jpg"}
          width={300}
          height={300}
          alt="Exporte os contatos"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Exporte contatos de grupos ou por etiquetas para planilhas do Excel e
          crie um banco de Leads personalizado.
        </p>
      </div>
    ),
  },
  templates: {
    label: "Mensagens prontas",
    icon: <SiPurescript size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Mensagens prontas</h2>
        <Image
          src={"/services/Templates.jpg"}
          width={300}
          height={300}
          alt="Mensagens prontas"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Crie mensagens rápidas para enviar aos seus clientes com um clique.
          Pode ser texto, imagem, vídeo, áudio ou doc.
        </p>
      </div>
    ),
  },
  multi: {
    label: "Disparo em massa",
    icon: <RiMailSendLine size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Disparo em massa</h2>
        <Image
          src={"/services/Disparos.png"}
          width={300}
          height={300}
          alt="Disparo em massa"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Faça disparo em massa com mensagens personalizadas para contatos de
          grupos, etiquetas, planilhas, etc.
        </p>
      </div>
    ),
  },
  notes: {
    label: "Anotações",
    icon: <MdLabelOutline size={25} />,
    component: (
      <div className="flex flex-col items-center justify-center gap-3 fadein">
        <h2 className="h2">Anotações</h2>
        <Image
          src={"/services/Notes.jpg"}
          width={300}
          height={300}
          alt="Anotações"
          className="w-[300px] md:w-[400px] max-h-[300px] rounded-md border-zinc-900 border shadow-md"
        />
        <p>
          Crie notas importantes de cada contato e surpreenda-os com detalhes
          importantes de todo o atendimento.
        </p>
      </div>
    ),
  },
};

export interface IService {
  label: string;
  component: JSX.Element;
  icon: JSX.Element;
}

export interface IServices {
  [key: string]: IService;
}
