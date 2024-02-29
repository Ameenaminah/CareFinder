import { Input } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HospitalValues, hospitalSchema } from "./validation";

export const HospitalForm = () => {
  const defaultValue = {
    name: "",
    specialization: "",
    ownership: "",
    email: "",
    phoneNumber: "",
    website: "",
    about: "",
    image: "",
  };

  const {
    // control,
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm<HospitalValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(hospitalSchema),
    mode: "onBlur",
  });
  return (
    <main>
      <section>
        <Input
          name="name"
          label="Hospital Name"
          register={register}
          error={errors.name?.message}
          type="text"
        />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </section>
    </main>
  );
};
