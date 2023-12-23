import React from "react";

const SecondaryContainer = ({ children, className }) => {
  return (
    <div className={`max-w-secondaryContainer mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default SecondaryContainer;
