import React, { useState } from "react";
import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { Modal } from "antd";
const Contact = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();
   
    const date = getDate.toDateString()

    console.log(date,"date")

    formDatab.append("Date",date)

    fetch(
      "https://script.google.com/macros/s/AKfycbwGJ6JmsJhaS9goDhQBDlmtG3aKrPLraWSclDWA3tehk_d1tcL-gOeHW3E_zti4lznD/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsSubmitting(false); // Reset submitting state
        showModal(); // Show success modal
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

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
            <a href="https://www.instagram.com/wavesolutions2024?igsh=OGtmamFpY2k5Mjdl" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com/WaveSolutions02" target="blank">
              <FaXTwitter />
            </a>
            <a href="https://wa.me/+917028997574" target="blank">
              <FaWhatsapp />
            </a>
            <a href="mailto:wavesolutions024@gmail.com" target="_blank">
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
            <form action="" className="form"  onSubmit={Submit} >
              <input type="text" name="fName" placeholder="First Name" />
              <input type="text" name="Lname" placeholder="Last Name" />
              <input type="text" name="contact" placeholder="Contact Number" />
              <input type="text"   name="email" placeholder="Email Id" />
              <textarea name="message" id=""  placeholder="Message"></textarea>
              <div class="button_cp">
                <button className="btn btn_list" type="submit" disabled={isSubmitting} >
                  <div className ="text"> {isSubmitting ? "Submitting..." : "Submit"}</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Your message has been sent successfully!</p>
        <button
          className="btn-activated green-btn"
          onClick={handleOk}
        >
          <div className="btn_text" style={{ fontSize: "20px" }}>OK</div>
        </button>
      </Modal>
    </>
  );
};

export default Contact;
