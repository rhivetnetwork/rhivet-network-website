import React from "react";

interface HeaderTitleProps {
  title: string;
  HeaderTitleRef?: any;
  className?: string;
}

const HeaderTitle = ({
  title,
  HeaderTitleRef,
  className = "",
}: HeaderTitleProps) => {
  return (
    <h1
      ref={HeaderTitleRef}
      className={`text-5xl font-bold text-white ${className}`}
    >
      {title}
    </h1>
  );
};

export default HeaderTitle;
