import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
