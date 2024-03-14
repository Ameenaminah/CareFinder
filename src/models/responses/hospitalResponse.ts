import { AddressResponse } from "./addressResponse";

export interface HospitalResponse {
  id: number;
  name: string;
  specialization: string;
  ownership: string;
  email: string;
  phoneNumber: string;
  addresses: AddressResponse[];
}

export const emptyHospitalResponse: HospitalResponse = {
  id: 0,
  name: "",
  specialization: "",
  ownership: "",
  email: "",
  phoneNumber: "",
  addresses: [],
};
