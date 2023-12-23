import React from "react";
import Title from "../../Title";
import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import Button from "../../Button";
import SkillBar from "../../../assets/images/skillber.png";
import Flex from "../../Flex";

const ProjectCard = () => {
  return (
    <Flex className={`justify-between`}>
      <div>
        <Title text={`OUR SKILLS`} />
        <Heading className={`mt-3`}>
          Modern Digital Creative <br /> Agency
        </Heading>
        <Paragraph className={`mt-3 mb-10`}>
          If you need to redesign your new project, new visual strategy, ux{" "}
          <br />
          structure or you do have some cool ideas for collaboration
        </Paragraph>
        <Button />
      </div>
      <div>
        <img src={SkillBar} alt="" />
      </div>
    </Flex>
  );
};

export default ProjectCard;
