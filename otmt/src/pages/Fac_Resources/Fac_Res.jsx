import React, { useState } from "react";
import "./Fac_Res.css";

const Fac_Res = () => {
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
      title: "Innovate and Collaborate",
      description:
        "Submit Your Ideas and Projects. Share your innovative ideas, research, or projects with us...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: null,
    },
    {
      title: "Exploring Funding for Your Research Work",
      description:
        "Learn about various funding options available for your research work...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: null,
    },
    {
      title: "Engage with Us",
      description:
        "Join us in collaborative projects and community engagements...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink: null,
      viewPolicyLink: null,
    },
    {
      title: "Open for Consulting and Contract Research",
      description:
        "We offer consulting services and contract research opportunities...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink: null,
      viewPolicyLink: null,
    },
    {
      title: "From Concept to Market",
      description:
        "Help in turning your concepts into market-ready products...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdDMThVAiQwRLV6wkoM3YFGQXmu6IJ7gpH5jShh1xJeY8ZTFw/viewform",
      viewPolicyLink: "https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf",
    },
    {
      title: "Wish to Start Your Venture",
      description: "Support and guidance for starting your own venture...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: "https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf",
    },
    {
      title: "Secure Your Innovations",
      description: "Protect your intellectual property and innovations...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink:
        "https://docs.google.com/document/d/1MelfFkfhfX6wfB2q-qrGkY5hQipOmPkO/edit?usp=sharing&ouid=113746858237678511080&rtpof=true&sd=true",
      viewPolicyLink: "https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf",
    },
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources for Faculty & Staff</h1>
      <div className="underline"></div>
      <p className="resources-description">
        At Technology Transfer Office IIIT Delhi, we bridge academia and
        innovation, transforming research into societal benefits. Our dynamic
        ecosystem fosters intellectual property and transcends academic
        boundaries, driving innovation forward. We facilitate technology
        transfer to ensure scientific discoveries benefit society, securing
        market exclusivity for novel products. By encouraging collaboration
        across sectors, we fuel regional development. Through policy support and
        practical guides, we nurture faculty talents for commercial success and
        societal impact. Join us to unlock the full potential of your
        innovations and shape tomorrow's landscape.
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

export default Fac_Res;
