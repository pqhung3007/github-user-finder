import { FaHome, FaRegSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-lg mx-auto pt-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-8">
        Oops
        <FaRegSadCry className="inline ml-4" />
      </h1>
      <p className="text-3xl mb-12">Page Not Found!</p>
      <Link
        to="/"
        className="flex items-center space-x-4 px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:scale-95 duration-200"
      >
        <FaHome className="mr-2" />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
