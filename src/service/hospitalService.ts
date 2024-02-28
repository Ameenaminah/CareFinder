import { IRestService } from "./restService";
import {
  HospitalDetailsResponse,
  HospitalResponse,
  PagedListResponse,
} from "../models";

export interface IHospitalService {
  getHospitals(): Promise<PagedListResponse<HospitalResponse> | null>;
  getHospital(id: string): Promise<HospitalDetailsResponse | null>;
}

export class HospitalService implements IHospitalService {
  constructor(private readonly restService: IRestService) {}

  async getHospitals(): Promise<PagedListResponse<HospitalResponse> | null> {
    try {
      const url = `/hospitals`;

      const hospitalsResponse =
        await this.restService.get<PagedListResponse<HospitalResponse> | null>(
          url
        );

      return hospitalsResponse;
    } catch (error) {
      console.error(`unable to get hospitals: ${error}`);
    }
    return null;
  }

  async getHospital(id: string): Promise<HospitalDetailsResponse | null> {
    try {
      const url = `/hospitals/${id}`;

      const hospitalResponse =
        await this.restService.get<HospitalDetailsResponse | null>(url);

      return hospitalResponse;
    } catch (error) {
      console.error(`unable to get hospital: ${error}`);
    }
    return null;
  }
}
