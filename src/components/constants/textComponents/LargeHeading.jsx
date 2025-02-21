import React from "react";

export const LargeHeading = ({ children, className, style, ...props }) => {
  return (
    <h2
      style={style}
      className={`font-barlow text-xlcaptionLarge sm:text-mdsubTitle 7xl:text-title leading-none font-extrabold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};
