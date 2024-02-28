import { ReactNode, createContext } from "react";

import { IInjectedServices } from "./injectedServices";

interface Props {
	children: ReactNode;
	services: IInjectedServices;
}

export const ServiceDependency = createContext({} as IInjectedServices);

export const ServicesProvider: React.FC<Props> = ({ children, services }) => {
	return <ServiceDependency.Provider value={services}>{children}</ServiceDependency.Provider>;
};
