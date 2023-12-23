import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Halum from "../../../assets/images/SCBackground.png";

const ServiceCard = ({ src, text }) => {
  return (
    <div className="py-12 pl-12 pr-16 shadow-md relative">
      <img src={src} alt="" />
      <p className="font-Vol font-extrabold text-primary text-2xl mt-11">
        {text}
      </p>
      <p className="font-Jost font-normal text-primary tex-base opacity-70 mt-4 mb-16">
        Facilizes sed odic morbid quiz commodore <br /> odic nexus et malasadas
        fames research and <br /> brand strategy system.
      </p>
      <BsArrowRight className="text-4xl text-primary hover:text-secondary duration-500 cursor-pointer" />
      <img className="absolute bottom-0 right-0" src={Halum} alt="" />
    </div>
  );
};

export default ServiceCard;
