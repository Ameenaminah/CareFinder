import { IAddressService } from "../addressService";
import { IHospitalService } from "../hospitalService";

export interface IInjectedServices {
  hospitalService: IHospitalService;
  addressService: IAddressService;
}
