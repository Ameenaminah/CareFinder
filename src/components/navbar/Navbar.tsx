import "./navbar.css";
import { FaBars, FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSidebar } from "../../hooks";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  const path: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/hospitals": "Hospitals",
    "/reviews": "Reviews",
    "/contact": "Contact",
    "/admin": "Admin",
  };
  return (
    <header className={`header ${isSidebarOpen ? "space-toggle" : ""}`}>
      <div className="barContainer">
        <FaBars size={20} className="header-toggle" onClick={toggleSidebar} />
        <span>{path[location.pathname]}</span>
      </div>
      <div>
        <FaRegBell />
        <FaSearch />
      </div>
    </header>
  );
};
