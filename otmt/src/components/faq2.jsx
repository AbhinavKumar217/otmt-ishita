import React, { useState } from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FaqPopup2 = () => {
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
                  What is a Technology Maturity Assessment, and why is it
                  important?
                </AccordionSummary>
                <AccordionDetails>
                  A Technology Maturity Assessment is a comprehensive evaluation
                  process that determines the readiness of a technology or
                  innovation for real-world applications. It is crucial for
                  understanding where your innovations stand on the path to
                  success
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel2-header"
                >
                  Who can benefit from a Technology Maturity Assessment?
                </AccordionSummary>
                <AccordionDetails>
                  Both startups looking to attract investors and established
                  companies seeking to diversify can benefit from a Technology
                  Maturity Assessment to navigate the journey from concept to
                  market success.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel3-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel3-header"
                >
                  What does the assessment process involve?
                </AccordionSummary>
                <AccordionDetails>
                  The assessment process involves a systematic analysis of
                  various factors to gauge the current state and future
                  prospects of a technology. It provides a roadmap for realizing
                  the full potential of innovations.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel4-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel4-header"
                >
                  What is Technology Readiness Level (TRL), and why is it
                  important?
                </AccordionSummary>
                <AccordionDetails>
                  TRL is a measure of the maturity of a technology, ranging from
                  concept (TRL 1) to fully deployed (TRL 9). Understanding TRL
                  is crucial for making informed decisions and improving the
                  chances of successful technology development and
                  commercialization.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel5-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel5-header"
                >
                  How does TRL evaluation guide the development process?
                </AccordionSummary>
                <AccordionDetails>
                  TRL evaluation helps innovators focus on reaching specific
                  readiness levels, making it easier to track progress, meet
                  milestones, and streamline the development process.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel6-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel6-header"
                >
                  How does TRL assessment contribute to monitoring and managing
                  innovation?
                </AccordionSummary>
                <AccordionDetails>
                  TRL knowledge allows organizations to monitor progress and
                  estimate the time required to bring a technology to market,
                  facilitating effective progress tracking and growth
                  management.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel7-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel7-header"
                >
                  How does understanding TRL provide a competitive advantage?
                </AccordionSummary>
                <AccordionDetails>
                  Knowing your technology's TRL relative to competitors enables
                  effective positioning of your innovation, identifying areas
                  for gaining a competitive edge in the market
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel8-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel8-header"
                >
                  How does TRL assessment inform market entry strategies?
                </AccordionSummary>
                <AccordionDetails>
                  TRL assessment helps organizations decide when and how to
                  introduce their technology into the market, maximizing the
                  chances of success through informed market entry strategies.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel9-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel9-header"
                >
                  How does TRL assessment contribute to resource allocation?
                </AccordionSummary>
                <AccordionDetails>
                  By understanding the current level of technology readiness,
                  organizations can allocate resources effectively, ensuring
                  efficient use of time and budget where they are needed most.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel10-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel10-header"
                >
                  How can TRL assessments be used for strategic decision-making?
                </AccordionSummary>
                <AccordionDetails>
                  Organizations can use TRL assessments to make strategic
                  decisions about their technology portfolio, focusing on
                  technologies with the highest potential for success.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel11-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel11-header"
                >
                  How does TRL assessment impact scaling and commercialization?
                </AccordionSummary>
                <AccordionDetails>
                  Technologies at higher TRL levels are more likely to scale and
                  succeed in the market. TRL assessment helps organizations
                  determine the readiness of their innovations for successful
                  commercialization.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel12-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel12-header"
                >
                  How can I initiate a Technology Maturity Assessment for my
                  innovation?
                </AccordionSummary>
                <AccordionDetails>
                  Contact our team through the provided channels to initiate a
                  Technology Maturity Assessment for your innovation. Our
                  experts will guide you through the process and provide
                  tailored assistance based on your needs.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FaqPopup2;
