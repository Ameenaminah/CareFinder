export interface CreateHospitalRequest {
  name: string;
  specialization: string;
  ownership: string;
  email?: string;
  phoneNumber: string;
  website: string;
  about: string;
  image?: string;
}
