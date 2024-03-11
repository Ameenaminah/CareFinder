import * as yup from "yup";

export interface ContactValues {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  subject: string;
  message: string;
}

export const contactSchema: yup.ObjectSchema<ContactValues> = yup
  .object()
  .shape({
    name: yup.string().required("Nae is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().trim().required("Password is required"),
    mobileNumber: yup.string().trim().required("Phone number is required"),
    subject: yup.string().trim().required(" Subject is required"),
    message: yup.string().trim().required("Message is required"),
  });
