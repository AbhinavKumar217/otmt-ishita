import React from "react";
import "./Res.css";
import logo1 from "../../images/fac-staff.png";
import logo2 from "../../images/students.png";
import logo3 from "../../images/partners.png";

import { Link } from "react-router-dom";


function Res() {
  return (
    <div className="rhome">
      <section className="rhed">
        <div className="res">
          <h1>Resources</h1>
          <br />
          <div className="line_res"> </div>
          <br />
          <p>
            This section is designed to provide you with a comprehensive
            collection of materials, tools, and information that support our
            mission to foster innovation, facilitate technology transfer, and
            advance scientific research. Whether you are a researcher,
            entrepreneur, student, or industry partner, you'll find valuable
            resources to assist you in your endeavors.
          </p>
        </div>
      </section>

      <section className="Res_Cards">
        <div className="Res_types">
          <div className="Res_type1">
            <img src={logo1} alt="Faculty and Staff" />
            <Link to="/Fac_Res">
              <p>Faculty and Staff</p>
            </Link>

            <p className="Res_para">
              {" "}
              A comprehensive hub designed to support educators and
              administrative staff in their professional roles. It offers access
              to essential tools for career development, including training
              opportunities, policy guidelines, and teaching resources.
            </p>
          </div>

          <div className="Res_type1">
            <img src={logo2} alt="Students" />
            <Link to="/stu_res">
            <p>Students</p>
            </Link>
           
            <p className="Res_para">
              {" "}
              A dedicated space designed to support students throughout their
              academic journey. It provides access to vital tools and
              information, including academic advising, tutoring services,
              career counseling, and financial aid resources. This section aims
              to empower students.
            </p>
          </div>

          <div className="Res_type1">
            <img src={logo3} alt="Partners" />
            <Link to="/Par_res">
            <p>Partners</p>
            </Link>
           
            <p className="Res_para">
              {" "}
              Serves as a comprehensive guide for external collaborators and
              partners of the institution. It typically includes information on
              partnership opportunities, guidelines for collaboration, and tools
              for effective engagement.
            </p>
          </div>
        </div>
      </section>

      <div id="back_block_resource">  </div>
      
    </div>
  );
}

export default Res;
