import { Link } from "react-router-dom";

const Unauthorized = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 className="text-3xl font-semibold text-gray-800 mb-2">
      403 - Access Denied
    </h1>

    <p className="text-gray-400 mb-6">
      You don't have permission to view this page.
    </p>

    <Link
      to="/dashboard"
      className="btn-primary-solid px-5 py-2.5 text-sm font-medium"
    >
      Back to Dashboard
    </Link>
  </div>
);

export default Unauthorized;
