"use client";
import React from "react";
import moment from "moment";
import Calendar from "../components/Calendar/Calendar";

const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format("YYYY-MM-DD")
  );

  const onSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-20 mx-auto flex flex-col justify-center">
      <Calendar selectedDate={selectedDate} onSelect={onSelect} />
    </div>
  );
};

export default Home;
