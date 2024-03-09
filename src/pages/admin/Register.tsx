import { useInjectedService, useSidebar } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterValues } from "./validation";
import "./admin.css";
import { Input, Spinner } from "../../components";
import { FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUserRequest } from "../../models";

export const Register: FC = () => {
  const { isSidebarOpen } = useSidebar();
  const { userService } = useInjectedService();
  const navigate = useNavigate();

  const defaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const registerUserButton = useCallback(
    async (formData: RegisterValues) => {
      if (formData.password !== formData.confirmPassword) {
        return;
      }

      const registerUserInput: RegisterUserRequest = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      try {
        await userService.registerUser(registerUserInput);
        console.log("User created");
        navigate("../login");
      } catch (error) {
        console.error("User registration failed", error);
      }
    },

    [userService, navigate]
  );

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      {!isSubmitting ? (
        <form
          action=""
          className="admin-form"
          onSubmit={handleSubmit(registerUserButton)}
        >
          <div className="form-title">
            <h1>Register</h1>
            <p>Create an account to continue</p>
          </div>
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
          <div className=" admin-submit-button">
            <button className="button create-button">Submit</button>
          </div>
          <div className="form-link-container">
            <p>Already have an account?</p>
            <Link to={"../../admin/login"} className="form-link">
              Login
            </Link>
          </div>
        </form>
      ) : (
        <div className="admin-spinner">
          <Spinner />
        </div>
      )}
    </main>
  );
};
