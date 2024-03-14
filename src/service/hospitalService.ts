import { IRestService } from "./restService";
import {
	CreateHospitalRequest,
	HospitalCreatedResponse,
	HospitalDetailsResponse,
	HospitalResponse,
	UpdateHospitalRequest,
} from "../models";

export interface IHospitalService {
	getHospitals(): Promise<HospitalResponse[] | null>;
	exportHospitals(): Promise<Blob | null>;
	shareHospitals(): Promise<Blob | null>;
	getHospital(id: number | undefined): Promise<HospitalDetailsResponse | null>;
	createHospital(input: CreateHospitalRequest): Promise<HospitalCreatedResponse | null>;
	updateHospital(input: UpdateHospitalRequest, hospitalId: number): Promise<void>;
	deleteHospital(hospitalId: number): Promise<void>;
}

export class HospitalService implements IHospitalService {
	constructor(
		private readonly restService: IRestService,
		private readonly authorizedRestService: IRestService,
	) {}

	async getHospitals(): Promise<HospitalResponse[] | null> {
		try {
			const url = "/hospitals";
			const hospitalsResponse = await this.restService.get<HospitalResponse[] | null>(url);

			return hospitalsResponse;
		} catch (error) {
			console.error(`Unable to export CSV: ${error}`);
		}
		return null;
	}

	async exportHospitals(): Promise<Blob | null> {
		try {
			const url = "/hospitals/export";

			const exportResponse = await this.restService.get<Blob | null>(url);

			return exportResponse;
		} catch (error) {
			console.error(`unable to get hospitals: ${error}`);
		}
		return null;
	}

	async shareHospitals(): Promise<Blob | null> {
		try {
			const url = "/hospitals/share";

			const shareResponse = await this.restService.get<Blob | null>(url);

			return shareResponse;
		} catch (error) {
			console.error(`unable to get hospitals: ${error}`);
		}
		return null;
	}

	async getHospital(id: number): Promise<HospitalDetailsResponse | null> {
		try {
			const url = `/hospitals/${id}`;

			const hospitalResponse = await this.restService.get<HospitalDetailsResponse | null>(url);

			return hospitalResponse;
		} catch (error) {
			console.error(`unable to get hospital: ${error}`);
		}
		return null;
	}

	async createHospital(input: CreateHospitalRequest): Promise<HospitalCreatedResponse | null> {
		try {
			const url = "/hospitals";

			const newHospitalResponse = await this.authorizedRestService.post<
				HospitalCreatedResponse,
				CreateHospitalRequest
			>(url, input);

			return newHospitalResponse;
		} catch (error) {
			console.error(`Unable to create a hospital: ${error}`);
		}

		return null;
	}

	async updateHospital(input: UpdateHospitalRequest, hospitalId: number): Promise<void> {
		try {
			const url = `/hospitals/${hospitalId}`;

			return await this.authorizedRestService.put<void, UpdateHospitalRequest>(url, input);
		} catch (error) {
			console.error(`Unable to change Password: ${error}`);
		}
	}

	async deleteHospital(hospitalId: number): Promise<void> {
		try {
			const url = `/hospitals/${hospitalId}`;
			return await this.authorizedRestService.delete(url);
		} catch (error) {
			console.error(`Unable to change delete: ${error}`);
		}
	}
}
