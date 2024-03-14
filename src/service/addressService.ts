import { IRestService } from "./restService";
import { AddressCreatedResponse, CreateAddressRequest } from "../models";

export interface IAddressService {
	createAddress(input: CreateAddressRequest): Promise<AddressCreatedResponse | null>;
}

export class AddressService implements IAddressService {
	constructor(private readonly restService: IRestService) {}

	async createAddress(input: CreateAddressRequest): Promise<AddressCreatedResponse | null> {
		try {
			const url = "/addresses";

			const newAddressResponse = await this.restService.post<
				AddressCreatedResponse,
				CreateAddressRequest
			>(url, input);

			return newAddressResponse;
		} catch (error) {
			console.error(`Unable to create a address: ${error}`);
		}

		return null;
	}
}
