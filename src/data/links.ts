import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { GiHospitalCross } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

interface Link {
  id: number;
  link: string;
  to: string;
  icon: React.ComponentType<any>;
}

const links: Link[] = [
  {
    id: 1,
    link: "Home",
    to: ".",
    icon: MdOutlineDashboard,
  },
  {
    id: 2,
    link: "Hospitals",
    to: "hospitals",
    icon: GiHospitalCross,
  },
  {
    id: 3,
    link: "About",
    to: "about",
    icon: TbReportAnalytics,
  },
  {
    id: 4,
    link: "Contact",
    to: "contact",
    icon: FiShoppingCart,
  },
  {
    id: 5,
    link: "Reviews",
    to: "reviews",
    icon: RiSettings4Line,
  },
  {
    id: 6,
    link: "Admin",
    to: "admin",
    icon: RiAdminFill,
  },
];

export { links };
