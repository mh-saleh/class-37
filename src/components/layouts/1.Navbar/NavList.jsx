import React from "react";

const NavList = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="font-Jost font-normal text-lg text-primary hover:text-secondary duration-500"
      >
        {text}
      </a>
    </li>
  );
};

export default NavList;
