import React from "react";
import { Body } from "../textComponents/Body";

export const GradientButton = ({ onClick, className, title, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-4 bg-gradient-to-b from-[#63ADFF] to-[#007AFF] top px-5 7xl:px-7 7xl:p-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 justify-center items-center min-w-fit ${className}`}
      {...props}
    >
      <Body className={"!text-center font-inter !font-bold"}>{title}</Body>

      {/* <span className="text-2xl">•</span> */}
    </button>
  );
};
