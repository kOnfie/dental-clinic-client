import { render, screen } from "@testing-library/react";
import IntroSlide from "./IntroSlide";
import { MemoryRouter } from "react-router-dom";

describe("Intro slide component", () => {
  it("should render intro slide component with title", () => {
    render(
      <MemoryRouter>
        <IntroSlide
          typeSlide="services"
          title="Test title"
          btnText="Test button"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Test title")).toBeInTheDocument();
  });

  it("should render intro slide component with type 'services'", () => {
    render(
      <MemoryRouter>
        <IntroSlide
          typeSlide="services"
          title="Test title"
          btnText="Test button"
        />
      </MemoryRouter>
    );

    const element = screen.getByTestId("slide_img");
    expect(element).toHaveClass("slide_img services");

    const infoElement = screen.getByTestId("slide_info");
    expect(infoElement).toHaveClass("slide_info services");
  });

  it("should render intro slide component with type 'reviews'", () => {
    render(
      <MemoryRouter>
        <IntroSlide
          typeSlide="reviews"
          title="Test title"
          btnText="Test button"
        />
      </MemoryRouter>
    );

    const element = screen.getByTestId("slide_img");
    expect(element).toHaveClass("slide_img reviews");

    const infoElement = screen.getByTestId("slide_info");
    expect(infoElement).toHaveClass("slide_info reviews");
  });

  it("should render intro slide component with type 'about-us'", () => {
    render(
      <MemoryRouter>
        <IntroSlide
          typeSlide="about-us"
          title="Test title"
          btnText="Test button"
        />
      </MemoryRouter>
    );

    const element = screen.getByTestId("slide_img");
    expect(element).toHaveClass("slide_img reviews about");
  });
});
