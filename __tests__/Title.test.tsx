import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe } from "node:test";
import moment from "moment";
import Title from "../src/components/Calendar/Title";

describe("Title", () => {
  const handlePrevClick = jest.fn();
  const handleNextClick = jest.fn();
  beforeEach(() => {
    const date = moment().toISOString();
    render(
      <Title date={date} onNext={handleNextClick} onPrev={handlePrevClick} />
    );
  });

  afterAll(cleanup);

  it("should have a month in the title", () => {
    const element = screen.getByText(moment().format("MMM, YYYY"));
    expect(element).toBeInTheDocument();
  });

  it("should click the next button", async () => {
    const nextButton = await screen.findByTestId("right-button");
    fireEvent.click(nextButton);
    expect(handleNextClick).toHaveBeenCalledTimes(1);
  });

  it("should click the previous button", async () => {
    const prevButton = await screen.findByTestId("left-button");
    fireEvent.click(prevButton);
    expect(handlePrevClick).toHaveBeenCalledTimes(1);
  });
});
