import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h2
      className={`font-Vol font-medium text-subHeading text-primary ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
