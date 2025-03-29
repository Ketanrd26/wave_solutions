import React from "react";
import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";    
import { IoMailOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div class="contact_parent parent">
        <div class="contact_cont cont">
          <div class="top_section">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              nam, sequi itaque quidem beatae provident!
            </p>
          </div>
          <div class="social_media_icons">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
            <FaXTwitter />
            </a>
            <a href="">
            <FaWhatsapp />
            </a>
            <a href="">
            <IoMailOutline />
            </a>
          </div>  
        </div>
      </div>

      <div class="contact_form_parent parent">
        <div class="contact_form_cont cont">
          <div class="left">
            <div class="top">
              <h1>lorem lipsum to next to words</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                rerum perspiciatis placeat unde similique necessitatibus!
              </p>
            </div>

            <div class="steps">
              <div class="step1">
                <div class="top">
                  <h2>Lorem ipsum dolor sit.</h2>

                  <div class="icon">
                    <span>1</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, aspernatur.
                </p>
              </div>
              <div class="step1">
                <div class="top">
                  <h2>Lorem ipsum dolor sit.</h2>

                  <div class="icon">
                    <span>1</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, aspernatur.
                </p>
              </div>
              <div class="step1">
                <div class="top">
                  <h2>Lorem ipsum dolor sit.</h2>

                  <div class="icon">
                    <span>1</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <form action="" className="form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Contact Number" />
              <input type="text" placeholder="Email Id" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <div class="button_cp">
                <button className="btn btn_list" type="submit">
                  <div class="text">submit</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
