import { useSidebar } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterValues } from "./validation";
import "./admin.css";
import { Input } from "../../components";

export const Admin = () => {
  const { isSidebarOpen } = useSidebar();

  const defaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  };

  const {
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <form action="" className="admin-form">
        <Input
          name="firstName"
          label="First Name"
          register={register}
          error={errors.firstName?.message}
          type="text"
        />
        <Input
          name="lastName"
          label="Last Name"
          register={register}
          error={errors.lastName?.message}
          type="text"
        />
        <Input
          name="email"
          label="Email Address"
          register={register}
          error={errors.email?.message}
          type="email"
        />
        <Input
          name="password"
          label="Password"
          register={register}
          error={errors.password?.message}
          type="password"
        />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          register={register}
          error={errors.confirmPassword?.message}
          type="password"
        />
        <button className="button admin-submit-button">Submit</button>
      </form>
    </main>
  );
};
