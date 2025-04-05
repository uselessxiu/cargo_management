import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";

describe("LoginPage", () => {
  it("renders the complete login page", () => {
    render(<LoginPage />);
    expect(screen.getByText("STELLAR")).toBeInTheDocument();
    expect(screen.getByText("STASH")).toBeInTheDocument();
    expect(screen.getByText("LOGIN")).toBeInTheDocument();
  });
});

describe("Header", () => {
  it("renders navigation buttons", () => {
    render(<Header />);
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("CARGO")).toBeInTheDocument();
    expect(screen.getByText("STATS")).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(<Header />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });
});

describe("LoginForm", () => {
  it("renders form elements", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText("User ID")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("ENTER")).toBeInTheDocument();
  });
});
