import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe } from "node:test";
import Calendar from "../src/components/Calendar/Calendar";
import moment from "moment";

describe("Calendar", () => {
  const date = moment().toISOString();
  const handleSelect = jest.fn();

  afterEach(cleanup);

  it("should render the data cells", () => {
    render(<Calendar selectedDate={date} onSelect={handleSelect} />);
    const elements = screen.getAllByTestId("data-cell");
    expect(elements).toHaveLength(moment(date).daysInMonth());
  });

  it("should display the next month", async () => {
    render(<Calendar selectedDate={date} onSelect={handleSelect} />);
    const nextButton = await screen.findByTestId("right-button");
    fireEvent.click(nextButton);
    const element = screen.getByText(moment().add(1, "M").format("MMM, YYYY"));
    expect(element).toBeInTheDocument();
  });

  it("should display the previous month", async () => {
    render(<Calendar selectedDate={date} onSelect={handleSelect} />);
    const nextButton = await screen.findByTestId("left-button");
    fireEvent.click(nextButton);
    const element = screen.getByText(
      moment().subtract(1, "M").format("MMM, YYYY")
    );
    expect(element).toBeInTheDocument();
  });

  it("should display the current day", () => {
    const { container } = render(
      <Calendar selectedDate={date} onSelect={handleSelect} />
    );
    const element = container.querySelector(".data-test-class");
    expect(element).toBeInTheDocument();
  });

  it("should not display the current day for the next month", async () => {
    const calendar = render(
      <Calendar selectedDate={date} onSelect={handleSelect} />
    );
    const nextButton = await calendar.findByTestId("right-button");
    fireEvent.click(nextButton);
    const element = calendar.container.querySelector(".data-test-class");
    expect(element).toBeNull();
  });
});
