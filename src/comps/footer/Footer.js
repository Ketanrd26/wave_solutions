import React from "react";
import "./Footer.scss";
import { IoIosCall } from "react-icons/io";
import logo from "../../assets/wave solution logo.webp";
import { Link } from "react-router-dom";
import { IoMailSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div class="footer_parent parent">
        <div class="footer_cont cont">
          <div class="logo">
            <img src={logo} alt="" />
            {/* <h2>Wave Solutions</h2> */}
          </div>
          <p className="copyright" >Copyright © 2023 Wave Solutions. All rights reserved.</p>
          <div class="contact">
            <a class="phone">
              <span>
              <IoIosCall />
              </span>
              <p>+911234567890</p>
            </a>
            <a class="phone">
              <span>
              <IoMailSharp />
              </span>
              <p>wavesolutions024@gmail.com</p>
            </a>
          </div>
          <Link className="privacy" >Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
