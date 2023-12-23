import React from "react";

const Button = ({ className }) => {
  return (
    <div className={`bg-secondary inline-block ${className}`}>
      <button className="font-Jost font-medium text-lg text-white border border-white py-5 px-11 m-1">
        Download CV
      </button>
    </div>
  );
};

export default Button;
