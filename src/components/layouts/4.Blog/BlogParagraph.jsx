import React from "react";

const BlogParagraph = ({ children }) => {
  return (
    <p className="font-Jost font-medium text-primary text-lg flex items-center gap-3">
      {children}
    </p>
  );
};

export default BlogParagraph;
