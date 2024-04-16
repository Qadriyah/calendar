import moment from "moment";
import React from "react";
import EmptyCell from "./EmptyCell";
import DataCell from "./DataCell";

interface IProps {
  date: string;
  selectedDate?: string;
  onSelect: (date: string) => void;
}

const CalendarCells: React.FC<IProps> = ({ date, selectedDate, onSelect }) => {
  const leadingCells = () => {
    const startOfMonthDate = moment(date).startOf("month");
    const startOfMonthDay = startOfMonthDate.startOf("month").day();
    const cells: JSX.Element[] = [];
    for (let i = 0; i < startOfMonthDay; i++) {
      const cellData = startOfMonthDate.subtract(1, "day").format("D");
      cells.push(<EmptyCell key={`l-${cellData}`} data={cellData} />);
    }
    return cells.reverse();
  };

  const trailingCells = () => {
    const cells: JSX.Element[] = [];
    const endOfMonthDate = moment(date).endOf("month");
    const endOfMonthDay = endOfMonthDate.endOf("month").day();
    for (let i = 0; i < 6 - endOfMonthDay; i++) {
      const cellData = endOfMonthDate.add(1, "day").format("D");
      cells.push(<EmptyCell key={`t-${cellData}`} data={cellData} />);
    }
    return cells;
  };

  const dataCells = () => {
    const cells: JSX.Element[] = [];
    for (let i = 1; i < moment(date).daysInMonth() + 1; i++) {
      cells.push(
        <DataCell
          key={`d-${i}`}
          data={i}
          date={date}
          onSelect={onSelect}
          selectedDate={selectedDate}
        />
      );
    }
    return cells;
  };

  return <>{[...leadingCells(), ...dataCells(), ...trailingCells()]}</>;
};

export default CalendarCells;
