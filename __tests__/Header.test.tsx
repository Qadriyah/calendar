import { cleanup, render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Header from "../src/components/Calendar/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  afterAll(cleanup);

  it("should display the days", () => {
    const element = screen.getByText("Su");
    expect(element).toBeInTheDocument();
  });
});
