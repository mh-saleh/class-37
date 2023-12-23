import React from "react";
import FooterHeading from "./FooterHeading";
import FooterList from "./FooterList";
import Flex from "../../Flex";
import Logo from "../../../assets/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const FooterLeft = () => {
  return (
    <div>
      <Flex className={`flex-col gap-7`}>
        <div>
          <img src={Logo} alt="" />
        </div>
        <p className="font-Jost font-normal text-FooterListColor text-base">
          Design League is the world's leading <br /> community have for
          creatives to share, grow, <br /> and learn. Design League is the
          world's <br /> leading community.
        </p>
        <Flex className={`text-gray-700 gap-1`}>
          <div className="p-1 hover:bg-secondary duration-500  hover:text-white cursor-pointer rounded-md">
            <FaFacebookF />
          </div>
          <div className="p-1 hover:bg-secondary duration-500  hover:text-white cursor-pointer rounded-md">
            <FaTwitter />
          </div>
          <div className="p-1 hover:bg-secondary duration-500  hover:text-white cursor-pointer rounded-md">
            <FaLinkedinIn />
          </div>
          <div className="p-1 hover:bg-secondary duration-500  hover:text-white cursor-pointer rounded-md">
            <FaYoutube />
          </div>
          <div className="p-1 hover:bg-secondary duration-500  hover:text-white cursor-pointer rounded-md">
            <AiFillInstagram />
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default FooterLeft;
