import React, { useState, useEffect, createContext } from "react";
import Layout from "./Layout";
import Header from "./Header";
import PostTitle from "./PostTitle";
import PostMain from "./PostMain";
import BlogInfo from "../components/BlogInfo";

interface PostData {
  id: number;
  title: string;
  cover: string;
  content: string;
}

const PostContext = createContext<PostData | null>(null);

const Posts: React.FC = () => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
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

    fetchData();
  }, []);

  if (!post) return null;

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <BlogInfo />
        <Header />
        <PostTitle cover={post.cover} />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export { PostContext };
export default Posts;
