import * as yup from "yup";

export interface HospitalValues {
  name: string;
  specialization: string;
  ownership: string;
  email?: string | null;
  phoneNumber: string;
  website?: string | null;
  about: string;
  image?: string | null;
}

export const hospitalSchema: yup.ObjectSchema<HospitalValues> = yup
  .object()
  .shape({
    name: yup.string().required(" Hospital name is required"),
    specialization: yup.string().required("Specialization is required"),
    ownership: yup.string().required("Required"),
    email: yup.string().email("Invalid email").nullable(),
    phoneNumber: yup.string().required("Required"),
    website: yup.string().nullable(),
    about: yup.string().required("Required"),
    image: yup.string().nullable(),
  });
