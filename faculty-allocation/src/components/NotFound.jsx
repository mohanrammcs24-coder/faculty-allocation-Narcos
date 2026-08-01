import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 className="text-4xl font-semibold text-gray-800 mb-2">404</h1>
    <p className="text-gray-400 mb-6">
      The page you're looking for doesn't exist.
    </p>
    <Link
      to="/dashboard"
      className="btn-primary-solid px-5 py-2.5 text-sm font-medium"
    >
      Back to Dashboard
    </Link>
  </div>
);

export default NotFound;
