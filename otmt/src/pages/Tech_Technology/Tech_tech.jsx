// import React from "react";
// import "./Tech_tech.css";

// import { Link } from "react-router-dom";

// import logo1 from "../../images/logo_1.jpg";
// import logo2 from "../../images/logo_2.jpg";
// import logo3 from "../../images/logo_3.jpg";
// import logo4 from "../../images/logo_4.jpg";

// function Techno() {
//   return (
//     <div className="Our_Technologies">
//       <section className="tech_section">
//         <div className="tech">
//           <h1>Our Technologies</h1>
//           <br />
//           <div
//             className="title_decoration"
//             style={{
//               height: "0.6rem",
//               width: "35vh",
//               "margin-right": "7vh",
//               marginTop: "1vh",
//             }}
//           >
//             {" "}
//             hello
//           </div>
//           <br />
//           <p>
//             At IIIT Delhi, we are driven by innovation, collaboration, and the
//             pursuit of a brighter future. Our multifaceted Office of Technology
//             Management and Transfer (OTMT) is at the forefront of fostering
//             positive change, advancing technology, and ensuring innovation has a
//             long lasting impact.
//           </p>
//         </div>
//       </section>

//       <section className="techno_highlights">
//         <div id="techno_highlights">

//           <div className="high">
//             <div className="high_item">
//               <img src={logo1} alt="Seek and Suspect" />
//               <p>Seek and Suspect</p>
//               <p className="text">
//                 {" "}
//                 The novel aspect of this project lies in an innovative and fully
//                 automated technology for facial image retrieval in criminal
//                 investigations.
//               </p>
//             </div>
//             <div className="high_item">
//               <img src={logo2} alt="Cloud Labs" />
//               <p>Cloud Labs</p>
//             </div>
//             <div className="high_item">
//               <img src={logo3} alt="TATDC" />
//               <p>TATDC</p>
//             </div>
//             <div className="high_item">
//               <img src={logo4} alt="FOODLE" />
//               <p>FOODLE</p>
//             </div>
//           </div>
//           <div className="background_block_tech"> hello </div>
//         </div>
//
//       </section>
//     </div>
//   );
// }

// export default function Techno;

import React from "react";
import "./Tech_tech.css";

import { Link } from "react-router-dom";

import logo1 from "../../images/logo_1.jpg";
import logo2 from "../../images/logo_2.jpg";
import logo3 from "../../images/logo_3.jpg";
import logo4 from "../../images/logo_4.jpg";

function Techno() {
  return (
    <div className="Our_Technologies">
      <section className="tech_section">
        <div className="tech">
          <h1>Our Technologies</h1>
          <br />
          <div
            className="title_decoration"
            style={{
              height: "0.6rem",
              width: "35vh",
              marginRight: "7vh",
              marginTop: "1vh",
            }}
          >
            {" "}
            
          </div>
          <br />
          <p>
            At IIIT Delhi, we are driven by innovation, collaboration, and the
            pursuit of a brighter future. Our multifaceted Office of Technology
            Management and Transfer (OTMT) is at the forefront of fostering
            positive change, advancing technology, and ensuring innovation has a
            long lasting impact.
          </p>
        </div>
      </section>

      <section button_tech>
      <div className="tech_explore">
            <img src={logo2} alt="Our Technologies" />

            <Link to="/all_tech">
              <p>Explore More Technology</p>
            </Link>
          
          </div>
      </section>

      <section className="techno_highlights">
        <div id="techno_highlights">
          <div className="high">
            <div className="high_item">
              <img src={logo1} alt="Seek and Suspect" />
              <p>Seek and Suspect</p>
              <p className="text">
                {" "}
                The novel aspect of this project lies in an innovative and fully
                automated technology for facial image retrieval in criminal
                investigations.
              </p>
              <a
                href="/Brochure_New/SEEKnSUSPECT_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="high_item">
              <img src={logo2} alt="Cloud Labs" />
              <p>Cloud Labs</p>
              <p className="text">
                {" "}
                Cloud Lab is an innovative platform at the forefront of
                reshaping hands-on learning for the digital era.
              </p>

              <a
                href="/Brochure_New/Cloud_labs_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="high_item">
              <img src={logo3} alt="TATDC" />
              <p>TATDC</p>
              <p className="text">
                {" "}
                The Trainer and Tester for Digital Circuits (TATDC) is an
                innovative project that leverages advanced technology to provide
                a comprehensive solution for digital circuit experimentation.
              </p>

              <a
                href="/Brochure_New/TATDC_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="high_item">
              <img src={logo4} alt="FOODLE" />
              <p>FOODLE</p>
              <p className="text">
                {" "}
                Foodle, a culinary word game, capitalizes on the intrinsic
                connection between language and food.
              </p>

              <a
                href="/Brochure_New/Foodle_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>
          </div>
       

          {/* <div className="background_block_tech"> hello </div> */}
        </div>
        <div className="background_block_tech"> </div>
      </section>

    </div>
  );
}

export default Techno;

  