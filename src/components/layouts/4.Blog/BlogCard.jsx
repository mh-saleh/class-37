import React from "react";
import BlogImage from "../../../assets/images/BlogImage.png";
import { RiUserLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import ChatLogo from "../../Icons/Chat";
import Flex from "../../Flex";
import BlogParagraph from "./BlogParagraph";

const BlogCard = ({ Name, Date, TotalComments, text }) => {
  return (
    <div className="w-container mx-auto mt-2">
      <Flex className="  border border-borderColor  box-border">
        <Flex className="flex-col gap-3 pt-10 pl-11 pr-24">
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
        <div className="p-5  border-x border-borderColor w-[360px]">
          <img src={BlogImage} alt="" />
        </div>
        <div className="box-border max-w-[490px] py-20 pl-10  font-Vol font-medium text-primary text-2xl cursor-pointer hover:text-secondary duration-500">
          <p>{text}</p>
        </div>
      </Flex>
    </div>
  );
};

export default BlogCard;
