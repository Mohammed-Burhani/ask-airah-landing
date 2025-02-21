import React from "react";
import { Body } from "../textComponents/Body";

export const PrimaryButton = ({
  onClick,
  className,
  title,
  textClass,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg p-4 bg-[#FFA011] px-5 7xl:px-7 7xl:p-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 justify-center items-center min-w-fit ${className}`}
      {...props}
    >
      <Body className={`!text-center ${textClass}`}>{title}</Body>

      {/* <span className="text-2xl">•</span> */}
    </button>
  );
};
