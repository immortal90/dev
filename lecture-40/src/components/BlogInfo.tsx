import React, { useContext } from "react";
import BlogContext from "./BlogContext";

const BlogInfo: React.FC = () => {
  const blogName = useContext(BlogContext);

  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold text-yellow-500">{blogName}</h1>
    </div>
  );
};

export default BlogInfo;
