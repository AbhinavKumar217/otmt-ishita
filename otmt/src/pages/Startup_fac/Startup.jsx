import React from "react";
import "./Startup.css";
import { Link } from "react-router-dom";
import FaqPopup5 from "../../components/faq5";
import logo1 from '../../images/iiiitd.png';
import logo2 from '../../images/image.png';
import logo3 from '../../images/logo3.png';

function Startup() {
  return (
    <div className="startup">
      <div className="startup-container"> {/* Flexbox container for layout */}
        <section className="des_start">
          <h1>Startup Facilitation</h1>

          <div className="underline1"></div>
          <br />
          <h2>
            “We believe that entrepreneurship has the greatest potential to revolutionize”
          </h2>
          <div className="underline2"></div>
          <p>
            At IIIT Delhi, we are committed to fostering a vibrant startup
            ecosystem that empowers innovators and entrepreneurs to turn their
            ideas into impactful ventures. Our comprehensive support system is
            designed to cater to both aspiring and seasoned business owners,
            providing them with the necessary tools, resources, and connections to
            thrive.<br /><br /> Our Ecosystem: Driving Innovation and Entrepreneurship <br /> <br />We
            understand that entrepreneurship requires more than just an idea. It
            takes mentorship, access to networks, and a supportive environment.
            That's why our innovation-driven ecosystem brings together the best of
            research, industry expertise, and entrepreneurial guidance to create a
            launchpad for startups. At the heart of this ecosystem are our leading
            innovation centers and hubs that provide a range of services and
            support.
          </p>
        </section>






        <div className="explore-wrapper">
          <div className="description">
            <p>IIITD Innovation and Incubation Center (IIITD-IC)</p>
          </div>
          <div className="explore-box">
            <a href="https://iiitdic.in/">
              <img src={logo1} alt="Logo 1" />
              <p>Explore More</p>
            </a>
          </div>
          
          <div className="description">
            <p>Electropreneur Park (STPI)</p>
          </div>
          <div className="explore-box">
            <a href="https://electropreneurpark.in/home">
              <img src={logo2} alt="Logo 2" />
              <p>Explore More</p>
            </a>
          </div>
          <div className="description">
            <p>IHUB Anubhuti Foundation</p>
          </div>
          <div className="explore-box">
            <a href="https://electropreneurpark.in/home">
              <img src={logo3} alt="Logo 3" />
              <p>Explore More</p>
            </a>
          </div>
        </div>
      </div>

     

      <div id="back_block_startup"></div>
      <FaqPopup5 />
    </div>
  );
}

export default Startup;
