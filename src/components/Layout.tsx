import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./navbar/Navbar";

export const Layout = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	);
};
