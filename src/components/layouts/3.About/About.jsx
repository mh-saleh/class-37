import React from "react";
import Flex from "../../Flex";
import Heading from "../../Heading";
import Title from "../../Title";
import AboutImage from "../../../assets/images/About.png";
import Paragraph from "../../Paragraph";
import Button from "../../Button";
import Container from "../../Container";

const About = () => {
  return (
    <section className="py-28 bg-gradient-to-t from-BannerColor via-BannerColor to-white">
      <Container>
        <Flex className={`justify-between items-center`}>
          <Flex className={`flex-col gap-2`}>
            <Title text="ABOUT ME" />
            <Heading>
              At The Heart of Design is An <br /> Opportunity to Problem Solve.
            </Heading>
            <img src={AboutImage} alt="" />
          </Flex>
          <div>
            <Paragraph className={`mt-20`}>
              Solvency based award-winning design director and UI/UX <br />
              design expert with 10 years of experience in design and <br />
              management.
            </Paragraph>
            <Paragraph className="my-8">
              Internum various sit a met mattes ululate denim. Orcin <br />
              asellus celestas tells rut rum tells pelletised eu. Nunc
              <br />
              pulvinar supine et ligula albacore.
            </Paragraph>
            <div>
              <Button />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
