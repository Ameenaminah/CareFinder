import * as yup from "yup";

export interface HospitalValues {
  name: string;
  specialization: string;
  ownership: string;
  email?: string;
  phoneNumber: string;
  website?: string ;
  about: string;
  image?: string | undefined;
}

export const hospitalSchema: yup.ObjectSchema<HospitalValues> = yup.object().shape({
  name: yup.string().required(" Hospital name is required"),
  specialization: yup.string().required("Specialization is required"),
  ownership: yup.string().required("Required"),
  email: yup.string().email("Invalid email").notRequired() as yup.StringSchema<
    string | undefined
  >,
  phoneNumber: yup.string().required("Required"),
  website: yup.string().notRequired() as yup.StringSchema<string >,
  about: yup.string().required("Required"),
  image: yup.string().notRequired() as yup.StringSchema<string | undefined>,
});

export interface AddressValues {
  addressLine: string;
  state: string;
  postalCode?: string | undefined;
  hospitalId: number;
}

export const addressSchema: yup.ObjectSchema<AddressValues> = yup
  .object()
  .shape({
    addressLine: yup.string().required(" AddressLine is required"),
    state: yup.string().required("State is required"),
    hospitalId: yup.number().required("Required"),
    postalCode: yup.string().notRequired() as yup.StringSchema<
      string | undefined
    >,
  });
