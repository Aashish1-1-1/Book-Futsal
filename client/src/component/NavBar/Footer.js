import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {currentYear} Book Futsal</p>
        </div>
        <div className="footer-right">
          <a href="index.html">Privacy Policy</a>
          <a href="index.html">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

