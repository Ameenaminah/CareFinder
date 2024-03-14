import { render } from "@testing-library/react";
import { TestWrapper } from "./_TestWrapper";

describe("Hospital details page", () => {
	it("should display delete button for signed in user", () => {
		render(<TestWrapper>""</TestWrapper>);

		// const addNew = screen.getByRole("heading");
		// expect(addNew).toBeInTheDocument();
	});

	it("should not display delete button when user is not authenticated", () => {
		<TestWrapper>""</TestWrapper>;

		// const goBack = screen.getByText(/Back to Hospitals/i);
		// expect(goBack).toBeInTheDocument();
	});

	it("should display edit button when user authenticated", () => {
		<TestWrapper>""</TestWrapper>;

		// const goBack = screen.getByText(/Back to Hospitals/i);
		// expect(goBack).toBeInTheDocument();
	});

	it("should not display edit button when user is not authenticated", () => {
		<TestWrapper>""</TestWrapper>;

		// const goBack = screen.getByText(/Back to Hospitals/i);
		// expect(goBack).toBeInTheDocument();
	});
});
