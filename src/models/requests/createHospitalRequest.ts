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
