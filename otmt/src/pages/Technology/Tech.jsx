import React from "react";
import "./tech.css";
import logo1 from "../../images/tech_1.png";
import logo2 from "../../images/tech_2.png";
import logo3 from "../../images/logo_2.jpg"; // Add image for IPR card

import { Link } from "react-router-dom";

function Tech() {
  return (
    <div className="thome">
      <section className="thed">
        <div className="technology">
          <h1>Technology</h1>
          <br />
          <div className="line_tech"> </div>
          <br />
          <p>
            At the Office of Technology Management and Transfer (OTMT), we pride
            ourselves on fostering innovation and advancing technology that
            shapes the future. Our commitment is to harness cutting-edge
            research and transform it into practical solutions that benefit
            industry and society.
          </p>
        </div>
      </section>

      <section className="Cards">
        <div className="tech_types">
          <div className="tech_type1">
            <img src={logo1} alt="Our Research" />
            <Link to="/Tech_res">
              <p>Our Research</p>
            </Link>
            <p className="para">
              We invest heavily in research and development, collaborating with
              top-tier universities, industry experts, and research
              institutions. This ensures that our technologies are at the
              forefront of innovation and meet the highest standards of quality
              and efficacy.
            </p>
          </div>
          <div className="tech_type1">
            <img src={logo2} alt="Our Technologies" />
            <Link to="/Tech_tech">
              <p>Our Technologies</p>
            </Link>
            <p className="para">
              At the Office of Technology Management and Transfer (OTMT), we are
              dedicated to transforming groundbreaking research into innovative
              technologies that drive progress and improve lives. Our diverse
              portfolio of technologies reflects our commitment to excellence.
            </p>
          </div>
          <div className="tech_type1">
            <img src={logo3} alt="IPR" />
            <Link to="/Ipr">
              <p>Our IPR</p>
            </Link>
            <p className="para">
              Explore our Intellectual Property Rights (IPR) services and apply to protect your innovative ideas.
            </p>
          </div>
        </div>
      </section>

      <div id="back_block_technology">   </div>
    </div>
  );
}

export default Tech;
