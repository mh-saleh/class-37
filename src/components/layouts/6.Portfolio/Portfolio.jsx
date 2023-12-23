import React from "react";
import SecondaryContainer from "../../SecondaryContainer";
import Heading from "../../Heading";
import PortfolioImage from "../../../assets/images/Portfolio.png";
import ColoredHeading from "../../ColoredHeading";
import ProjectCard from "./ProjectCard";
import Flex from "../../Flex";
import Container from "../../Container";

const Portfolio = () => {
  return (
    <section className="bg-BannerColor py-32">
      <SecondaryContainer>
        <Heading className={`mb-10 text-center`}>My Working Portfolio</Heading>
        <img src={PortfolioImage} alt="" />
        <Flex className="flex-col gap-28">
          <div className={`text-center mt-32`}>
            <ColoredHeading text={`View all Projects`} />
          </div>
          <Container>
            <ProjectCard />
          </Container>
        </Flex>
      </SecondaryContainer>
    </section>
  );
};

export default Portfolio;
