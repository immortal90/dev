import React, { useState, useEffect } from "react";

interface PostData {
  id: number;
  title: string;
  cover: string;
  content: string;
}

const Post: React.FC = () => {
  const [post, setPost] = useState<PostData>({
    id: 0,
    title: "",
    cover: "",
    content: "",
  });
  const [likes, setLikes] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/immortal90/db/posts/1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like">
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Post;
