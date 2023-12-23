import React from "react";
import SecondaryContainer from "../../SecondaryContainer";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import Title from "../../Title";
import ServiceOne from "../../../assets/images/ServiceOne.png";
import ServiceTwo from "../../../assets/images/ServiceTwo.png";
import ServiceThree from "../../../assets/images/ServiceThree.png";
import ClienLogo from "../../../assets/images/client_logo.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="pt-28 pb-36 bg-gradient-to-t from-BannerColor via-BannerColor to-white">
      <Container className={` pb-32`}>
        <div className="text-center mb-10 mt-7">
          <Title text={`SERVICE`} />
          <Heading>
            09+ Years Experience <br /> in This Field
          </Heading>
        </div>
        <Flex className={`justify-between`}>
          <ServiceCard text={"Web & Development"} src={ServiceOne} />
          <ServiceCard text={"Graphic Design"} src={ServiceTwo} />
          <ServiceCard text={"Writing and Marketing"} src={ServiceThree} />
        </Flex>
      </Container>
      <SecondaryContainer>
        <div>
          <img className="w-full" src={ClienLogo} alt="" />
        </div>
      </SecondaryContainer>
    </section>
  );
};

export default Service;
