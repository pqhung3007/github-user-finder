import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="flex items-center justify-between px-12 h-16 shadow-lg bg-white text-slate-700">
      <div className="flex space-x-4 items-center">
        <FaGithub className="text-3xl" />
        <Link to="/" className="text-lg font-bold">
          {title}
        </Link>
      </div>

      <div className="flex justify-end">
        <Link
          to="/"
          className="py-3 px-6 rounded-lg hover:bg-slate-100 duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="py-3 px-6 rounded-lg hover:bg-slate-100 duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

// similar to TypeScript type checking
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
