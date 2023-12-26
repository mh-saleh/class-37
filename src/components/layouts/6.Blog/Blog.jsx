import React from "react";
import Title from "../../Title";
import Heading from "../../Heading";
import Flex from "../../Flex";
import BlogCard from "./BlogCard";
import Container from "../../Container";

const Blog = () => {
  return (
    <section className="bg-BannerColor pb-32">
      <Container>
        <Title text={`Our blog`} />
        <Heading className={`mt-6 mb-14`}>
          The Future of AI <br /> in Digital Marketing
        </Heading>
        <Flex className={`flex-col gap-8`}>
          <BlogCard
            Name={`By Brian Cumin`}
            Date={`March 27,2023`}
            TotalComments={24}
            text={`Personalization and Automation for Better Results`}
          />
          <BlogCard
            Name={`By Brian Cumin`}
            Date={`March 27,2023`}
            TotalComments={24}
            text={`PDigital Agency Typically has a Team Experts in Areas.`}
          />
          <BlogCard
            Name={`By Brian Cumin`}
            Date={`March 27,2023`}
            TotalComments={24}
            text={`Unlocking New Opportunities and Insights`}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
