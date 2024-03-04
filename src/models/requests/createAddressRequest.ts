export interface CreateAddressRequest {
  addressLine: string;
  state: string;
  postalCode?: string;
  hospitalId: number;
}
