import React from "react";
import "./Start.css";
import logo1 from "../../images/iiiitd.png";
import logo2 from "../../images/image.png";
import logo3 from "../../images/logo3.png";

import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="start_home">
      <section className="startup_sec">
        <div className="startup">
          <h1>Startup Facilitation</h1>
          <br />
          <div className="line_start1"> </div>
          <br />

          <h2>
            “We believe that entrepreneurship has the greatest potential to
            revolutionize”
          </h2>
          <div className="line_start2"></div>
          <p>
            At IIIT Delhi, we are committed to fostering a vibrant startup
            ecosystem that empowers innovators and entrepreneurs to turn their
            ideas into impactful ventures. Our comprehensive support system is
            designed to cater to both aspiring and seasoned business owners,
            providing them with the necessary tools, resources, and connections
            to thrive.
            <br />
            <br /> Our Ecosystem: Driving Innovation and Entrepreneurship <br />{" "}
            <br />
            We understand that entrepreneurship requires more than just an idea.
            It takes mentorship, access to networks, and a supportive
            environment. That's why our innovation-driven ecosystem brings
            together the best of research, industry expertise, and
            entrepreneurial guidance to create a launchpad for startups. At the
            heart of this ecosystem are our leading innovation centers and hubs
            that provide a range of services and support.
          </p>
        </div>
      </section>

      <section className="Ass_cards">
        <div className="Ass_types">
          <div className="Ass_type1">
            <a href="https://iiitdic.in/">
              <img src={logo1} alt="Logo 1" />
              <p>
                IIITD Innovation and Incubation Center
                <br /> (IIITD-IC)
              </p>
            </a>
            <p className="para">
            <span style={{ fontWeight:"bolder" }}>OFFERINGS:</span>
              <br />
              Incubation Programs: Tailored support to help startups in
              early-stage development.<br />
              <br /> Mentorship: Guidance from experienced
              entrepreneurs and industry professionals.<br />
              <br /> Networking Opportunities: Access to a vast network of investors, industry
              leaders, and potential collaborators.<br />
              <br /> Funding Access: Help in
              securing seed funding and access to various funding opportunities.
              To learn more about the IIITD Innovation and Incubation Center,
              visit their website.
            </p>
          </div>

          <div className="Ass_type1">
            <a href="https://electropreneurpark.in/home">
              <img src={logo2} alt="IHUB" />
              <p>
                IHUB
                <br /> Anubhuti Foundation
              </p>
            </a>
            <p className="para">
              OFFERINGS:
              <br />
              Research and Development: Access to cutting-edge research in
              cognitive computing and AI. <br />
              <br />Collaboration Opportunities: Work with
              researchers and industry experts to bring your innovations to
              life. <br />
              <br />Startup Incubation: Support for startups developing
              solutions in the fields of AI and IoT. <br />
              <br />Commercialization Support:
              Help in turning research projects into viable, market-ready
              products. For more information, visit the IHUB Anubhuti Foundation
              website.
            </p>
          </div>

          <div className="Ass_type1">
            <a href="https://electropreneurpark.in/home">
              <img src={logo3} alt="STPI" />

              <p>
                Electropreneur Park <br /> (STPI)
              </p>
            </a>
            <p className="para">
              OFFERINGS:
              <br /> Specialized Infrastructure: Access to state-of-the-art
              electronics and hardware facilities.<br />
              <br /> Sector-Specific Mentorship:
              Guidance from experts in electronics system design and
              manufacturing. <br />
              <br />Business Acceleration: Support in scaling hardware
              innovations to market. <br />
              <br />Investment Access: Opportunities to connect
              with investors focused on hardware startups. For more details,
              visit the Electropreneur Park website.
            </p>
          </div>
        </div>
      </section>

      <div id="back_block_technology">   </div>
    </div>
  );
}

export default Start;
