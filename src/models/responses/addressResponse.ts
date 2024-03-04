export interface AddressResponse {
  id: number;
  addressLine: string;
  state: string;
  postalCode?: string;
}

export const emptyAddressResponse: AddressResponse = {
  id: 0,
  addressLine: "",
  state: "",
  postalCode: "",
};
