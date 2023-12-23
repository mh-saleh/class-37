import React, { Children } from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p className={`font-Jost font-normal text-lg text-primary ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
