import React from "react";

type IProps = {
  data: string;
};

const EmptyCell: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-center text-gray-400 p-2 cursor-not-allowed">
      {data}
    </div>
  );
};

export default EmptyCell;
