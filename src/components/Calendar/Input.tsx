import React, { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IProps> = (props) => {
  return <input {...props} className="p-3 w-full text-xl outline-none" />;
};

export default Input;
