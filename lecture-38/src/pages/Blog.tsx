import Layout from "../components/Layout";
import Posts from "../components/Posts";
import BlogContext from "../components/BlogContext";

function Blog() {
  const blogName = "Блог Копача Ігоря";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;
