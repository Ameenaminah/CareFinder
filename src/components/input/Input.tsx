import { UseFormRegister, Path } from "react-hook-form";

import "./input.css";
import { FC, useState } from "react";
import { RegisterValues } from "../../pages/admin/validation";
import { AddressValues, HospitalValues } from "../../pages/hospital/validation";
import { LabelContainer } from "./LabelContainer";
import { ContactValues } from "../../pages/contact/validation";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

interface Props {
	label: string;
	name: Path<RegisterValues | HospitalValues | AddressValues | ContactValues>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	error: string | undefined;
	type: string;
	disabled?: boolean;
}
export const Input: FC<Props> = ({ register, name, error, label, type, disabled }) => {
	const [showPassword, setShowPassword] = useState(false);
	const inputStyle = {
		borderColor: error ? "red" : "var(--border-color)",
		cursor: disabled ? "not-allowed" : "pointer",
	};

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<LabelContainer label={label} name={name} error={error}>
			<div style={{ position: "relative" }}>
				<input
					className="input"
					type={showPassword ? "text" : type}
					id={name}
					{...register(name)}
					style={inputStyle}
					placeholder={label}
					disabled={disabled}
				/>
				{type === "password" && (
					<div className="eye-icon" onClick={togglePasswordVisibility}>
						{showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
					</div>
				)}
			</div>
		</LabelContainer>
	);
};
