import "./navbar.css";
import { FaBars, FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSidebar } from "../../hooks";

export const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <header className={`header ${isSidebarOpen ? "space-toggle" : ""}`}>
      <div className="header-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div>
        <FaRegBell />
        <FaSearch />
      </div>
    </header>
  );
};
