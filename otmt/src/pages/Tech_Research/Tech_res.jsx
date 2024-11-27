import React from "react";
import "./Tech_res.css";
import { Link } from "react-router-dom";
import logo3 from "../../images/technology_res.jpg";

function Resrch() {
  return (
    <div className="research">
      <section className="res_des">
        <div className="txt_content">
          <h1>Our Research</h1>
          <div className="res_line"></div>
          <br />
          <p>
            At the Office of Technology Management and Transfer (OTMT), we serve
            as the critical bridge between the cutting-edge research conducted
            at IIIT Delhi and the world of commercialization and industry
            collaboration. While the groundbreaking research happens at IIIT
            Delhi, our role is to ensure that these innovations are identified,
            nurtured, and successfully transferred to the marketplace where they
            can create real impact. We are committed to fostering collaboration
            between researchers, industry leaders, and entrepreneurs to help
            transform research outcomes into commercial products, services, and
            technologies that drive societal and economic progress.
            <br />
            <br /> Our key areas of focus include:
          </p>

          <div className="feature-cards">
            <div className="feature-card">
             <h2> Identifying Commercially Viable Research</h2>
              <p>
                We work with researchers at IIIT Delhi to identify projects with
                strong potential for commercialization, helping bridge the gap
                between laboratory discoveries and industry needs.
              </p>
            </div>

            <div className="feature-card">
             <h2> Fostering Industry Collaboration</h2>
              <p>
                OTMT facilitates partnerships with industry, enabling
                collaboration on research, development, and product innovation.
                These partnerships often lead to technology licensing, joint
                ventures, and R&D funding opportunities.
              </p>
            </div>

            <div className="feature-card">
              <h2>Supporting Intellectual Property (IP) Protection</h2>
              <p>
                We assist in securing intellectual property rights for research
                outputs, ensuring that innovations are protected and ready for
                licensing or commercialization.
              </p>
            </div>

            <div className="feature-card">
              <h2>Enabling Startups and Spin-offs</h2>
              <p>
                OTMT encourages entrepreneurial activities by supporting faculty
                and student ventures, helping to incubate and commercialize
                research-based startups.
              </p>
            </div>

            {/* <div className="feature-card">
            Technology Transfer
            </div> */}
          </div>

          <h2>Ongoing R&D</h2>
          <div className="res_line2"></div>
          <p>
            While the research happens at IIIT Delhi, OTMT’s role is to record,
            promote, and encourage collaboration to ensure that the research is
            translated into tangible products and solutions.
            <br /> Our ongoing initiatives include:
            <br /> <br /> A) Facilitating Cross-Sector Collaboration: We
            actively encourage collaborations between researchers at IIIT Delhi
            and industry leaders, startups, and policymakers, ensuring that
            research is aligned with market needs.
            <br />
            <br /> B) Promoting Innovation Ecosystem: OTMT supports the
            development of an innovation ecosystem at IIIT Delhi, where
            researchers and entrepreneurs collaborate to address global
            challenges through cutting-edge technology.
            <br /> <br /> C) Commercialization Pathways: We guide researchers
            through the commercialization process, from securing patents to
            licensing technology to industry partners or launching spin-off
            companies.
          </p>
        </div>

        <div className="image-container">
          <img src={logo3} alt="Research" />
        </div>
      </section>

      <div className="res_btn">
        <Link to="/Proj">
          <button className="ser_btn">Sponsored Research Projects</button>
        </Link>
        <a
          href="https://forms.gle/wcSwjs4nHNT7fQwT9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">File your IPR with us</button>
        </a>
        <a
          href="https://forms.gle/NWzR9N18g38ZSfih8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">Commercialize your Technology</button>
        </a>


        <a
          href="https://forms.gle/1emV76PHMjcGE3AF9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">Looking for Research Collaboration</button>
        </a>

        
      </div>

      <h2 className="ipr-heading">Our IPRs</h2>
      <div className="res_line3"> </div>
      <div className="res_btn2">
        <Link to="/Ipr_Table">
          <button className="service_btn">List of IPRs</button>
        </Link>
      </div>

      <div id="back_block_research"></div>
    </div>
  );
}

export default Resrch;
