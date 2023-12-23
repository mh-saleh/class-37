import React from "react";
import BannerHeading from "./BannerHeading";
import Title from "../../Title";
import Paragraph from "../../Paragraph";
import ColoredHeading from "../../ColoredHeading";
import Flex from "../../Flex";
import BannerImage from "../../../assets/images/Banner.png";
import SecondaryContainer from "../../SecondaryContainer";

const Banner = () => {
  return (
    <section className={`pt-12 pb-16 bg-BannerColor`}>
      <SecondaryContainer>
        <Flex className={`justify-between items-center`}>
          <div>
            <Title text={`UI/UX Designer`} />
            <Flex className={`flex-col gap-6`}>
              <BannerHeading />
              <Paragraph>
                You can find me on Dribble, Instagram, LinkedIn, Behance or
                Facebook. I'm working at <br /> User interface or User
                experience.
              </Paragraph>
              <div>
                <ColoredHeading text={`Steven@gmai.com`} />
              </div>
            </Flex>
          </div>
          <div>
            <img src={BannerImage} alt="" />
          </div>
        </Flex>
      </SecondaryContainer>
    </section>
  );
};

export default Banner;
