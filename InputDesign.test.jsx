import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InputDesign from "./InputDesign";

describe("InputDesign", () => {
  it("renders the main title", () => {
    render(<InputDesign />);
    expect(
      screen.getByText("How can I help you, Astronomer?"),
    ).toBeInTheDocument();
  });

  it("renders all action cards", () => {
    render(<InputDesign />);
    expect(screen.getByText("Placement")).toBeInTheDocument();
    expect(screen.getByText("Retrieve")).toBeInTheDocument();
    expect(screen.getByText("Dispose")).toBeInTheDocument();
    expect(screen.getByText("Simulate")).toBeInTheDocument();
    expect(screen.getByText("Load CSV")).toBeInTheDocument();
    expect(screen.getByText("Export CSV")).toBeInTheDocument();
    expect(screen.getByText("Log File")).toBeInTheDocument();
  });

  it("uses semantic HTML elements", () => {
    const { container } = render(<InputDesign />);
    expect(container.querySelector("main")).toBeInTheDocument();
    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(container.querySelector("section")).toBeInTheDocument();
    expect(container.querySelectorAll("article").length).toBeGreaterThan(0);
  });
});
