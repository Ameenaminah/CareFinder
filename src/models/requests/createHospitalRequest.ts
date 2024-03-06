export interface CreateHospitalRequest {
  name: string;
  specialization: string;
  ownership: string;
  email?: string;
  phoneNumber: string;
  website: string | undefined;
  about: string | undefined;
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
