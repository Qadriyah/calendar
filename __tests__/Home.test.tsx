import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe } from "node:test";
import Home from "../src/app/page";
import moment from "moment";

describe("Home", () => {
  afterEach(cleanup);

  it("should show a selected date on the calendar", () => {
    const calendar = render(<Home />);
    const elements = calendar.getAllByTestId("data-cell");
    fireEvent.click(
      elements[Math.floor(Math.random() * moment().daysInMonth()) + 1]
    );
    const element = calendar.container.querySelector(".data-test-class");
    expect(element).toBeInTheDocument();
  });
});
