import React from "react";
import NavList from "./NavList";
import Flex from "../../Flex";

const NavMenu = () => {
  return (
    <ul>
      <Flex className={`gap-20`}>
        <NavList text={`Home`} />
        <NavList text={`Projects`} />
        <NavList text={`Pages`} />
        <NavList text={`Blog`} />
        <NavList text={`Contact`} />
      </Flex>
    </ul>
  );
};

export default NavMenu;
