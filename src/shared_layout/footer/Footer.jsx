import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()} Dode Bogdan. All rights reserved. <br></br>
      Email: dodebogdan@yahoo.com
    </div>
  );
};

export default Footer;
