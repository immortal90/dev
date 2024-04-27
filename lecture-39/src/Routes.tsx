import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
