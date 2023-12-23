import React from "react";

const FooterHeading = ({ className, text }) => {
  return (
    <p
      className={`font-Vol font-bold text-FooterListColor text-xl mb-6 ${className}`}
    >
      {text}
    </p>
  );
};

export default FooterHeading;
