import {  useSidebar } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactValues, contactSchema } from "./validation";
import "./contact.css";
import "../admin/admin.css";
import { Input, Spinner } from "../../components";
import { FC } from "react";

export const Contact: FC = () => {
  const { isSidebarOpen } = useSidebar();

  const defaultValue = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    subject: "",
    message: "",
  };

  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(contactSchema),
    mode: "onBlur",
  });

  // const loginUserButton = useCallback(
  //   async (formData: ContactValues) => {
  //     const LoginUserInput: UserLoginRequest = {
  //       email: formData.email,
  //       password: formData.password,
  //     };
  //     const tokenResult = await userService.login(LoginUserInput);

  //     if (tokenResult == null) {
  //       return;
  //     }
  //     navigate("/");
  //   },

  //   [userService, navigate]
  // );

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <section className="contact">
        <h2>Contact Us!</h2>
        {!isSubmitting ? (
          <form
            action="https://getform.io/f/a6ac45b2-9f36-4abd-a7a9-57f4b58b7508"
            method="POST"
            className="admin-form"
          >
            <Input
              name="name"
              label="Full Name"
              register={register}
              error={errors.name?.message}
              type="text"
            />
            <Input
              name="email"
              label="Email Address"
              register={register}
              error={errors.name?.message}
              type="email"
            />
            <Input
              name="mobileNumber"
              label="Phone Number"
              register={register}
              error={errors.mobileNumber?.message}
              type="number"
            />
            <Input
              name="subject"
              label="Email Subject"
              register={register}
              error={errors.subject?.message}
              type="text"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              {...register}
              cols={30}
              rows={10}
              required
            />
            <div className="contact-button">
              <button className="button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="admin-spinner">
            <Spinner />
          </div>
        )}
      </section>
    </main>
  );
};
