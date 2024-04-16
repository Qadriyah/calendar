import React from "react";
import moment from "moment";

interface IProps {
  date: string;
  onNext: () => void;
  onPrev: () => void;
}

const Title: React.FC<IProps> = ({ date, onNext, onPrev }) => {
  return (
    <div className="flex p-[20px] border-b border-b-gray-400 mb-[20px]">
      <div className="left-button" data-testid="left-button" onClick={onPrev} />
      <div className="flex-1 text-center font-bold">
        {moment(date).format("MMM, YYYY")}
      </div>
      <div
        className="right-button"
        data-testid="right-button"
        onClick={onNext}
      />
    </div>
  );
};

export default Title;
