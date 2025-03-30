import React from "react";
import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>

<Helmet>
  <title>Contact Wave Solutions - Best Digital Marketing Agency in India</title>
  <meta
    name="description"
    content="Get in touch with Wave Solutions, the best digital marketing agency in India. Let's discuss how we can grow your business with SEO, PPC, social media, and web development."
  />
  <meta
    name="keywords"
    content="digital marketing agency, best digital marketing agency, best digital marketing agency in India, digital marketing agency near me, best digital marketing agency in Pune"
  />
  <link rel="canonical" href="https://wavesolutions.in/contact" />
</Helmet>

      <div class="contact_parent parent">
        <div class="contact_cont cont">
          <div class="top_section">
            <h1>Contact Us</h1>
            <p>
              Have questions or need assistance? We're here to help! Get in touch with us, and our team will get back to you as soon as possible.
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
              <h1>Our Process to Success</h1>
              <p>
                We follow a structured approach to ensure efficiency and quality in everything we do. Here’s how we make things happen:
              </p>
            </div>

            <div class="steps">
              <div class="step1">
                <div class="top">
                  <h2>Understanding Your Needs</h2>

                  <div class="icon">
                    <span>1</span>
                  </div>
                </div>
                <p>
                  We take the time to understand your goals, requirements, and challenges to create a tailored solution that aligns with your vision.
                </p>
              </div>
              <div class="step1">
                <div class="top">
                  <h2>Strategy & Planning</h2>

                  <div class="icon">
                    <span>2</span>
                  </div>
                </div>
                <p>
                  Our team formulates a well-defined strategy, outlining the necessary steps, timelines, and resources to ensure a smooth execution.
                </p>
              </div>
              <div class="step1">
                <div class="top">
                  <h2>Implementation & Execution</h2>

                  <div class="icon">
                    <span>3</span>
                  </div>
                </div>
                <p>
                  With a solid plan in place, we bring your project to life, ensuring precision, creativity, and high-quality outcomes.
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
