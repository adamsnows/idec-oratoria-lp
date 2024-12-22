"use client";
import { useState, useEffect } from "react";

interface ThirdSectionProps {
  activeCard: 1 | 2 | 3;
}

const ThirdSection = ({ activeCard = 1 }: ThirdSectionProps) => {
  const content = {
    1: (
      <div className="flex flex-col text-base gap-8 items-center justify-center h-full text-justify font-normal font-amsi">
        <span>
          O IDEC – Instituto de Desenvolvimento Comportamental – apresenta a
          Formação Internacional de Especialista Comportamental, uma experiência
          educacional única que capacita profissionais a transformarem vidas e
          carreiras. Reconhecida pelo MEC, nossa formação acontece
          presencialmente em Alphaville – São Paulo, Maringá – Paraná, Salvador
          – Bahia e Lisboa – Portugal, unindo abrangência nacional e
          internacional.
        </span>
        <span>
          Com um corpo docente altamente qualificado e uma metodologia
          exclusiva, esta formação oferece muito mais do que aprendizado
          teórico. Nossos alunos recebem um Setup completo de atendimentos,
          incluindo slides, ferramentas práticas e modelos de treinamentos em
          grupo, saindo prontos para impactar vidas e construir carreiras
          sólidas na área comportamental.
        </span>
        <span>
          A Formação Internacional de Especialista Comportamental é mais do que
          um curso: é um marco na capacitação de líderes e profissionais que
          desejam atuar com excelência em um mercado em constante evolução.
          Venha fazer parte do IDEC e descubra como transformar conhecimento em
          impacto real.
        </span>
        <button className="bg-accent px-6 py-2 me-auto text-3xl mt-4 hover:bg-black hover:text-white duration-300">
          SAIBA MAIS
        </button>
      </div>
    ),
    2: (
      <div className="flex flex-col gap-8 text-base items-center justify-center h-full text-justify font-normal">
        <span>
          O IDEC – Instituto de Desenvolvimento Comportamental apresenta a
          Formação em Inteligência Artificial para Gestores e Negócios, um
          programa inovador reconhecido pelo MEC, projetado para capacitar
          líderes a integrarem soluções de IA em suas estratégias empresariais,
          promovendo eficiência e vantagem competitiva.
        </span>
        <span>
          Benefícios da Formação: Tomada de Decisões Informadas: Utilize
          ferramentas de IA para analisar dados e obter insights que aprimoram a
          qualidade das decisões empresariais. Otimização de Processos:
          Implemente automações inteligentes que reduzem custos operacionais e
          aumentam a produtividade. Inovação Estratégica: Desenvolva produtos e
          serviços inovadores, alinhados às tendências tecnológicas atuais.
          Liderança Tecnológica: Adquira habilidades para liderar equipes
          multidisciplinares em projetos de IA, assegurando a governança e a
          ética no uso dessas tecnologias.
        </span>
        <span>
          Público-Alvo: Esta formação é ideal para gestores, executivos,
          empreendedores e profissionais de diversas áreas que buscam
          compreender e aplicar a Inteligência Artificial em seus negócios,
          visando otimizar operações, inovar processos e manter-se competitivos
          no mercado atual. Ao concluir a formação, os participantes estarão
          aptos a identificar oportunidades de aplicação da IA em suas
          organizações, liderar iniciativas tecnológicas e impulsionar o
          crescimento sustentável de seus negócios. Invista em seu futuro e no
          de sua empresa com a Formação em Inteligência Artificial para Gestores
          e Negócios do IDEC, e esteja preparado para os desafios da era
          digital.
        </span>
        <button className="bg-accent px-6 py-2 me-auto text-3xl mt-4 hover:bg-black hover:text-white duration-300">
          SAIBA MAIS
        </button>
      </div>
    ),
    3: (
      <div className="flex flex-col gap-8 text-base items-center justify-center h-full font-normal">
        <span>
          O IDEC – Instituto de Desenvolvimento Comportamental apresenta a
          Formação em Comunicação e Oratória, uma capacitação inovadora e
          reconhecida pelo MEC, criada para transformar sua habilidade de se
          expressar em um diferencial competitivo. Ideal para profissionais de
          todas as áreas que desejam potencializar sua comunicação, esta
          formação é voltada para gestores, líderes, palestrantes, professores,
          vendedores e todos que buscam se destacar em apresentações e
          interações de alto impacto.
        </span>
        <span>
          Com uma abordagem prática e teórica, a Formação em Comunicação e
          Oratória capacita os alunos a:
          <br /> Dominar técnicas de oratória: Aprenda a estruturar discursos,
          engajar audiências e transmitir mensagens com clareza e segurança.
          Superar o medo de falar em público: Desenvolva confiança e controle
          emocional para enfrentar qualquer plateia. Aprimorar a linguagem
          verbal e não verbal: Melhore sua postura, gestos e entonação para
          comunicar-se de forma mais assertiva. Influenciar e persuadir: Adquira
          estratégias eficazes para impactar e inspirar seus ouvintes em
          apresentações profissionais e pessoais. Nossa metodologia exclusiva
          combina teoria, prática e feedback contínuo, com exercícios
          interativos que simulam situações reais. Além disso, os participantes
          recebem materiais de suporte, como apresentações prontas, roteiros e
          ferramentas de preparação, para utilizar no dia a dia e alavancar suas
          carreiras imediatamente.
        </span>
        <span>
          Seja em ambientes corporativos, no mercado de palestras ou em
          interações cotidianas, a Formação em Comunicação e Oratória é o
          caminho para quem deseja se expressar com excelência e causar impacto
          positivo. Descubra como transformar suas palavras em poder com o IDEC!
        </span>
        <button className="bg-accent px-6 py-2 me-auto text-3xl mt-4 hover:bg-black hover:text-white duration-300">
          SAIBA MAIS
        </button>
      </div>
    ),
  };

  return (
    <div
      className="relative w-full h-full bg-white tracking-widest font-thin text-2xl text-black"
      id="description"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 items-center justify-center py-20">
          {content[activeCard]}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
