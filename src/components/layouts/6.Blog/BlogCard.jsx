import React from "react";
import BlogImage from "../../../assets/images/BlogImage.png";
import { RiUserLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import ChatLogo from "../../Icons/Chat";
import Flex from "../../Flex";
import BlogParagraph from "./BlogParagraph";

const BlogCard = ({ Name, Date, TotalComments, text }) => {
  return (
    <div className="mt-2">
      <Flex className=" custom-lg:border custom-lg:border-borderColor border-1 flex-wrap-reverse custom-xs:text-center custom-xs:mx-auto custom-sm:max-w-[1100px] custom-lg:max-w-container custom-sm:justify-center custom-sm:gap-2 custom-sm:border custom-sm:border-borderColor custom-xs:justify-center">
        <Flex className="custom-sm:flex-col custom-xs:flex-row gap-3 pt-10 pl-11 pr-24  custom-xs:mx-auto custom-sm:border-r custom-sm:border-borderColor custom-sm:mb-2 custom-lg:border-0">
          <BlogParagraph>
            <RiUserLine />
            {Name}
          </BlogParagraph>
          <BlogParagraph>
            <LuClock />
            {Date}
          </BlogParagraph>
          <BlogParagraph>
            <ChatLogo />
            {TotalComments} Comments
          </BlogParagraph>
        </Flex>
        <div className="p-5  custom-lg:border-x custom-lg:border-borderColor custom-xs:mx-auto max-w-[360px]">
          <img src={BlogImage} alt="" />
        </div>
        <div className="box-border max-w-[490px]  custom-lg:py-20 custom-lg:pl-10   font-Vol font-medium text-primary text-2xl cursor-pointer hover:text-secondary duration-500 custom-sm:pt-5 ">
          <p>{text}</p>
        </div>
      </Flex>
    </div>
  );
};

export default BlogCard;
