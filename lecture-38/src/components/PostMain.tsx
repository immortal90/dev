import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./Posts";

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
    <div className="post-main bg-gray-100 rounded-lg p-4">
      <div className="post-footer">
        <p className="text-gray-800">{post.content}</p>
        <button
          id="like"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </div>
  );
};

export default PostMain;
