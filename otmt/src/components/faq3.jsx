import React, { useState } from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FaqPopup3 = () => {
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
                  What is IPR, and why is it important for innovation?
                </AccordionSummary>
                <AccordionDetails>
                  Intellectual Property Rights (IPR) are legal protections for intellectual creations. They are crucial for innovation as they secure and maximize the value of groundbreaking ideas during the technology transfer process.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel2-header"
                >
                  What activities are involved in IPR consultation and strategy?
                </AccordionSummary>
                <AccordionDetails>
                  IPR consultation involves a comprehensive process to devise an effective strategy aligned with goals and objectives, ensuring the protection and profitability of innovative ideas.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel3-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel3-header"
                >
                  How does Patentability Assessment contribute to the protection of technology?
                </AccordionSummary>
                <AccordionDetails>
                  Patentability Assessment evaluates the novelty and inventiveness of a technology, determining its eligibility for a patent and ensuring it meets the necessary criteria for legal protection.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel4-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel4-header"
                >
                  Can you explain the process of filing a patent and what it involves?
                </AccordionSummary>
                <AccordionDetails>
                  Filing a patent includes managing the entire process, drafting claims, preparing required documents, navigating patent office procedures, responding to office actions, and representing clients during prosecution.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel5-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel5-header"
                >
                  What is Patent Portfolio Management, and why is it important?
                </AccordionSummary>
                <AccordionDetails>
                  Patent Portfolio Management involves strategically managing and maintaining a portfolio of patents to maximize their value and protection. Regular reviews and updates are done based on business objectives and market trends.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel6-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel6-header"
                >
                  How does Licensing and Technology Transfer work in the context of IPR?
                </AccordionSummary>
                <AccordionDetails>
                  Licensing agreements are negotiated and drafted to allow third parties to use, sell, or develop patented technology. This process facilitates the transfer of technology and intellectual property between entities.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel7-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel7-header"
                >
                  What is the purpose of IPR Commercialization Strategy?
                </AccordionSummary>
                <AccordionDetails>
                  IPR Commercialization Strategy involves developing plans to effectively commercialize IP assets, considering market dynamics and competition. It identifies potential licensing opportunities, partnerships, or ventures for monetizing intellectual property.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel8-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel8-header"
                >
                  How can I participate in IPR Training and Workshops?
                </AccordionSummary>
                <AccordionDetails>
                  Keep an eye on our announcements for upcoming training sessions and workshops. You can register for these events to enhance your understanding of intellectual property, its importance, and best practices.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel9-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel9-header"
                >
                  What is Freedom to Operate (FTO) Analysis, and why is it important?
                </AccordionSummary>
                <AccordionDetails>
                  FTO Analysis ensures that a technology does not infringe existing patents or IP rights. It provides recommendations on mitigating patent infringement risk, allowing you to proceed confidently with your innovation.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FaqPopup3;
