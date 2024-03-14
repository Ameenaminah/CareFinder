import { render, screen } from "@testing-library/react";
import { TestWrapper } from "./_TestWrapper";
import { HospitalForm, Login } from "../pages";

describe("Login page tests", () => {
	it("should render the email and password fieds", () => {
		render(
			<TestWrapper>
				<Login />
			</TestWrapper>,
		);

		const emailField = document.querySelector("#email");
		const passwordField = document.querySelector("#password");
		const errorElement = document.querySelector(".error");
		const submitButton = document.querySelector("button.create-button");

		expect(emailField).toBeVisible();
		expect(passwordField).toBeVisible();
		expect(submitButton).toBeVisible();
		expect(errorElement?.innerHTML).toBe("");
	});

	// it("should display an error when a required field is missing", async () => {
	//   render(
	//     <TestWrapper>
	//       <Login/>
	//     </TestWrapper>
	//   );

	//   const submitButton =  document.querySelector("button.create-button")!;
	//   expect(submitButton).toBeVisible();
	//   await fireEvent.click(submitButton);

	//   const errorElements = document.querySelectorAll(".error");
	//   // const emailError = screen.getByText("Email is required");
	//   // const passwordError = screen.getByText("Password is required");

	//   // expect(emailError).toBeVisible();
	//   // expect(passwordError).toBeVisible();

	//   expect(errorElements?.innerHTML).toBe("Email is required");

	// });
});

describe("Hispital form tests", () => {
	it("should display the create hospital form", () => {
		render(
			<TestWrapper>
				<HospitalForm />
			</TestWrapper>,
		);

		const submitButton = screen.getByRole("button");
		expect(submitButton).toBeVisible();
		expect(submitButton.innerHTML).toBe("Create a Hospital");
	});

	it("should display the edit hospital form", async () => {
		render(
			<TestWrapper>
				<HospitalForm isEditMode={true} />
			</TestWrapper>,
		);

		const submitButton = screen.getByRole("button");
		expect(submitButton).toBeVisible();
		expect(submitButton.innerHTML).toBe("Edit a Hospital ");
	});
});
