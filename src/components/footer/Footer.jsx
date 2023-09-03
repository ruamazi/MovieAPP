import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h5>Website Coded By Mohssin Aoulad</h5>

      <p className="copyright-text">© {currentYear} All rights reserved</p>
    </div>
  );
};

export default Footer;
