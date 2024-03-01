import { FC, useCallback } from "react";
import { Select } from "antd";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  placeholder: string;
}

export const SelectInput: FC<Props> = ({ options, placeholder }) => {
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
    />
  );
};
