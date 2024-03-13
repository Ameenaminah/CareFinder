import { render, screen } from "@testing-library/react";
import { TestWrapper } from "./_TestWrapper.tsx";
import { Home } from "../pages";

describe("Hospital home page", () => {
  it("should have a copy header", () => {
    render(
      <TestWrapper>
        <Home/>
      </TestWrapper>
    );
    
    const header = screen.getByText(/Find Nearest Hospital/i);
    expect(header).toBeVisible();
  });
  
  it("should display a navigation link to hospitals page", async () => {
    render(
      <TestWrapper>
        <Home/>
      </TestWrapper>
    ); 

    const findButton = screen.getByText(/Find Hospital/i).closest('a')!;

    // await fireEvent.click(findButton);

    expect(findButton).toBeVisible;
    expect(findButton).toHaveAttribute('href', '/hospitals');
  });

});
