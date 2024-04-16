import React from "react";
import moment from "moment";

import Header from "./Header";
import Cells from "./Cells";
import Title from "./Title";
import Input from "./Input";

interface IProps {
  onSelect: (date: string) => void;
  selectedDate?: string;
}

const Calendar: React.FC<IProps> = ({ onSelect, selectedDate }) => {
  const [today, setToday] = React.useState(moment().toISOString());

  const onNext = React.useCallback(() => {
    setToday(moment(today).add(1, "M").toISOString());
  }, [today]);

  const onPrev = React.useCallback(() => {
    setToday(moment(today).subtract(1, "M").toISOString());
  }, [today]);

  return (
    <>
      <div className="border border-gray-300 bg-white shadow-lg w-[300px]">
        <Input type="text" value={selectedDate} placeholder="Selected date" />
        <Title onNext={onNext} onPrev={onPrev} date={today} />
        <div className="grid grid-cols-7">
          <Header />
          <Cells date={today} onSelect={onSelect} selectedDate={selectedDate} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
