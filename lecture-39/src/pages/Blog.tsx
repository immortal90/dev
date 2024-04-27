import Layout from "../components/Layout";
import Posts from "../components/Posts";
import BlogContext from "../components/BlogContext";
import Navigation from "../components/Navigation";

function Blog() {
  const blogName = "Блог Копача Ігоря";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Navigation />
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;
