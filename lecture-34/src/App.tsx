import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
