import { FC, useCallback } from "react";
import { Select,  } from "antd";
import { UseFormRegister, Path } from "react-hook-form";
import { HospitalValues } from "../../pages/hospital/validation";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  placeholder: string;
  name?: Path<HospitalValues>;
  register?: UseFormRegister<T>;
}

export const SelectInput: FC<Props> = ({ options, placeholder , name, register}) => {
  const handleChange = useCallback((value: string) => {
    console.log(`selected ${value}`);
  }, []);

  return (
    <Select
      placeholder={placeholder}
      className="select-input"
       onChange={handleChange}
      size="large"
      options={options}
      // {...register(name)}
    />
  );
};
