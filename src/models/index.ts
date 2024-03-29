//Requests
export type { RegisterUserRequest } from "./requests/registerUserRequest";
export type { CreateHospitalRequest } from "./requests/createHospitalRequest";
export { emptyCreateHospitalRequest } from "./requests/createHospitalRequest";
export type { CreateAddressRequest } from "./requests/createAddressRequest";
export type { UpdateHospitalRequest } from "./requests/updateHospitalRequest";
export type { UserLoginRequest } from "./requests/userLoginRequest";

//Responses
export { emptyHospitalResponse } from "./responses/hospitalResponse";
export type { HospitalResponse } from "./responses/hospitalResponse";
export type { AddressResponse } from "./responses/addressResponse";
export { emptyAddressResponse } from "./responses/addressResponse";
export { emptyHospitalDetailsResponse } from "./responses/hospitalDetailsResponse";
export type { HospitalDetailsResponse } from "./responses/hospitalDetailsResponse";
export type { PagedListResponse } from "./responses/pagedListResponse";
export type { HospitalCreatedResponse } from "./responses/hospitalCreatedResponse";
export type { AddressCreatedResponse } from "./responses/addressCreatedResponse";
export type { UserToken } from "./responses/userToken";
export type { UserIdentity } from "./userItentity";
