import React, { useState } from "react";
import "./Par_Res.css";

const Par_Res = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const resources = [
    {
      title: "Looking for outsourcing your Research or Technology related work",
      description:
        "If you're seeking to outsource research or technology-related work, we're here to assist you. Please fill out the form provided in the link to give us more details about your requirements.",
      meetLink:
        null,
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: null,
    },
    {
      title: "Interested in licensing out our Technology",
      description:
        "If you're interested in licensing our cutting-edge technology, please fill out the form provided in the link.",
      meetLink:
        null,
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: null,
    },
    {
      title: "Want to apply for IPR",
      description:
        "Protect your intellectual property by applying for Intellectual Property Rights (IPR). Submit the form available at the provided link to start the process.",
      meetLink:
        null,
      formLink: "https://docs.google.com/document/d/1MelfFkfhfX6wfB2q-qrGkY5hQipOmPkO/edit?usp=sharing&ouid=113746858237678511080&rtpof=true&sd=true",
      viewPolicyLink: null,
    },
    {
      title: "Need help for fundraising",
      description:
        "We offer consulting services and contract research opportunities...",
      meetLink:"https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink: null,
      viewPolicyLink: null,
    },
    {
      title: "Want to discuss anything about your product, our services",
      description:
        "Help in turning your concepts into market-ready products...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        null,
      viewPolicyLink:null,
    },
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources for Partners</h1>
      <div className="underline"></div>
      <p className="resources-description">
        Welcome to our comprehensive resources hub for partners, innovators, and
        collaborators. Whether you're looking to outsource research or
        technology-related work, explore licensing opportunities for
        cutting-edge technology, apply for Intellectual Property Rights (IPR),
        or seek assistance with fundraising, we're here to support you every
        step of the way. Our dedicated team is committed to providing
        high-quality solutions tailored to your needs and fostering meaningful
        collaborations. Explore the links below to submit forms, schedule
        meetings, or contact us directly. We're excited to work with you and
        help bring your vision to life.
      </p>

      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`resource-box ${hovered === index ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3>{resource.title}</h3>
            {hovered === index && (
              <div className="resource-details">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-buttons">
                {resource.meetLink && (
                   <button onClick={() => openLink(resource.meetLink)}>
                   Schedule a Meet
                 </button>
                  )}
                 
                  {resource.formLink && (
                    <button onClick={() => openLink(resource.formLink)}>
                      Submit Form
                    </button>
                  )}
                  {resource.viewPolicyLink && (
                    <button onClick={() => openLink(resource.viewPolicyLink)}>
                      View Policy
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div id="back_block_fac_res"></div>
      </div>
    </div>
  );
};

export default Par_Res;
