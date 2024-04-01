import React, { Component } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ButtonProps = {
  id?: string;
  onClick?: any;
  customStyles?: any;
  textStyle?: any;
  text: string;
  link?: string;
  icon?: any;
};

function Button({
  id,
  onClick,
  customStyles,
  textStyle,
  text,
  link,
  icon,
}: ButtonProps) {
  const handleClick = () => {
    onClick;
  };
  return (
    <a
      href={link}
      id={id}
      onClick={handleClick}
      className={`focus:outline-none focus:ring active:text-red-700 my-10 hover:cursor-pointer flex flex-row gap-3   ${customStyles}`}
    >
      <span className={`text-4xl relative ${textStyle}`}>{text}</span>
      {icon}
    </a>
  );
}

export default Button;
