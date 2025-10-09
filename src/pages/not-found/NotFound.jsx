import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-faint px-6 text-center">
      <div className="max-w-md">
        <AlertTriangle className="w-16 h-16 text-secondary mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you’re looking for might have been removed, renamed, or
          doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-secondary-500 hover:bg-secondary-400 text-white font-medium px-6 py-3 rounded-lg transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
