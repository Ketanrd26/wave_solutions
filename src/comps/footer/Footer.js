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
            <a class="phone" href="tel:+91 70289 97574">
              <span>
                <IoIosCall />
              </span>
              <p>+91 70289 97574</p>
            </a>
            <a class="phone">
              <span>
                <IoMailSharp />
              </span>
              <a href="mailto:wavesolutions024@gmail.com" target="_blank"><p>wavesolutions024@gmail.com</p></a>
            </a>
          </div>
          <Link to="/privacy" className="privacy" >Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
