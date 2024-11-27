import React, { useState } from "react";
import "./Stu_Res.css";

const Stu_Res = () => {
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
      title: "Secure Your Innovations",
      description: "Protect your intellectual property and innovations...",
      meetLink:
        "https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en",
      formLink: "https://docs.google.com/document/d/1MelfFkfhfX6wfB2q-qrGkY5hQipOmPkO/edit?usp=sharing&ouid=113746858237678511080&rtpof=true&sd=true",
      viewPolicyLink: "https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf",
    },

    {
      title: "Collaborate to Innovate",
      description:
        "We foster partnerships and idea exchange to drive innovation. Our commitment is to guide you in turning ideas into impactful realities.",
      meetLink: null,
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform",
      viewPolicyLink: null,
    },
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources for Students</h1>
      <div className="underline"></div>
      <p className="resources-description">
        At Technology Transfer Office IIIT Delhi, we're dedicated to empowering
        students to translate their ideas into impactful solutions. Whether
        you're a student researcher or simply passionate about innovation, we
        provide the resources and support to guide you from concept to reality.
        From safeguarding intellectual property to fostering collaborations with
        industry, we're committed to helping you make a difference. Join us in
        turning your innovations into tangible contributions to society, while
        gaining valuable skills and experience along the way."
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

export default Stu_Res;
