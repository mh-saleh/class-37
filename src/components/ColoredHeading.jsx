import React from "react";

const ColoredHeading = ({ text, className }) => {
  return (
    <h3
      className={`font-Vol font-semibold text-secondary text-colorHeading  border-b-2 
      border-secondary inline-block ${className}`}
    >
      {text}
    </h3>
  );
};

export default ColoredHeading;
