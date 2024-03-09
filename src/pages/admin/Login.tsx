import { useInjectedService, useSidebar } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginValues } from "./validation";
import "./admin.css";
import { Input, Spinner } from "../../components";
import { FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLoginRequest } from "../../models";

export const Login: FC = () => {
  const { isSidebarOpen } = useSidebar();
  const { userService } = useInjectedService();
  const navigate = useNavigate();

  const defaultValue = { email: "", password: "" };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const loginUserButton = useCallback(
    async (formData: LoginValues) => {
      const LoginUserInput: UserLoginRequest = {
        email: formData.email,
        password: formData.password,
      };
      const tokenResult = await userService.login(LoginUserInput);

      if (tokenResult == null) {
        return;
      }
      navigate("/");
    },

    [userService, navigate]
  );

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      {!isSubmitting ? (
        <form
          action=""
          className="admin-form"
          onSubmit={handleSubmit(loginUserButton)}
        >
          <div className="form-title">
            <h1>Login</h1>
            <p>Type in your email and password to continue</p>
          </div>
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
          <div className=" admin-submit-button">
            <button className="button create-button">Submit</button>
          </div>
          <div className="form-link-container">
            <p>Don't have and account?</p>
            <Link to={"../../admin/register"} className="form-link">
              Create Account
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
