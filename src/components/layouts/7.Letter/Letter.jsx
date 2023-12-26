import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import LetterBtn from "./LetterBtn";

const Letter = () => {
  return (
    <section className="bg-BannerColor">
      <Container className={`bg-secondary box-border py-9 px-16`}>
        <Flex className={`justify-center gap-10 flex-wrap`}>
          <Flex className={`flex-col`}>
            <h4 className="font-Vol font-bold text-white text-colorHeading">
              Subscribe to our Youtube!
            </h4>
            <p className="font-Jost font-normal text-lg text-white mt-1">
              Please like and subscribe to my channel and press the bell icon
              <br /> to get new video updates.
            </p>
          </Flex>

          <div>
            <Flex className={`flex-wrap gap-y-3`}>
              <input
                type="email"
                placeholder="Enter your email"
                className="py-6 pl-5 pr-40 placeholder:text-white placeholder:text-sm placeholder:font-Jost placeholder:font-normal border border-white mr-3 bg-transparent outline-none caret-white"
              />
              <LetterBtn />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Letter;
