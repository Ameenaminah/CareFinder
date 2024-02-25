import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
