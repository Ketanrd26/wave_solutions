import React, { useEffect, useRef } from "react";
import Herosection from "../../comps/herosection/Herosection";
import TwoCol from "../../comps/two_col/TwoCol";
import "./Home.scss";
import gsap from "gsap";
import target from "../../assets/icons/targeted.png";
import target_colored from "../../assets/icons/targeted_colored.png";
import website from "../../assets/icons/web-design.png";
import website_colred from "../../assets/icons/web-design_colred.png";
import { FaArrowRight } from "react-icons/fa6";
import video from "../../assets/ad.webm";
import tp from "../../assets/tp.jpg";
import { Link } from "react-router-dom";
import Whychoose from "../../comps/choose/Whychoose";
import HerosectionTwo from "../../comps/herosection2/HerosectionTwo";
import ReactPlayer from "react-player";
import logo1 from "../../assets/moulees.webp";
import logo2 from "../../assets/gandhi_travels.png";
import logo3 from "../../assets/rohini_platsic.webp";
import logo4 from "../../assets/parmeshwar.webp";
import logo5 from "../../assets/shree_logo.png";

const Home = () => {
  const videoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      {
        scale: 0.8,
        y: 80,
      },
      {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".video_section",
          start: "top 50%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  const projectData = [
    {
      projectImage: tp,
      category: "Development",
      title: "Tattoo Website",
      project_link: "",
    },
    {
      projectImage: tp,
      category: "Development",
      title: "Manufacured Website",
      project_link: "",
    },
    {
      projectImage: tp,
      category: "Development",
      title: "Ploting Developer CRM Software",
      project_link: "",
    },
    {
      projectImage: tp,
      category: "Development",
      title: "Travellers Website",
      project_link: "",
    },
  ];
  return (
    <>
      <HerosectionTwo />
      <Herosection />
      <div class="video_section parent">
        <div class="video_sec_cont cont">
          <div class="video" ref={videoRef}>
            <div class="react_wrpaerer">
              <ReactPlayer
                className="react-player"
                url={video}
                width="100%"
                height="100%"
                playing={true}
                playsinline
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
      <TwoCol />

      {/* <div class="crousel_parent">
        <p>*Inspired with creativity</p>
        <p>*unlock the potential</p>
        <p>*Transofrm ideas into reality</p>
        <p>*Design & development craft</p>
        <p>*unlock the potential</p>
        <p>*Transofrm ideas into reality</p>
      </div> */}

      <div class="about_us_parent bg-img-cover parent" id="about" >
        <div class="about_us_cont cont">
          <div class="left">
            <div class="image bg-img-cover"></div>
            <div class="image_sen">
              <div class="inner">
                we are <br />
                developers
              </div>
            </div>
            <div class="image_thi bg-img-cover"></div>
            <div class="dotted_img bg-img-cover"></div>
          </div>
          <div class="right">
            <p className="tag">get to know us</p>
            <h3 className="heading">The Best Digital Marketing Solutions</h3>
            <p className="content">
              We help businesses grow with cutting-edge digital marketing
              strategies, innovative web design, and powerful e-commerce
              solutions. Our expert team is dedicated to crafting results-driven
              campaigns that boost engagement, visibility, and sales.
            </p>

            <div class="list">
              <div class="lits_item">
                <div class="left_icon">
                  <div class="icon">
                    <img src={target} alt="" className="icon_image" />
                    <img
                      src={target_colored}
                      alt=""
                      className="icon_color_image"
                    />
                  </div>
                </div>
                <div class="right_content">
                  <h3>Leading in Marketing</h3>
                  <p>
                    We apply advanced marketing strategies to enhance brand
                    presence and drive conversions effectively.
                  </p>
                </div>
              </div>
              <div class="lits_item">
                <div class="left_icon">
                  <div class="icon">
                    <img src={website} alt="" className="icon_image" />
                    <img
                      src={website_colred}
                      alt=""
                      className="icon_color_image"
                    />
                  </div>
                </div>
                <div class="right_content">
                  <h3>Creative Web Design</h3>
                  <p>
                    We create stunning, user-friendly websites that leave a
                    lasting impression and improve user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="our_projects parent" id="projects" >
        <div class="our_projects_cont">
          <h4>
            Explore our new recently <br />
            completed projects.
          </h4>
          <div class="list">
            {projectData.map((item, index) => (
              <Link
                to={item.project_link}
                class="card  bg-img-cover "
                style={{ backgroundImage: `url(${item.projectImage})` }}
              >
                <div class="content">
                  <div class="arrow">
                    <FaArrowRight />
                  </div>
                  <p>{item.category}</p>
                  <h5>{item.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div class="our_clients parent">
        <div class="our_cleints_cont cont">
          <h2>
            Our <span>Clients</span>
          </h2>
          <div class="list">
            <img src={logo1} className="logo" alt="" />
            <img src={logo2} className="logo" alt="" />
            <img src={logo3} className="logo" alt="" />
            <img src={logo4} className="logo" alt="" />
            <img src={logo5} className="logo" alt="" />

            {/* <div class="logo"></div>
            <div class="logo"></div> */}
          </div>
        </div>
      </div>

      <Whychoose />

      <div class="blogs_parent parent">
        <div class="blog_cont cont">
          <h2>
            Checkout latest news <br />
            updates & <span>articles</span>
          </h2>

          <div class="blog_list">
            <div class="blog_card">
              <div class="image_section">
                <div class="image bg-img-cover"></div>
              </div>
              <div class="content_section">
                <h2>Five ways that can develop your business website</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, necessitatibus. Labore molestiae facilis suscipit
                  Accusantium, necessitatibus. Labore molestiae facilis suscipit
                </p>
              </div>
              <div class="bottom">
                <p>Read more</p>
                <div class="arrow_btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
