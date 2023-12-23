import React from "react";

const FooterList = ({ className, text }) => {
  return (
    <li>
      <a
        href="#"
        className={`font-Jost font-normal text-FooterListColor text-base hover:text-secondary duration-500 ${className}`}
      >
        {text}
      </a>
    </li>
  );
};

export default FooterList;
