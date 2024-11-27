import React from "react";
import "./facinn.css";
import { Link } from "react-router-dom";
import FaqPopup1 from "../../components/faq1";



function FacInn() {
  return (
    <div className="fac-inn">
      <section className="des_inn">
        <h1>Facilitate Innovation and Awareness</h1>
        <br />
        <div className="rec"> </div>
        <br />
        <p>
          Our goal is to create a dynamic ecosystem where innovation thrives.
          Whether you're a student, faculty member, or external entrepreneur, we
          provide the tools, knowledge, and connections needed to turn your
          ideas into impactful innovations. Join us in shaping the future
          through innovation!
        </p>
      </section>
      <section className="services-list">
        <div className="service-item1">
          <h2>Workshops</h2>
          <p>
            Dive into fun workshops! From making new tech work to learning about
            protecting your ideas, we make innovation a blast for everyone.
          </p>
        </div>
        <div className="service-item1">
          <h2>Innovation Events</h2>
          <p>
            Don't miss our cool events! From hackathons to showcases, it's your
            chance to shine and meet other creative minds.
          </p>
        </div>
        <div className="service-item1">
          <h2>Talk to experts</h2>
          <p>
            Got an idea? Chat one-on-one with our experts. We'll guide you on
            how to solve problems, polish your idea, and make it stand out.
          </p>
        </div>
        <div className="service-item1">
          <h2>Meet big companies</h2>
          <p>
            We help you meet the big players in the industry. A great chance to
            find a partner, start a joint project, or get your idea licensed.
          </p>
        </div>
        <div className="service-item1">
          <h2>Making ideas real</h2>
          <p>
            Dreaming of starting your own thing or need advice on how to get
            there? We're here to help with advice on making your product,
            understanding your market, and finding the money to get started.
          </p>
        </div>
      </section>
      <div className="service-buttonsf">
       
        <a href="https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en" target="_blank" rel="noopener noreferrer">
          <button className="service-btnf">Schedule a Meeting</button>
        </a>
        <Link to="/events">
        <button className="service-btnf">Upcoming Events</button>
        </Link>
        <Link to="/events">
        <button className="service-btnf">Past Events Reports</button>
        </Link>
       
        
        
      </div>
      <div id="back_block_facinn">   </div>

       <FaqPopup1 /> 
    </div>
  );
}

export default FacInn;
