import React from "react";

const Container = ({ children, className, id }) => {
  return (
    <div className={`p-7 sm:p-10 xl:p-20 ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
