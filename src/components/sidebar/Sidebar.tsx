import React, { FC } from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { links } from "../../data";
import { useSidebar } from "../../hooks";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  const { isSidebarOpen } = useSidebar();
  
   

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="nav">
        <div>
          <Link to="/" className="nav-logo">
            <AiOutlineUser size={20} color="pink" />
            <span className="nav-logo-name">CareFinder</span>
          </Link>
          <nav className="nav-list">
            {links.map(({ id, link, to, icon }) => (
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${isActive ? "active nav-link" : "nav-link"}`
                }
                key={id}
              >
                <div>{React.createElement(icon, { size: "20" })}</div>
                <span className="nav-link-name">{link}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};
