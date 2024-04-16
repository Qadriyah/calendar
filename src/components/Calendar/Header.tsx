import React from "react";

const Header = (): JSX.Element => {
  return (
    <>
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
        <div
          key={day}
          className="flex items-center justify-center p-2 font-bold"
        >
          {day}
        </div>
      ))}
    </>
  );
};

export default Header;
