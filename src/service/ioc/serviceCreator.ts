import { IInjectedServices } from "./injectedServices";
import { HospitalService } from "../hospitalService";
import { RestService } from "../restService";
import { AddressService } from "../addressService";
import { UserService } from "../userService";

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService("http://localhost:5026/api");

  const userService = new UserService(webApiRestService);
  const hospitalService = new HospitalService(webApiRestService);
  const addressService = new AddressService(webApiRestService);

  return {
    userService,
    hospitalService,
    addressService,
  };
};
