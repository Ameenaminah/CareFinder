import { FC, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/links";
import { useSidebar, useInjectedService } from "../hooks";
import { Logo } from "../assets";
import { RiAdminFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useAppSelector } from "../hooks";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
	const { isSidebarOpen } = useSidebar();
	const { isAuthenticated } = useAppSelector((s) => s.user);
	const { userService } = useInjectedService();
	const logOut = useCallback(async () => {
		isAuthenticated && (await userService.logout());
	}, [userService, isAuthenticated]);

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
								className={({ isActive }) => `${isActive ? "active nav-link" : "nav-link"}`}
								key={id}
							>
								<div>{icon}</div>
								<span className="nav-link-name">{link}</span>
							</NavLink>
						))}
						<NavLink
							to={isAuthenticated ? "logout" : "admin/login"}
							className={({ isActive }) => `${isActive ? "active nav-link" : "nav-link"}`}
							style={isAuthenticated ? { marginTop: "8em" } : { marginTop: 0 }}
							onClick={logOut}
						>
							<div>{isAuthenticated ? <MdLogout size={20} /> : <RiAdminFill size={20} />}</div>
							<span className="nav-link-name">{isAuthenticated ? "Logout" : "Admin"}</span>
						</NavLink>
					</nav>
				</div>
			</div>
		</aside>
	);
};
