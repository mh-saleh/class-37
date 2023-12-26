import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import FooterAllMenu from "./FooterAllMenu";
import FooterLeft from "./FooterLeft";

const Footer = () => {
  return (
    <section className="bg-BannerColor px-[2vw]">
      <Container className="py-20 border-b border-[#00413D]">
        <Flex className={`justify-center gap-12 flex-wrap`}>
          <FooterLeft />
          <FooterAllMenu />
        </Flex>
      </Container>
      <div className="py-8">
        <p className="font-Jost font-normal text-[#4B7773] text-xs text-center">
          Copyright © 2023 Design By Estiak. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
