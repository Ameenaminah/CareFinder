import { AddressResponse } from "./addressResponse";

export interface HospitalResponse {
  id: string;
  name: string;
  specialization: string;
  ownership: string;
  email: string;
  phoneNumber: string;
  website: string;
  addresses: AddressResponse[];
}

export const emptyHospitalResponse: HospitalResponse = {
  id: "",
  name: "",
  specialization: "",
  ownership: "",
  email: "",
  phoneNumber: "",
  website: "",
  addresses: [],
};
