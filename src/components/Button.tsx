import Link from "next/link";
import React, { Component, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ButtonProps = {
  id?: string;
  onClick?: any;
  customStyles?: string;
  textStyle?: any;
  text: string;
  icon?: ReactNode;
  customButtonStyle?: StyleSheet;
};

function Button({
  id,
  onClick,
  customStyles,
  textStyle,
  text,
  icon,
}: ButtonProps) {
  const handleClick = () => {
    onClick;
  };
  return (
    <div
      id={id}
      onClick={handleClick}
      className={`focus:outline-none focus:ring active:text-red-700 my-10 hover:cursor-pointer flex flex-row items-center gap-3 ${customStyles}`}
    >
      <span className={`text-4xl text-white relative ${textStyle}`}>
        {text}
      </span>
      {icon}
    </div>
  );
}

export default Button;
