import { IRestService } from "./restService";
import {
  CreateHospitalRequest,
  HospitalCreatedResponse,
  HospitalDetailsResponse,
  HospitalResponse,
  PagedListResponse,
  UpdateHospitalRequest,
} from "../models";

export interface IHospitalService {
  getHospitals(): Promise<PagedListResponse<HospitalResponse> | null>;
  getHospital(id: number | undefined): Promise<HospitalDetailsResponse | null>;
  createHospital(
    input: CreateHospitalRequest
  ): Promise<HospitalCreatedResponse | null>;
  updateHospital(
    input: UpdateHospitalRequest,
    hospitalId: number
  ): Promise<void>;
}

export class HospitalService implements IHospitalService {
  constructor(private readonly restService: IRestService) {}

  async getHospitals(): Promise<PagedListResponse<HospitalResponse> | null> {
    try {
      const url = `/hospitals?StartIndex=0&PageSize=12&PageNumber=1`;

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

  async getHospital(id: number): Promise<HospitalDetailsResponse | null> {
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

  async createHospital(
    input: CreateHospitalRequest
  ): Promise<HospitalCreatedResponse | null> {
    try {
      const url = "/hospitals";

      const newHospitalResponse = await this.restService.post<
        HospitalCreatedResponse,
        CreateHospitalRequest
      >(url, input);

      return newHospitalResponse;
    } catch (error) {
      console.error(`Unable to create a hospital: ${error}`);
    }

    return null;
  }

  async updateHospital(
    input: UpdateHospitalRequest,
    hospitalId: number
  ): Promise<void> {
    try {
      const url = `/hospitals/${hospitalId}`;

      return await this.restService.put<void, UpdateHospitalRequest>(
        url,
        input
      );
    } catch (error) {
      console.error(`Unable to change Password: ${error}`);
    }
  }
}
