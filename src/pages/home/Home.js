import React, { useEffect, useRef } from "react";
import Herosection from "../../comps/herosection/Herosection";
import TwoCol from "../../comps/two_col/TwoCol";
import "./Home.scss";
import gsap from "gsap";
import target from "../../assets/icons/targeted.png";
import target_colored from "../../assets/icons/targeted_colored.png";
import { FaArrowRight } from "react-icons/fa6";

import tp from "../../assets/tp.jpg";
import { Link } from "react-router-dom";
import Whychoose from "../../comps/choose/Whychoose";

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
      <Herosection />
      <div class="video_section parent">
        <div class="video_sec_cont cont">
          <div class="video" ref={videoRef}></div>
        </div>
      </div>
      <TwoCol />

      <div class="crousel_parent">
        <p>*Inspired with creativity</p>
        <p>*unlock the potential</p>
        <p>*Transofrm ideas into reality</p>
        <p>*Design & development craft</p>
        <p>*unlock the potential</p>
        <p>*Transofrm ideas into reality</p>
      </div>

      <div class="about_us_parent parent">
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
            <h3 className="heading">The best digital marketing solutions</h3>
            <p className="content">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don't slightly.
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
                  <h3>Leading in marketing</h3>
                  <p>
                    Knowledge of technologies rules better than anyone which we
                    apply in our daily work
                  </p>
                </div>
              </div>
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
                  <h3>Leading in marketing</h3>
                  <p>
                    Knowledge of technologies rules better than anyone which we
                    apply in our daily work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="our_projects parent">
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
          Our <span>
          Clients
          </span>
        </h2>
        <div class="list">
        <div class="logo"></div>
          <div class="logo"></div>
          <div class="logo"></div>
          <div class="logo"></div>
          <div class="logo"></div>
        </div>
        </div>
      </div>

      <Whychoose/>
    </>
  );
};

export default Home;
