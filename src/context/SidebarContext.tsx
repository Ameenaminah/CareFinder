import React, { createContext, useState, ReactNode, useCallback } from "react";

type SidebarContextType = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = useCallback(() => {
		setIsSidebarOpen(!isSidebarOpen);
	}, [isSidebarOpen]);

	const contextValue: SidebarContextType = {
		isSidebarOpen,
		toggleSidebar,
	};

	return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};
