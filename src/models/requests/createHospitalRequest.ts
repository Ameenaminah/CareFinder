export interface CreateHospitalRequest {
  name: string;
  specialization: string;
  ownership: string;
  email: string;
  phoneNumber: string;
  website: string ;
  about: string ;
  image?: string;
}

export const emptyCreateHospitalRequest: CreateHospitalRequest = {
  name: "",
  specialization: "",
  ownership: "",
  email: "",
  phoneNumber: "",
  website: "",
  about: "",
  image: "",
};
