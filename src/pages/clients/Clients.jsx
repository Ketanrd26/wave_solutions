import React, { useState } from "react";
import "./Clients.scss";
import mouleee_web from "../../assets/web_cl/moulees_web.png";
import maid_urban_web from "../../assets/web_cl/maid_urban_web.png";
import gt_web from "../../assets/web_cl/gt_web.png";
import gp_web from "../../assets/web_cl/gp_web.png";
import gs_web from "../../assets/web_cl/go_sarathi_web.png";
import medi_web from "../../assets/web_cl/medi_web.png";
import tara_web from "../../assets/web_cl/tara_web.png";

// social media
import srp from "../../assets/pandit_jewellers.png";
import maid from "../../assets/maid.png";
import dhantirth from "../../assets/dhantirht.png";
import hotel_kasturi from "../../assets/kasturi.png";
import maid_urban from "../../assets/maid_urban.png";

// web apps
import shree from "../../assets/shree_logo.png";
import jb from "../../assets/jb.png";
import gov from "../../assets/gov.webp"

const Clients = () => {
  const [clientsTab, setClientsTab] = useState("Web Apps");

  const services = [
    {
      name: "Website",
      children: [
        {
          image: mouleee_web,
          name: "Moulees Tattoo Art Studio",
          link: "https://mouleestattooart.com/",
        },
        {
          image: maid_urban_web,
          name: "Maid Urban ",
          link: "https://maid-urban-bank.vercel.app/",
        },
        {
          image: gt_web,
          name: "Gandhi Tours & Travels",
          link: "https://gandhitravels.co.in/",
        },
        {
          image: gp_web,
          name: "Gram panchayat higna",
          link: "https://gpkirmitibharkas.com/",
        },
        {
          image: gs_web,
          name: "Go sarathi Travel",
          link: "https://gosarathi.com/",
        },
        {
          image: medi_web,
          name: "Mediverge Health Care",
          link: "https://medivergehealthcare.com/",
        },
        {
          image: tara_web,
          name: "Tara Interior",
          link: "https://tarainterior.com/",
        },
      ],
    },
    {
      name: "Social Media",
      children: [
        {
          image: srp,
          name: "S.R. Pandit Jewellers",
          link: "https://www.instagram.com/s.r.pandit_jewellers?igsh=MWRjaGxkeWl6M2pyaA%3D%3D",
        },
        {
          image: maid,
          name: "Maid Jewellers",
          link: "https://www.instagram.com/maidjewellers.mjk?igsh=MXZoc3VsbTV4ejhiZA%3D%3D",
        },
        {
          image: dhantirth,
          name: "Dhantirth Chits Pvt. Ltd.",
          link: "https://www.instagram.com/dhantirthchits?igsh=dTN4eXdldzdkZGhn",
        },
        {
          image: hotel_kasturi,
          name: "Hotel Kasturi",
          link: "https://www.instagram.com/hotel___kasturi___?igsh=MWliNG50M3AxdWVhNQ%3D%3D",
        },
        {
          image: maid_urban,
          name: "Maid Urban Co-operative Society",
          link: "https://www.instagram.com/maid_urban?igsh=ejdrMzh5aWV3N2F6",
        },
      ],
    },
    {
      name: "Web Apps",
      children: [
        {
          image: srp,
          name: "Pj Omunim",
        },
        {
          image: shree,
          name: "Ploting Developer Crm",
        },
        {
          image: jb,
          name: "JungleBoosh E-commerce",
        },
      ],
    },
    {
      name: "Mobile Apps",
      children:[
        {
          image:srp,
          name:"Jewellery Catalogue App",
        },
        {
          image:gov,
          name:"Gram panchayat ajani app",
        },
      ]
    },
  ];
  return (
    <>
      <div className="client_pagetop parent">
        <div className="clinet_pt_cont cont">
          <h1>
            <span>Building Success</span> Stories with <br />{" "}
            <span>Every </span> Client Collaboration
          </h1>
          <p>
            We partner with forward-thinking brands to deliver impactful
            software solutions and result-driven digital marketing strategies.
          </p>
        </div>
      </div>

      <div className="clients_list parent">
        <div className="client_list_cont cont">
          <div className="top_bar">
            {services.map((item, index) => (
              <div
                className={clientsTab === item.name ? "tab active" : "tab"}
                key={index}
                onClick={() => setClientsTab(item.name)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="cleints_section">
            {clientsTab === "Website" && (
              <div className="websites">
                {services
                  .find((item) => item.name === "Website")
                  ?.children.map((child, index) => (
                    <div className="web" key={index}>
                      <img src={child.image} alt={child.name} />
                      <div className="content">
                        <h3>{child.name}</h3>
                        <a href={child.link} target="blank">
                          click here to visit
                        </a>
                      </div>{" "}
                    </div>
                  ))}
              </div>
            )}

            {clientsTab === "Social Media" && (
              <div className="social_media">
                {services
                  .find((item) => item.name === "Social Media")
                  ?.children?.map((child, index) => (
                    <div className="sm">
                      <div className="image">
                        <img src={child.image} alt={child.name} />
                      </div>
                      <div className="content">
                        <h3>{child.name}</h3>
                        <a href={child.link} target="blank">
                          click here to visit
                        </a>
                      </div>
                    </div>
                  ))}
                <div></div>
              </div>
            )}

            {clientsTab === "Web Apps" && (
              <div className="web_apps">
                {services
                  .find((item) => item.name === "Web Apps")
                  ?.children?.map((child, index) => (
                    <div className="wa" key={index}>
                      <div className="image">
                        <img src={child.image} alt={child.name} />
                      </div>
                      <div className="content">
                        <h3>{child.name}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {clientsTab === "Mobile Apps" && (
              <div className="web_apps">
                {services
                  .find((item) => item.name === "Mobile Apps")
                  ?.children?.map((child, index) => (
                    <div className="wa" key={index}>
                      <div className="image">
                        <img src={child.image} alt={child.name} />
                      </div>
                      <div className="content">
                        <h3>{child.name}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
