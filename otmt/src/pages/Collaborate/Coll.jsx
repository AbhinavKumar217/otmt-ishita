import React from "react";
import "./Coll.css";

import { Link } from "react-router-dom";

function Coll() {
  return (
    <div className="chome">
      <section className="ched">
        <div className="collab">
          <h1>What are you </h1>
          <br />
          <h1>looking for:</h1>
          <br />
          <div className="line_coll"> </div>
          <br />
          <p>
            Whether you're a company seeking innovative solutions, an individual
            with specific R&D requirements, or someone interested in technology
            licensing and commercialization, we welcome collaboration
            opportunities. At our Tech Transfer Office, we believe in fostering
            partnerships that drive innovation and bring ideas to life. Explore
            the various ways you can collaborate with us:
          </p>
        </div>
      </section>

      <section className="Collab_Cards">
        <div className="collab_types">
          <div className="collab_type1">
            <p>Do you have a Technology that need to be developed?</p>
            <p className="discription">
              {" "}
              If you have specific technology development needs, we invite you
              to submit the details through our collaboration portal. Our team
              is ready to explore collaborative opportunities to address your
              R&D requirements.
            </p>
            <a
              // href="https://forms.gle/S842HCfj1ArUZkZK9"
              href="https://forms.gle/PYxuwQHSZ7DfXrRz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="coll_btn">
                <button className="c_btn">Submit Your Details</button>
              </div>
            </a>
          </div>

          <div className="collab_type1">
            <p>
              Are you interested in licensing our technology or collaborating in
              its development?
            </p>
            <p className="discription">
              {" "}
              Whether you're looking to license our existing technologies or
              work with us to develop new ones, we're open to collaboration.
              Share your interests and requirements through our collaboration
              portal.
            </p>
            <a
              // href="https://forms.gle/GzKudCTCg9D1hVmb9"
              href="https://forms.gle/PYxuwQHSZ7DfXrRz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="coll_btn">
                <button className="c_btn">Submit Your Details</button>
              </div>
            </a>
          </div>

          <div className="collab_type1">
            <p>
              Do you have a technology and want us to commercialize or license
              it to industry?
            </p>
            <p className="discription">
              {" "}
              If you have a technology that you believe has commercial
              potential, share the details with us. We specialize in
              commercializing technologies and can explore opportunities for
              licensing or industry partnerships.
            </p>
            <a
              // href="https://forms.gle/MQFh1zGAWxHqf4Mj8"
              href="https://forms.gle/PYxuwQHSZ7DfXrRz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="coll_btn">
                <button className="c_btn">Submit Your Details</button>
              </div>
            </a>
          </div>

          <div className="collab_type1">
            <p>
              Want to list your ongoing work for our records or any future
              opportunity?
            </p>
            <p className="discription">
              {" "}
              If you wish to contribute to our collaborative ecosystem by
              listing your ongoing work or expressing interest in potential
              future opportunities, we encourage you to share your details
              through our Tech Transfer platform.
            </p>
            <a
              // href="https://forms.gle/7t2Ehj75snMfqc787"
              href="https://forms.gle/PYxuwQHSZ7DfXrRz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="coll_btn">
                <button className="c_btn">Submit Your Details</button>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div id="back_block_coll"> </div>
    </div>
  );
}

export default Coll;
