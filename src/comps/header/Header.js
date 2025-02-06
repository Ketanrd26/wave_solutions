import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { RiLinkedinFill } from "react-icons/ri";
import gsap from "gsap";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import logo from "../../assets/wave solution logo.webp"
import logo2 from "../../assets/wave solution logo_black.webp"
const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [headerActive,setHeaderActive] = useState(false);

  useEffect(()=>{
    const headerHeightActive = ()=>{
      if(window.scrollY>1080){
        setHeaderActive(true);
      }else{
        setHeaderActive(false);

      }
    }

    window.addEventListener("scroll", headerHeightActive);

    return ()=>{
      window.removeEventListener("scroll", headerHeightActive);
    }
  })

  const navLinks = [
    {
      link_name: "HOME",
      link_path: "/",
    },
    {
      link_name: "ABOUT",
      link_path: "/about",
      desc: "Know more about Wave solutions",
    },
    {
      link_name: "PROJECTS",
      link_path: "/our-projects",
      desc: "Completed 10+ projects in 3 to 4 months",
    },
    {
      link_name: "SERVICES",
      link_path: "/services",
      desc: "give proper service is our passion",
    },
    {
      link_name: "BLOG",
      link_path: "/blog",
      desc: "reading some intresting things",
    },
  ];
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);

  useEffect(() => {
    const navElement = navRef.current;

    // Add mousemove event to move links
    const handleMouseMove = (e) => {
      linksRef.current.forEach((link, index) => {
        if (index === hoveredLinkIndex && link) {
          const rect = link.getBoundingClientRect();
          const offsetX = e.clientX - rect.left - rect.width / 2;
          const offsetY = e.clientY - rect.top - rect.height / 2;

          // Animate link to follow cursor
          gsap.to(link, {
            x: offsetX * 0.3,
            y: offsetY * 0.3,
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    };

    // Add event listeners to the navigation element
    navElement.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listeners on unmount
    return () => {
      navElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredLinkIndex]);

  const handleMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const handleMouseLeaveLink = () => {
    setHoveredLinkIndex(null);

    // Squeezy effect: Move link toward the cursor before resetting
    if (hoveredLinkIndex !== null) {
      const link = linksRef.current[hoveredLinkIndex];
      if (link) {
        gsap.to(link, {
          scaleX: 0.8,
          scaleY: 1.2,
          rotation: 15,
          duration: 0.2,
          ease: "power3.inOut",
          onComplete: () => {
            // Return to original position and scale
            gsap.to(link, {
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)",
            });
          },
        });
      }
    }
  };

  const social_links = [
    {
      icons: <RiLinkedinFill />,
      linke: "#",
    },
    {
      icons: <RiLinkedinFill />,
      linke: "#",
    },
    {
      icons: <RiLinkedinFill />,
      linke: "#",
    },
    {
      icons: <RiLinkedinFill />,
      linke: "#",
    },
  ];

  const location = useLocation();
  return (
    <>
      <div class={headerActive ? "header_parent parent active" : "header_parent parent"}>
        <div class="left">
          <img src={logo} alt="" className="logo1" />
          <img src={logo2} alt="" className="logo2" />
        </div>
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
                  <Link
                    className={
                      location.pathname === item.link_path
                        ? "active link"
                        : "link"
                    }
                    key={index}
                    to={item.link_path}
                  >
                    {item.link_name}
                  </Link>
                  <p className="desc">{item.desc}</p>
                </div>
              ))}
            </div>
            <div class="contat_icons">
              <a class="mail">
                <div class="icon">
                  <GrMail />
                </div>
                <p>info@2024@fmail.com</p>
              </a>
              <a class="mail">
                <div class="icon">
                  <MdPhoneIphone />
                </div>
                <p>info@2024@fmail.com</p>
              </a>
              <a class="mail">
                <div class="icon">
                  <MdPhoneIphone />
                </div>
                <p>info@2024@fmail.com</p>
              </a>
            </div>

            <div class="btn left_head_btn">
              <div class="text">
                Contact Us
              </div>
            </div>
          </div>
          <div className="right_nav_section" ref={navRef}>
            <div className="top">
              <div className="btn header_btn">
                <div class="text">Contact Us</div>
              </div>
              <div className="hamburger" onClick={() => setHeaderOpen(false)}>
                <RxCross2 />
              </div>
            </div>
            <div className="social_links">
              {social_links.map((item, i) => (
                <a
                  href="#"
                  key={i}
                  ref={(el) => (linksRef.current[i] = el)}
                  className="social_link"
                  onMouseEnter={() => handleMouseEnter(i)} // Detect mouse enter on each link
                  onMouseLeave={handleMouseLeaveLink} // Detect mouse leave
                >
                  {item.icons}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
