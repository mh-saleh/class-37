import React from "react";
import BannerText from "../../../assets/images/banner-text.png";

const BannerHeading = () => {
  return (
    <h2 className="font-Vol font-normal text-mainHeading text-primary">
      Steven Product <br />
      <span>
        <img src={BannerText} alt="" />
      </span>
    </h2>
  );
};

export default BannerHeading;
