import { IAddressService } from "../addressService";
import { IHospitalService } from "../hospitalService";
import { IUserService } from "../userService";

export interface IInjectedServices {
  hospitalService: IHospitalService;
  addressService: IAddressService;
  userService: IUserService;
}
