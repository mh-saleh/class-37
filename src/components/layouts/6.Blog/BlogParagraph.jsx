import React from "react";

const BlogParagraph = ({ children }) => {
  return (
    <p className="font-Jost font-medium text-primary text-lg flex  custom-xs:flex-wrap custom-xs:justify-center  items-center  gap-3">
      {children}
    </p>
  );
};

export default BlogParagraph;
