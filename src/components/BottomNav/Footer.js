import React from "react";
import { FiHome, FiPenTool } from "react-icons/fi";
import { MdMovieFilter, MdOutlineGroupAdd } from "react-icons/md";


import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="navbar-icons">
        <FiHome className="icons" />
        <FiPenTool className="icons" />
        <MdMovieFilter className="icons" />
        <MdOutlineGroupAdd className="icons" />
        <div className="icons post-pic">
          <img alt="user profile pic" src="https://zaiocontent.s3.eu-west-2.amazonaws.com/akhil.png" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
