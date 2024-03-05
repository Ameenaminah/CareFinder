import React, { FC } from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/links";
import { useSidebar } from "../../hooks";
import { Logo } from "../../assets";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="nav">
        <div>
          <Link to="/" className="nav-logo">
            <img src={Logo} className="logo" alt="CareFinder logo" />
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
