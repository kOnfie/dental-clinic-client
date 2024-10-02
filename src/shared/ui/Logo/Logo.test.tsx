import { render } from "@testing-library/react";
import Logo from "./Logo";
import { MemoryRouter } from "react-router-dom";

describe("Logo component", () => {
  it("should render logo component", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/");
  });
});
