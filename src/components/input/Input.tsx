import { UseFormRegister, Path } from "react-hook-form";

import "./input.css";
import { FC } from "react";
import { RegisterValues } from "../../pages/admin/validation";
import { AddressValues, HospitalValues } from "../../pages/hospital/validation";
import { LabelContainer } from "./LabelContainer";

interface Props {
  label: string;
  name: Path<RegisterValues | HospitalValues | AddressValues>;
  register: UseFormRegister<T>;
  error: string | undefined;
  type: string;
  disabled?: boolean;
}
export const Input: FC<Props> = ({
  register,
  name,
  error,
  label,
  type,
  disabled,
}) => {
  const inputStyle = {
    borderColor: error ? "red" : "var(--border-color)",
    cursor: disabled ? "not-allowed" : "pointer",
  };
  return (
    <LabelContainer label={label} name={name} error={error}>
      <input
        className="input"
        type={type}
        id={name}
        {...register(name)}
        style={inputStyle}
        placeholder={label}
        disabled={disabled}
      />
    </LabelContainer>
  );
};
