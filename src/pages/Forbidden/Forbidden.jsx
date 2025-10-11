import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-6 text-center">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">403</h1>
      <h2 className="text-3xl font-semibold mb-2">Access Denied</h2>
      <p className= "mb-6">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Forbidden;
