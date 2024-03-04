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

export interface AddressValues {
  addressLine: string;
  state: string;
  postalCode?: string;
  hospitalId: number;
}

export const addressSchema: yup.ObjectSchema<AddressValues> = yup.object().shape({
  addressLine: yup.string().required(" AddressLine is required"),
  state: yup.string().required("State is required"),
  hospitalId: yup.number().required("Required"),
  postalCode: yup.string().nullable(),
});
