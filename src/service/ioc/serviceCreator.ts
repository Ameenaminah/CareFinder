import { IInjectedServices } from "./injectedServices";
import { HospitalService } from "../hospitalService";
import { RestService } from "../restService";

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService("http://localhost:5026/api");

  const hospitalService = new HospitalService(webApiRestService);

  return {
    hospitalService,
  };
};
