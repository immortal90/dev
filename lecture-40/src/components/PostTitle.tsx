import React, { useContext } from "react";
import { PostContext } from "./Posts";

interface PostTitleProps {
  cover: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ cover }) => {
  const post = useContext(PostContext);
  if (!post) return null;
  return (
    <div className="post-title">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={cover}
        alt={post.title}
      />
      <h3 className="text-xl font-bold">
        {post.title} {post.id}
      </h3>
    </div>
  );
};

export default PostTitle;
