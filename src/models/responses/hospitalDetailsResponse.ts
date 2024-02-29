import { HospitalResponse, emptyHospitalResponse } from "..";

export interface HospitalDetailsResponse extends HospitalResponse {
  image: string;
  about: string;
}

export const emptyHospitalDetailsResponse: HospitalDetailsResponse = {
  ...emptyHospitalResponse,
  image: "",
  about: "",
};
