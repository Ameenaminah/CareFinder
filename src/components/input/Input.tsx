import { UseFormRegister, Path } from "react-hook-form";

import "./input.css";
import { FC } from "react";
import { RegisterValues } from "../../pages/admin/validation";
import { HospitalValues } from "../../pages/hospital/validation";

interface Props {
  label: string;
  name: Path<RegisterValues | HospitalValues>;
  register: UseFormRegister<T>;
  error: string | undefined;
  type: string;
}
export const Input: FC<Props> = ({ register, name, error, label, type }) => {
  return (
    <div className="form-control">
      <label htmlFor="lastName">{label}</label>
      <input
        className="input"
        type={type}
        id={name}
        {...register(name)}
        style={
          error
            ? { borderColor: "red" }
            : { borderColor: "var(--border-color)" }
        }
      />
      <p className="error">{error}</p>
    </div>
  );
};
