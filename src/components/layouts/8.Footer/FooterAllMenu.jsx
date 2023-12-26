import React from "react";
import FooterHeading from "./FooterHeading";
import Flex from "../../Flex";
import FooterList from "./FooterList";

const FooterAllMenu = () => {
  return (
    <Flex className={`gap-40 justify-center flex-wrap`}>
      <div>
        <FooterHeading text="Product" />
        <ul>
          <Flex className={`flex-col gap-3`}>
            <FooterList text={`Features`} />
            <FooterList text={`Pricing`} />
            <FooterList text={`Case studies`} />
            <FooterList text={`Reviews`} />
            <FooterList text={`Updates`} />
          </Flex>
        </ul>
      </div>
      <div>
        <FooterHeading text="Company" />
        <ul>
          <Flex className={`flex-col gap-3`}>
            <FooterList text={`About`} />
            <FooterList text={`Contact us`} />
            <FooterList text={`Careers`} />
            <FooterList text={`Culture`} />
            <FooterList text={`Blog`} />
          </Flex>
        </ul>
      </div>
      <div>
        <FooterHeading text="Support" />
        <ul>
          <Flex className={`flex-col gap-3`}>
            <FooterList text={`Getting started`} />
            <FooterList text={`Help center`} />
            <FooterList text={`Server status`} />
            <FooterList text={`Report a bug`} />
            <FooterList text={`Chat support`} />
          </Flex>
        </ul>
      </div>
      <div>
        <FooterHeading text="Downloads" />
        <ul>
          <Flex className={`flex-col gap-3`}>
            <FooterList text={`iOS`} />
            <FooterList text={`Android`} />
            <FooterList text={`Mac`} />
            <FooterList text={`Windows`} />
            <FooterList text={`Chrome`} />
          </Flex>
        </ul>
      </div>
    </Flex>
  );
};

export default FooterAllMenu;
