import React from "react";

export const Heading = ({ children, className, style, ...props }) => {
  return (
    <h1
      style={style}
      className={`font-barlow text-captionLarge xl:text-mdcaptionLarge 4xl:text-xlcaptionLarge 7xl:!text-subTitle leading-none font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
