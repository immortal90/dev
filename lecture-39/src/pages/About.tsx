import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="about-page bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <header className="text-4xl font-bold mb-4">
          Welcome to About Page
        </header>
        <section className="text-lg text-center mb-8">
          <p>This is the about page of our website.</p>
        </section>
        <footer className="text-sm text-gray-500">
          &copy; 2024 All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default About;
