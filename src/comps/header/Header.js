import React, { useState } from "react";
import "./Header.scss";
const Header = () => {
    const [headerOpen,setHeaderOpen] = useState(false)
  return (
    <>
      <div class="header_parent parent">
        <div class="left"></div>
        <div class="right">
          <div class="hamburger"  onClick={()=>setHeaderOpen(true)} >
            <span></span>
            <span  className="middle_line" ></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class={headerOpen ? "nav_option  active" : "nav_option"}>
        <div class="overlay">

        </div>
      </div>
    </>
  );
};

export default Header;
