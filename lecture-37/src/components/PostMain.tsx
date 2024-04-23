import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./Post";

const PostMain: React.FC = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(0);

  const likeThis = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  useEffect(() => {
    const button = document.getElementById("like");
    if (button) {
      button.addEventListener("click", likeThis);
      return () => {
        button.removeEventListener("click", likeThis);
      };
    }
  }, []);

  if (!post) return null;

  return (
    <div className="post-main">
      <div className="post-footer">
        <p>{post.content}</p>
        <button id="like">
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </div>
  );
};

export default PostMain;
