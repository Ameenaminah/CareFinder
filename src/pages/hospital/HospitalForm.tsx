import { Input } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HospitalValues, hospitalSchema } from "./validation";
import { useSidebar } from "../../hooks";
import "../../pages/admin/admin.css";

export const HospitalForm = () => {
  const { isSidebarOpen } = useSidebar();
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
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm<HospitalValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(hospitalSchema),
    mode: "onBlur",
  });
  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <form className="hospital-form">
        <Input
          name="name"
          label="Hospital Name"
          register={register}
          error={errors.name?.message}
          type="text"
        />
        <Input
          name="ownership"
          label="Ownership"
          register={register}
          error={errors.ownership?.message}
          type="text"
        />
        <Input
          name="specialization"
          label="Specialization"
          register={register}
          error={errors.specialization?.message}
          type="text"
        />
        <Input
          name="email"
          label="Email Address"
          register={register}
          error={errors.email?.message}
          type="text"
        />
        <Input
          name="specialization"
          label="Specialization"
          register={register}
          error={errors.specialization?.message}
          type="text"
        />
        <Input
          name="phoneNumber"
          label="Phone Number"
          register={register}
          error={errors.phoneNumber?.message}
          type="text"
        />
        <Input
          name="website"
          label="Website"
          register={register}
          error={errors.website?.message}
          type="text"
        />
        <Input
          name="image"
          label="Image"
          register={register}
          error={errors.image?.message}
          type="text"
        />
        <textarea name="about" id="about" cols={30} rows={10}>
          About
        </textarea>
      </form>
    </main>
  );
};
