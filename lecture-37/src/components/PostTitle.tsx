import React, { useContext } from "react";
import { PostContext } from "./Post";

interface PostTitleProps {
  cover: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ cover }) => {
  const post = useContext(PostContext);
  if (!post) return null;
  return (
    <div className="post-title">
      <h3>
        <img src={cover} alt={post.title} />
        {post.title} {post.id}
      </h3>
    </div>
  );
};

export default PostTitle;
