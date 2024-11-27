import React from "react";
import "./IPR_man.css";
import { Link } from "react-router-dom";
import FaqPopup3 from "../../components/faq3";
function IPR() {
  return (
    <div className="ipr">
      <section className="des_ipr">
        <h1>IPR Management</h1>
        <br />
        <div
          className="title_decorate1"
          style={{
            height: "0.6rem",
            width: "35vh",
            marginLeft: "9vh",
            marginTop: "2vh",
          }}
        >
          {" "}
          
        </div>
        <br />
        <p>
          IPR is like a shield for your brilliant ideas, inventions, and
          creations. It's a way to legally protect your work so others can't
          steal or copy it without permission. Just like how you lock your house
          to keep your stuff safe, IPR locks up your ideas so only you can use
          them.
        </p>
      </section>

      {/* <section className="apply_ipr">
        <div id="apply_ipr">
          <h2>How to apply for IPR</h2>
          <div
            className="rect_decoration"
            style={{ height: "0.25rem", width: "35vh", "margin-right": "7vh" }}
          >
            {" "}
            hello
          </div>
          <div className="serv">
            <div className="ipr_list">
              <p>
                 We have experts who can help you come up with a smart plan to
                protect your ideas and guide you to see if it's new and
                different enough to get legal protection.
              </p>{" "}
            </div>
            <div className="ipr_list">
              <p>
                If we find that your idea is special, we will help you to fill
                out paperwork and send it to the right office.
              </p>
            </div>
            <div className="ipr_list">
              <p>
                If we find that your idea is special, we will help you to fill
                out paperwork and send it to the right office.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="title-container">
        <h2>Benefits</h2>
        <div
          className="title_decorate"
          style={{
            height: "0.6rem",
            width: "35vh",
            marginLeft: "0vh",
            marginTop: "2vh",
          }}
        >
          {" "}
          
        </div>
      </div>
      <section className="ipr_list">
        <div className="ipr_item">
          <h2>IPR Protection</h2>
          <p>
            IPR makes sure nobody can steal your ideas and profit from them
            without your permission.
          </p>
        </div>
        <div className="ipr_item">
          <h2>IPR Royalty</h2>
          <p>
            With IPR, you can let others use your ideas, but they have to pay
            you for it. It's like renting out your house – you earn money while
            still owning it.
          </p>
        </div>
        <div className="ipr_item">
          <h2>Encourages Innovation</h2>
          <p>
            Knowing their ideas are safe, people are more likely to come up with
            new and cool stuff that can improve our lives.
          </p>
        </div>
        <div className="ipr_item">
          <h2>Supports Business Growth</h2>
          <p>
            IPR can make your company more valuable. Investors like to see that
            your ideas are protected because it means they're investing in
            something secure.
          </p>
        </div>
      </section>

      <div className="service-buttonsi">
        <a
          href="https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service-btni">IPR Policy</button>
        </a>
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service-btni">Request for a meeting</button>
        </a>

        <a
          href=" https://docs.google.com/document/d/1MelfFkfhfX6wfB2q-qrGkY5hQipOmPkO/edit?usp=sharing&ouid=113746858237678511080&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service-btni">Apply for IPR</button>
        </a>

        <a
          href="https://ird.iiitd.edu.in/filedpatents.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service-btni">Filed Patents IRD </button>
        </a>





      </div>


      <div id="back_block_ipr"> </div>
      <FaqPopup3 />
    </div>
  );
}

export default IPR;
