import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

export const links = [
  {
    id: 1,
    name: "Home",
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    label: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Projects",
    label: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    name: "Indications",
    label: "Indications",
    link: "/indications",
  },
  {
    id: 6,
    name: "Contact",
    label: "Contact",
    link: "/contact",
  },
];

const ProjectsBtn = ({ currentPageId }: any) => {
  const currentIndex = links.findIndex((link) => link.id === currentPageId);

  const previousIndex =
    currentIndex === 0 ? links.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === links.length - 1 ? 0 : currentIndex + 1;

  const previousLink = links[previousIndex];
  const nextLink = links[nextIndex];

  return (
    <div className="mx-auto xl:m-0 flex justify-between items-center cursor-pointer gap-2 z-[999]">
      {currentPageId != 1 && (
        <Link
          href={previousLink.link}
          className="relative w-[55px] h-[55px] flex justify-center items-center bg-circle bg-cover bg-center bg-no-repeat group cursor-pointer"
          aria-label="projects"
        >
          <RiArrowLeftLine className="text-3xl" />
        </Link>
      )}

      {currentPageId != 6 && (
        <Link
          href={nextLink.link}
          className="relative w-[55px] h-[55px] flex justify-center items-center bg-circle bg-cover bg-center bg-no-repeat group cursor-pointer"
          aria-label="projects"
        >
          <RiArrowRightLine className="text-3xl" />
        </Link>
      )}
    </div>
  );
};

export default ProjectsBtn;
