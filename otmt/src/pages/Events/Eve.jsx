import React from "react";
import "./Eve.css";
import { Link } from "react-router-dom";

function Eve() {
  return (
    <div className="ehome">
      <section className="ehed">
        <div className="all_event">
          <h1>Events</h1>
          <div className="all_line_eve"></div>
        </div>
      </section>

      <section className="all_event_Cards">
        <div className="all_event_types">
          {/* Upcoming Events Section */}
          <div className="all_event_type1">
            <p>Upcoming Events</p>
            <p className="all_disc">
              Stay tuned for upcoming events. Coming up soon.
            </p>
            <div className="all_sub_cards">
              <div className="all_sub_card">
                <p className="all_date">20</p>
                <p className="all_month">September 2024</p>
                <p className="all_title">Insight Sprints</p>
                <p className="all_description">
                  {/* Event description can go here */}
                </p>
                <p className="all_loc">IIIT Delhi</p>
              </div>

              <div className="all_sub_card">
                <p className="all_date">20</p>
                <p className="all_month">September 2024</p>
                <p className="all_title">Insight Sprints</p>
                <p className="all_description">
                  {/* Event description can go here */}
                </p>
                <p className="all_loc">IIIT Delhi</p>
              </div>


            </div>

            
            {/* "Know More" button for Upcoming Events */}
            <div className="all_event_btn_single">
              <Link to="/up_eve">
                <button className="all_know_single">Know More</button>
              </Link>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="all_event_type2">
            <p>Past Events</p>
            <p className="all_disc">
              Here's the list of past events.
              <br /> Do explore.
            </p>

            <div className="all_sub_cards">
              <div className="all_sub_card">
                <p className="all_date">15</p>
                <p className="all_month">March 2024</p>
                <p className="all_title">OnCoslice 2024</p>
                <p className="all_description">
                  The hackathon focuses on developing computer-assisted
                  diagnostic tools for precisely diagnosing cancer.
                </p>
                <p className="all_loc">IIIT Delhi</p>
              </div>

              <div className="all_sub_card">
                <p className="all_date">15-16</p>
                <p className="all_month">March 2024</p>
                <p className="all_title">Internship Fair</p>
                <p className="all_description">
                  This event connects aspiring interns with over 30 startups across tech and non-tech domains.
                </p>
                <p className="all_loc">C101 LHC</p>
              </div>
            </div>
            {/* "Know More" button for Past Events */}
            <div className="all_event_btn_single">
              <Link to="/Past">
                <button className="all_know_single">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="all_back_block_event"> </div>
    </div>
  );
}

export default Eve;
