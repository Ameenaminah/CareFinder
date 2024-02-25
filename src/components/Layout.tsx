import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
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
