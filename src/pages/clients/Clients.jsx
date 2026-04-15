import React, { useState } from "react";
import "./Clients.scss";
import mouleee_web from "../../assets/web_cl/moulees_web.png";
import maid_urban_web from "../../assets/web_cl/maid_urban_web.png";
import gt_web from "../../assets/web_cl/gt_web.png";
import gp_web from "../../assets/web_cl/gp_web.png";
import gs_web from "../../assets/web_cl/go_sarathi_web.png";
import medi_web from "../../assets/web_cl/medi_web.png";
import tara_web from "../../assets/web_cl/tara_web.png";

const Clients = () => {
  const [clientsTab, setClientsTab] = useState("Website");

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
    },
    {
      name: "Web Apps",
    },
    {
      name: "Mobile Apps",
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
                        <h3>
                          {child.name}
                        </h3>
                        <a href={child.link} target="blank" >
                          click here to visit
                        </a>
                        </div>{" "}
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
