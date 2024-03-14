export interface AddressResponse {
	id: number;
	addressLine: string;
	state: string;
	postalCode?: string;
	hospitalId: number;
}

export const emptyAddressResponse: AddressResponse = {
	id: 0,
	addressLine: "",
	state: "",
	postalCode: "",
	hospitalId: 0,
};
