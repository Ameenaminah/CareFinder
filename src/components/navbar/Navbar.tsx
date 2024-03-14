import "./navbar.css";
import { FaBars } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
import { useSidebar, useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import { FC } from "react";
import { Avatar } from "antd";
import { getInitials } from "../../helpers";

export const Navbar: FC = () => {
	const location = useLocation();
	const { toggleSidebar, isSidebarOpen } = useSidebar();
	const {
		isAuthenticated,
		value: { firstName },
	} = useAppSelector((s) => s.user);

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

			{isAuthenticated && (
				<div className="flex avatarContainer">
					<Avatar className="navbar-avatar avatar">{getInitials(firstName)}</Avatar>
					<div>
						<p className="firstName">{firstName}</p>
						<p className="admin">Admin</p>
					</div>
				</div>
			)}
		</header>
	);
};
