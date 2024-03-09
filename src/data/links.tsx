import { GiHospitalCross } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { ReactElement } from "react";

interface Link {
  id: number;
  link: string;
  to: string;
  icon: ReactElement;
}

const links: Link[] = [
  { id: 1, link: "Home", to: ".", icon: <IoIosHome size={20} /> },
  {
    id: 2,
    link: "Hospitals",
    to: "hospitals",
    icon: <GiHospitalCross size={20} />,
  },
  { id: 3, link: "About", to: "about", icon: <CiCircleAlert size={20} /> },
  {
    id: 4,
    link: "Contact",
    to: "contact",
    icon: <MdOutlineContactSupport size={20} />,
  },
  {
    id: 5,
    link: "Reviews",
    to: "reviews",
    icon: <MdOutlineContactSupport size={20} />,
  },
];

export { links };
