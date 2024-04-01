import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ButtonProps = {
  id?: string;
  onClick?: any;
  customStyles?: any;
  textStyle?: any;
  text: string;
};

function Button({ id, onClick, customStyles, textStyle, text }: ButtonProps) {
  const handleClick = () => {
    onClick;
  };
  return (
    <a
      href="/hello"
      id={id}
      onClick={handleClick}
      className={`focus:outline-none focus:ring active:text-red-700 my-10 hover:cursor-pointer flex flex-row gap-3  border-b border-current  ${customStyles}`}
    >
      <span className={`text-4xl relative ${textStyle}`}>{text}</span>
      <FiArrowUpRight className="h-10 w-10" />
    </a>
  );
}

export default Button;
