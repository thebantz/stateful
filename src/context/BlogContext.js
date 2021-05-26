import React from "react";

const BlogContext = React.createContext();

// named export, not export default syntax
export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
