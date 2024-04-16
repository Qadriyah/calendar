import { cleanup, render, screen } from "@testing-library/react";
import { describe } from "node:test";
import moment from "moment";
import DataCell from "../src/components/Calendar/DataCell";

describe("DataCell", () => {
  const handleSelect = jest.fn();

  beforeEach(() => {
    const date = moment().toISOString();
    render(<DataCell data={10} date={date} onSelect={handleSelect} />);
  });

  afterAll(cleanup);

  it("should render a data cell", () => {
    const element = screen.getByText("10");
    expect(element).toBeInTheDocument();
  });
});
