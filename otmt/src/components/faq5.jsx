import React, { useState } from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FaqPopup4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button id="faqBtn" onClick={togglePopup}>
        FAQ+
      </button>

      {isOpen && (
        <>
          <div id="faqPopup" className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={togglePopup}>
                &times;
              </span>
              <h2>Frequently Asked Questions</h2>
              <p>Here you can find the answers to the most common questions.</p>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1-header"
                >
                  Who can benefit from the startup facilitation services?
                </AccordionSummary>
                <AccordionDetails>
                  Our services cater to aspiring entrepreneurs, startups, and existing businesses looking to innovate and grow.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel2-header"
                >
                  How do I join the Entrepreneurship Cell (ECELL)?
                </AccordionSummary>
                <AccordionDetails>
                  To join ECELL, participate in our events, workshops, and community gatherings. Connect with us through our platform or attend our networking sessions.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel3-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel3-header"
                >
                  What resources does the Innovation Hub (IHUB) provide for startups?
                </AccordionSummary>
                <AccordionDetails>
                  IHUB offers a collaborative workspace, access to prototyping tools, and a community of innovators. It provides an environment conducive to ideation and experimentation.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel4-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel4-header"
                >
                  How can I get incubation support from IITDIC?
                </AccordionSummary>
                <AccordionDetails>
                  Reach out to the IITDIC team through the provided channels to inquire about incubation support. Share details about your startup, and they will guide you through the application process.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel5-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel5-header"
                >
                  Are the mentorship programs tailored to specific industries?
                </AccordionSummary>
                <AccordionDetails>
                  Yes, our mentorship programs are customized to cater to diverse industries. We match startups with mentors who have expertise relevant to their business.
                </AccordionDetails>
              </Accordion>
              {/* Existing FAQs */}
              <Accordion>
                <AccordionSummary
                  aria-controls="panel6-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel6-header"
                >
                  What is the Technology Licensing and Research Commercialization program, and who can benefit from it?
                </AccordionSummary>
                <AccordionDetails>
                  The program is designed to turn innovative ideas into real-world solutions. It benefits businesses looking to innovate, researchers aiming to make an impact, and anyone interested in collaborative opportunities.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel7-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel7-header"
                >
                  How can I access innovation through the program?
                </AccordionSummary>
                <AccordionDetails>
                  Explore our rich portfolio of intellectual assets, from patents to software, ready for licensing and collaboration. Details on available innovations can be found on our platform.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel8-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel8-header"
                >
                  What are the benefits of forging strategic partnerships within the program?
                </AccordionSummary>
                <AccordionDetails>
                  Forge powerful alliances with our network of industry leaders, researchers, and entrepreneurs. Collaborative partnerships can enhance your innovation journey and open doors to new opportunities.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel9-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel9-header"
                >
                  How does Intellectual Property Management safeguard my ideas within the program?
                </AccordionSummary>
                <AccordionDetails>
                  Our expert IP management ensures that your ideas remain protected throughout the licensing and commercialization process, providing a secure environment for your innovations.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel10-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel10-header"
                >
                  What kind of commercialization support is provided in the program?
                </AccordionSummary>
                <AccordionDetails>
                  Receive comprehensive guidance to turn research breakthroughs into successful products and services. Our support covers various aspects of commercialization, from strategy development to market entry.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel11-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel11-header"
                >
                  Are there funding opportunities available through the program?
                </AccordionSummary>
                <AccordionDetails>
                  Yes, tap into diverse funding sources and grants to accelerate your innovation journey. We provide information and assistance on securing funding opportunities relevant to your project.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel12-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel12-header"
                >
                  How can I join the entrepreneurial ecosystem mentioned in the program?
                </AccordionSummary>
                <AccordionDetails>
                  Join the vibrant community of innovators, startups, and mentors we enjoy. Connect with us through the provided channels, and we'll guide you on becoming part of the entrepreneurial ecosystem.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel13-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel13-header"
                >
                  Is there a cost associated with accessing the intellectual assets for licensing?
                </AccordionSummary>
                <AccordionDetails>
                  The costs associated with accessing intellectual assets for licensing may vary. Details on licensing fees and terms can be obtained by reaching out to our licensing and commercialization team.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel14-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel14-header"
                >
                  How can businesses benefit specifically from the program?
                </AccordionSummary>
                <AccordionDetails>
                  Businesses can benefit by accessing cutting-edge technologies for licensing, forging strategic partnerships, receiving commercialization support, and tapping into funding opportunities to drive innovation and growth.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel15-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel15-header"
                >
                  Can individual researchers participate in the program, or is it exclusive to businesses?
                </AccordionSummary>
                <AccordionDetails>
                  The program is open to both individual researchers and businesses. Whether you're a solo innovator or part of a larger organization, we welcome your participation and collaboration.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel16-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel16-header"
                >
                  How can I stay updated on available intellectual assets and collaboration opportunities?
                </AccordionSummary>
                <AccordionDetails>
                  Regularly check our platform for updates on available intellectual assets, collaboration opportunities, and announcements related to the Technology Licensing and Research Commercialization program.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel17-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel17-header"
                >
                  Is there a specific application process to join the program, and how can I get started?
                </AccordionSummary>
                <AccordionDetails>
                  Contact our team through the provided channels to inquire about joining the program. We'll guide you through any application process and provide the necessary information to get started.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FaqPopup4;
