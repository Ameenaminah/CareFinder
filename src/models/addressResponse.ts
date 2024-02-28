export interface AddressResponse {
  id: string;
  addressLine: string;
  state: string;
  postalCode?: string;
}

export const emptyAddressResponse: AddressResponse = {
  id: "",
  addressLine: "",
  state: "",
  postalCode: "",
};
