
import React, { useState } from "react";
import { Button, Pagination } from "@mui/material";
import "./Past.css";




const eventList = [
  {
    date: "15",
    month: "March 2024",
    title: "OnCoslice ",
    description: "The hackathon focuses on developing computer-assisted diagnostic tools for precisely diagnosing cancer.",
    loc: "IIIT Delhi",
    link: "/documents/OnCoslice.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Internship fair",
    description:
      "This event connects aspiring interns with over 30 startups across tech and non-tech domains.",
    loc: "IIIT Delhi",
    link: "/documents/Report of Internship Fair.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Epoch",
    description:
      "The theme of Epoch is integrating open source to solve complex problems.",
    loc: "Library building, IIIT Delhi",
    link: "/documents/Epoch.pdf",
  },
  {
    date: "16",
    month: "March 2024",
    title: "Enactus fair",
    description:
      "Delhi NCR Enactus chapters are invited to present their impactful projects and sell their innovations at our event.",
    loc: "IIIT Delhi",
    link: "/documents/Enactus fair.pdf",
  },
  {
    date: "15",
    month: "March 2024",
    title: "the biz-ent-ine empire",
    description:
      "The Biz-Ent-ine Empire: A Business and Entrepreneurship Quiz, affectionately known as E-Trivia.",
    loc: "Room C11, IIIT Delhi",
    link: "/documents/The biz-ent-ine empire.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Networking arena",
    description:
      "Networking Arena, where startups flourish.",
    loc: "IIIT Delhi",
    link: "/documents/Networking Arena.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Pitchcafe7.0",
    description:
      "The Pitch Cafe is E-Summit's flagship event, encouraging entrepreneurship among young innovators and startups.",
    loc: "IIIT Delhi",
    link: "/documents/Pitch Cafe.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Imagi-N-ation",
    description:
      "The Imagi-N-ation event is a hackathon cum ideathon organized by IIIT Delhi's E-Summit 24 Team.",
    loc: "IIIT Delhi",
    link: "/documents/Imagi-N-ation.pdf",
  },
  {
    date: "06",
    month: "July 2024",
    title: "Afro Asian Entrepreneurs Conference",
    description:
      "It provides a unique opportunity to learn from and connect with entrepreneurs and innovators from across the Afro-Asian regions.",
    loc: "LHC C101,IIIT Delhi",
    link: "/documents/Afro Asian Conference.pdf",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Imagi-N-ation",
    description:
      "The Imagi-N-ation event is a hackathon cum ideathon organized by IIIT Delhi's E-Summit 24 Team.",
    loc: "IIIT Delhi",
    link: "https://example.com/registration2",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Imagi-N-ation",
    description:
      "The Imagi-N-ation event is a hackathon cum ideathon organized by IIIT Delhi's E-Summit 24 Team.",
    loc: "IIIT Delhi",
    link: "https://example.com/registration2",
  },
  {
    date: "15-16",
    month: "March 2024",
    title: "Imagi-N-ation",
    description:
      "The Imagi-N-ation event is a hackathon cum ideathon organized by IIIT Delhi's E-Summit 24 Team.",
    loc: "IIIT Delhi",
    link: "https://example.com/registration2",
  },


  // Add more events here
];

const ITEMS_PER_PAGE = 3; // Adjust the number of items per page as needed

function Past() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedEvents = eventList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="ehome">
      <section className="ehed">
        <div className="event">
          <h1>Past Events</h1>
          <div className="line_eve"></div>
        </div>
      </section>

      <section className="event_Cards">
        <div className="event_types">
          <div className="event_type2">
            <p>List of Past Events</p>
            <p className="disc">
              
            </p>

            <div className="sub_cards">
              {paginatedEvents.map((event, index) => (
                <div key={index} className="sub_card">
                  <p className="date">{event.date}</p>
                  <p className="month">{event.month}</p>
                  <p className="title">{event.title}</p>
                  <p className="description">{event.description}</p>
                  <p className="loc">{event.loc}</p>
                  <div className="event_btn">
                    <Button
                      // variant="contained"
                      // color="primary"
                      className="know"
                      onClick={() => window.open(event.link, "_blank")}
                    >
                      Know More
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              count={Math.ceil(eventList.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChange}
              // color="primary"
            />
          </div>
        </div>
      </section>

      <div id="back_block_event">   </div>
    </div>
  );
}

export default Past;
