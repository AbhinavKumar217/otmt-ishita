
import React, { useState } from "react";
import { Button, Pagination } from "@mui/material";
import "./up_eve.css";

const eventList = [
  {
    date: "15-16",
    month: "March 2024",
    title: "RIISE 2024",
    description: "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "IIIT Delhi",
    link: "https://example.com/registration1",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  {
    date: "20",
    month: "November 2023",
    title: "SESSION",
    description:
      "An introductory and informative session on Technology Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.",
    loc: "C101 LHC",
    link: "https://example.com/registration2",
  },
  // Add more events here
];

const ITEMS_PER_PAGE = 3; // Adjust the number of items per page as needed

function Up_eve() {
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
          <h1>Upcoming Events</h1>
          <div className="line_eve"></div>
        </div>
      </section>

      <section className="event_Cards">
        <div className="event_types">
          <div className="event_type2">
            <p>List of Upcoming Events</p>
            <p className="disc">
              Stay tuned for upcoming events. Coming up soon.
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

export default Up_eve;
