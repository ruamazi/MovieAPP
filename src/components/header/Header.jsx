import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">M.A Movie APP</div>
      </Link>

      <div className="user-image">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5974/5974636.png"
            alt="user picture"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
