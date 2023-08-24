import React from "react";
import "./errorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="h1-container">
        <h1>Page Not Found!</h1>
      </div>

      <div className="back-container">
        <p>Go back to home page</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
