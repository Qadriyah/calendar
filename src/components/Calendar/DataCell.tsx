import React from "react";
import moment from "moment";

type IProps = {
  data: number;
  date: string;
  selectedDate?: string;
  onSelect: (date: string) => void;
};

const DataCell: React.FC<IProps> = ({ data, date, selectedDate, onSelect }) => {
  const currentMonth = moment().format("MM YYYY");
  const currentDay = +moment().format("D");
  const cellDate = `${moment(date).format("YYYY-MM")}-${moment()
    .date(data)
    .format("DD")}`;

  return (
    <div
      className={`flex items-center justify-center p-2 cursor-pointer hover:bg-gray-200 ${
        currentMonth === moment(date).format("MM YYYY") && currentDay === data
          ? "bg-green-600 text-white font-bold rounded-[4px] hover:bg-green-600 data-test-class"
          : ""
      } ${
        selectedDate === cellDate
          ? "bg-blue-300 hover:bg-blue-300 selected-test-class"
          : ""
      }`}
      onClick={() => onSelect(cellDate)}
      data-testid="data-cell"
    >
      {data}
    </div>
  );
};

export default DataCell;
