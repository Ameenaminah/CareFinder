import { UseFormRegister, Path } from "react-hook-form";

import "./input.css";
import { FC, useCallback, useState } from "react";
import { RegisterValues } from "../../pages/admin/validation";
import { HospitalValues } from "../../pages/hospital/validation";

interface Props {
  label: string;
  name: Path<RegisterValues | HospitalValues>;
  register: UseFormRegister<RegisterValues | HospitalValues>;
  error: string ;
  type: string;
}
export const Input: FC<Props> = ({ register, name, error, label, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const getBorderColor = useCallback(() => {
    if (error) {
      return "red";
    }
    return isFocused ?  "var(--secondary-color)": "var(--border-color)";
  }, [isFocused, error]);

  return (
    <div className="form-control">
      <label htmlFor="lastName">{label}</label>
      <input
        className="input"
        type={type}
        id={name}
        {...register(name)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ borderColor: getBorderColor() }}
      />
      <p className="error">{error}</p>
    </div>
  );
};
