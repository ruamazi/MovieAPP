import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h5>Website Coded By Mohssin Aoulad</h5>
      <div className="wts-cont">
        <img
          className="wts-icon"
          src="https://cdn-icons-png.flaticon.com/512/2504/2504845.png"
          alt=""
        />
        <p>+212 624-643204</p>
      </div>
      <p className="copyright-text">© {currentYear} All rights reserved</p>
    </div>
  );
};

export default Footer;
