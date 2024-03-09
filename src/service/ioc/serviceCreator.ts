import { IInjectedServices } from "./injectedServices";
import { HospitalService } from "../hospitalService";
import { RestService } from "../restService";
import { AddressService } from "../addressService";
import { UserService } from "../userService";
import { AuthorizedRestService } from "../authorizedRestService";

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService("http://localhost:5026/api");
  const webApiAuthorizedRestService = new AuthorizedRestService();

  const userService = new UserService(webApiRestService);
  const hospitalService = new HospitalService(
    webApiRestService,
    webApiAuthorizedRestService
  );
  const addressService = new AddressService(webApiRestService);

  return {
    userService,
    hospitalService,
    addressService,
  };
};
