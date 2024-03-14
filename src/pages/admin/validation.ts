import * as yup from "yup";

export interface LoginValues {
	email: string;
	password: string;
}

export const loginSchema: yup.ObjectSchema<LoginValues> = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup.string().trim().required("Password is required"),
});

export interface RegisterValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const registerSchema: yup.ObjectSchema<RegisterValues> = yup.object().shape({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup.string().trim().required("Password is required"),
	confirmPassword: yup
		.string()
		.trim()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Confirm Password is required"),
});
