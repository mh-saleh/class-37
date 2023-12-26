import React from "react";
import SecondaryContainer from "../../SecondaryContainer";
import NavMenu from "./NavMenu";
import Logo from "../../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import MenuBars from "../../Icons/MenuBars";
import Flex from "../../Flex";

const Navbar = () => {
  return (
    <section
      className={`bg-BannerColor py-5 border border-b-1 border-borderColor px-[1vw]`}
    >
      <SecondaryContainer>
        <Flex
          className={`justify-center items-center gap-y-2 flex-wrap md:justify-between`}
        >
          <img src={Logo} alt="" />
          <NavMenu />
          <Flex className={`gap-4 items-center`}>
            <BiSearch className="text-3xl text-primary" />
            <MenuBars />
          </Flex>
        </Flex>
      </SecondaryContainer>
    </section>
  );
};

export default Navbar;
