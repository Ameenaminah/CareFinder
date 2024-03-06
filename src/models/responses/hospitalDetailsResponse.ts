import {
  AddressResponse,
  CreateHospitalRequest,
  emptyCreateHospitalRequest,
} from "..";

export interface HospitalDetailsResponse extends CreateHospitalRequest {
  id: number;
  addresses: AddressResponse[];
}

export const emptyHospitalDetailsResponse: HospitalDetailsResponse = {
  ...emptyCreateHospitalRequest,
  id: 0,
  addresses: [],
};
