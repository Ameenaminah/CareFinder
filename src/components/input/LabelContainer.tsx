import { Path } from "react-hook-form";

import "./input.css";
import { FC, ReactNode } from "react";
import { RegisterValues } from "../../pages/admin/validation";
import { HospitalValues } from "../../pages/hospital/validation";

interface Props {
  label: string;
  name: Path<RegisterValues | HospitalValues>;
  error: string | undefined;
  children: ReactNode;
}
export const LabelContainer: FC<Props> = ({ name, error, label, children }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {children}
      <p className="error">{error}</p>
    </div>
  );
};
