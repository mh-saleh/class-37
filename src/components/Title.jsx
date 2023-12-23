import React from "react";

const Title = ({ text, className }) => {
  return (
    <h5
      className={`font-Vol font-medium text-lg text-orangered uppercase ${className}`}
    >
      {text}
    </h5>
  );
};

export default Title;
