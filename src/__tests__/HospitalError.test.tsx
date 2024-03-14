import { render, screen } from "@testing-library/react";
 import { HospitalError } from "../components";
import { TestWrapper } from "./_TestWrapper";

describe("Hospital error page", () => {
  
  it("should have a button to add new hospital", () => {
    render(
      <TestWrapper>
        <HospitalError />
      </TestWrapper>
    );

    const addNew = screen.getByRole("heading");
    expect(addNew).toBeInTheDocument();
  });

  it("should have a button to go back", () => {
    render(
      <TestWrapper>
        <HospitalError />
      </TestWrapper>
    );

    const goBack = screen.getByText(/Back to Hospitals/i);
    expect(goBack).toBeInTheDocument();
  });

});
