import { IInjectedServices } from "./injectedServices";
import { HospitalService } from "../hospitalService";
import { RestService } from "../restService";
import { AddressService } from "../addressService";

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService("http://localhost:5026/api");

  const hospitalService = new HospitalService(webApiRestService);
  const addressService = new AddressService(webApiRestService);

  return {
    hospitalService,
    addressService,
  };
};
