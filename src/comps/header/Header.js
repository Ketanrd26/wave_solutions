import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);

  const navLinks = [
    {
      link_name: "HOME",
      link_path: "/",
    },
    {
      link_name: "ABOUT",
      link_path: "/",
      desc: "Know more about Wave solutions",
    },
    {
      link_name: "PROJECTS",
      link_path: "/",
      desc: "Completed 10+ projects in 3 to 4 months",
    },
    {
      link_name: "SERVICES",
      link_path: "/",
      desc: "give proper service is our passion",
    },
    {
      link_name: "BLOG",
      link_path: "/",
      desc: "reading some intresting things",
    },
  ];
  return (
    <>
      <div class="header_parent parent">
        <div class="left"></div>
        <div class="right">
          <div class="hamburger" onClick={() => setHeaderOpen(true)}>
            <span></span>
            <span className="middle_line"></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class={headerOpen ? "nav_option  active" : "nav_option"}>
        <div class="overlay">
          <div class="left_nav_section">
            <div class="list">
              {navLinks.map((item, index) => (
                 <div class="sections">
                 <Link key={index}  to={item.link_path} >{item.link_name}</Link>
                 <p>
                  {item.desc}
                 </p>
               </div>
              ))}
            </div>
          </div>
          <div class="right_nav_section">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
