import React from "react";
import "./Lisc.css";
import { Link } from "react-router-dom";
import FaqPopup4 from "../../components/faq4";


function Lisc() {
  return (
    <div className="tech_lisc">
      <section className="des_lisc">
        <h1>Technology Licensing</h1>
        <br />
        <div
          className="title_decoration"
          style={{
            height: "0.6rem",
            width: "35vh",
            marginLeft: "10vh",
            marginTop: "2vh",
          }}
        >
          {" "}
          
        </div>
        <br />
        <p>
          We're here to help turn exciting new ideas into real-world solutions.
          Whether you're a company looking to innovate or a researcher wanting
          to make a difference, find out how we can help you succeed:
        </p>
      </section>

      <section className="lisc_list">
        <div className="lisc_item">
          <h2>Access Innovation</h2>
          <p>
            Explore our wide range of technologies, from patents to software,
            which you can use for your projects.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Strategic Partnerships</h2>
          <p>
            Join forces with industry leaders and experienced professionals to
            bring your ideas to life.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Intellectual Property Management</h2>
          <p>
            We'll keep your ideas safe and secure, ensuring that your
            innovations are protected.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Commercializa-tion Support</h2>
          <p>
            We provide all the guidance you need to transform your research into
            viable products and services.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Funding Opportunities</h2>
          <p>
            Take advantage of various funding options to speed up your path from
            concept to market.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Funding Opportunities</h2>
          <p>
            Take advantage of various funding options to speed up your path from
            concept to market.
          </p>
        </div>
        <div className="lisc_item">
          <h2>Entrepreneurial Ecosystem</h2>
          <p>
            Join our dynamic network of creators, startups, and mentors
            dedicated to fostering growth and success.
          </p>
        </div>
      </section>

      <div className="ser-buttons">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDMThVAiQwRLV6wkoM3YFGQXmu6IJ7gpH5jShh1xJeY8ZTFw/viewform" target="_blank" rel="noopener noreferrer">
         <button className="ser-btn">Submit Technology for Licensing</button>
      </a>
    
        <button className="ser-btn" style={{ padding: '10px 20px' }}>
        Looking for Technology
      </button>

      <Link to="/Tech_tech">
      <button className="ser-btn" style={{ padding: '10px 20px' }}>
      View all Technology
      </button>
      </Link>

      <a href="https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf" target="_blank" rel="noopener noreferrer">
      <button className="ser-btn" style={{ padding: '10px 20px' }}>
      SOPs and Policy
      </button>
      </a>

      <a href="https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en" target="_blank" rel="noopener noreferrer">
      <button className="ser-btn" style={{ padding: '10px 20px' }}>
      Requesting a meeting
      </button>
      </a>

      <Link to="/contact">
      <button className="ser-btn" style={{ padding: '10px 20px' }}>
      Contact Us
      </button>
      </Link>
     
     
     
      </div>
      <div id="back_block_lis">   </div>
      <FaqPopup4 />
    </div>
  );
}

export default Lisc;
