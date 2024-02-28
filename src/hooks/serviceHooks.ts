import { useContext } from "react";

import { ServiceDependency } from "../service/ioc/serviceDependency";

export const useInjectedService = () => {
  return useContext(ServiceDependency);
};
