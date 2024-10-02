import { render, screen } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon", () => {
  it("should render icon component", () => {
    render(<Icon name="logo" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render icon component with animation", () => {
    render(<Icon name="logo" animation={true} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render icon component with className", () => {
    render(<Icon name="logo" className="test" />);
    expect(screen.getByTestId("icon")).toHaveClass("icon logo test");
  });
  
  it("should render animated icon component with className", () => {
    render(<Icon name="logo" className="test" animation />);
    expect(screen.getByTestId("icon")).toHaveClass("icon test");
  });
});
