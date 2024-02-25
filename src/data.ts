import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";

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
    icon: FiMessageSquare,
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
    icon: AiOutlineUser,
  },
];

const hospitalList = [
  {
    name: "Sunrise Medical Center",
    location: "Lagos",
    ownership: "Private",
  },
  {
    name: "Greenfield General Hospital",
    location: "Abuja",
    ownership: "Public",
  },
  {
    name: "Golden City Clinic",
    location: "Kano",
    ownership: "Private",
  },
  {
    name: "Unity Hospital",
    location: "Port Harcourt",
    ownership: "Public",
  },
  {
    name: "Harmony Medical Services",
    location: "Enugu",
    ownership: "Private",
  },
  {
    name: "Evergreen Health Center",
    location: "Ibadan",
    ownership: "Public",
  },
  {
    name: "Pristine Care Hospital",
    location: "Kaduna",
    ownership: "Private",
  },
  {
    name: "Royal Oaks Clinic",
    location: "Benin City",
    ownership: "Public",
  },
  {
    name: "Emerald Medical Group",
    location: "Jos",
    ownership: "Private",
  },
  {
    name: "Serenity Hospital",
    location: "Abeokuta",
    ownership: "Public",
  },
  {
    name: "Crown Heights Healthcare",
    location: "Owerri",
    ownership: "Private",
  },
  {
    name: "Silverline Specialist Clinic",
    location: "Uyo",
    ownership: "Public",
  },
  {
    name: "Golden Gate Medical Center",
    location: "Maiduguri",
    ownership: "Private",
  },
  {
    name: "Oceanview Hospital",
    location: "Calabar",
    ownership: "Public",
  },
  {
    name: "Crystal Clear Health Services",
    location: "Akure",
    ownership: "Private",
  },
  {
    name: "Sunset Memorial Hospital",
    location: "Warri",
    ownership: "Public",
  },
  {
    name: "Rainbow Healthcare Solutions",
    location: "Makurdi",
    ownership: "Private",
  },
  {
    name: "Topaz Medical Group",
    location: "Sokoto",
    ownership: "Public",
  },
  {
    name: "Diamond Health Pavilion",
    location: "Katsina",
    ownership: "Private",
  },
  {
    name: "Vitality Clinic",
  location: "Bauchi",
    ownership: "Public",
  },
];


export { links, hospitalList };
