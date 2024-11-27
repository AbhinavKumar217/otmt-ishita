import React, { useState } from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FaqPopup1 = () => {
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
                  Who can participate in the workshops and events?
                </AccordionSummary>
                <AccordionDetails>
                  Workshops and events are open to students, faculty members,
                  and external entrepreneurs interested in fostering innovation.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  What topics are covered in the hand-on workshops?
                </AccordionSummary>
                <AccordionDetails>
                  Workshops cover a range of topics, including Technology
                  Readiness, intellectual property rights, design thinking, and
                  entrepreneurship.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  How can I updated on innovation events and competitions?
                </AccordionSummary>
                <AccordionDetails>
                  Regularly check our platform for announcements, subscribe to
                  our newsletter, and follow us on social media for real-time
                  updates on events, hackathons, and competitions.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  What is the purpose of the Research showcase an Industry
                  connect events?
                </AccordionSummary>
                <AccordionDetails>
                  These events serve to bring ecosystem partners together,
                  providing a platform for knowledge sharing, collaboration, and
                  networking between academia, researchers, and industry
                  professionals.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  How can I schedule a one on one innovation consultation?
                </AccordionSummary>
                <AccordionDetails>
                  Contact our team through the provided channels to schedule a
                  personalized consultation with our innovation experts.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  What types of advisory services are offered during one on one
                  consultations?
                </AccordionSummary>
                <AccordionDetails>
                  Our experts provide guidance on idea development,
                  problem-solving, innovation strategies, and tailored
                  commercialization roadmaps.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7-content"
                  id="panel7-header"
                >
                  How can I connect with industry leaders for collaboration
                  opportunities?
                </AccordionSummary>
                <AccordionDetails>
                  We facilitate corporate connections, offering opportunities to
                  collaborate with industry leaders through innovation
                  partnerships, joint ventures, or technology licensing.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8-content"
                  id="panel8-header"
                >
                  What support is available for commercialization, startup, and
                  funding needs?
                </AccordionSummary>
                <AccordionDetails>
                  We offer guidance on transforming innovative ideas into
                  market-ready products or services, including advice on product
                  development, market research, business strategies, and funding
                  avenues.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel9-content"
                  id="panel9-header"
                >
                  Can external entrepreneurs participate in startup advisory
                  services?
                </AccordionSummary>
                <AccordionDetails>
                  Yes, our startup advisory services are open to both internal
                  stakeholders (students and faculty) and external entrepreneurs
                  seeking guidance on commercialization and funding.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel10-content"
                  id="panel10-header"
                >
                  How can I showcase my innovative ideas in your events?
                </AccordionSummary>
                <AccordionDetails>
                  Participate in our innovation events, hackathons, and
                  competitions to showcase your ideas and collaborate with
                  like-minded innovators. Follow the registration process
                  provided for each specific event.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel11-content"
                  id="panel11-header"
                >
                  Is there a cost associated with participating in the workshops
                  and events?
                </AccordionSummary>
                <AccordionDetails>
                  Most of our workshops and events are open and free for
                  participants. However, specific events may have registration
                  fees, which will be clearly communicated in the event details.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel12-content"
                  id="12-header"
                >
                  How do I inquire about available funding opportunities for my
                  startup?
                </AccordionSummary>
                <AccordionDetails>
                  During one-on-one consultations, our experts can guide you on
                  funding avenues and provide information on available resources
                  and opportunities based on your startup's specific needs.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FaqPopup1;
