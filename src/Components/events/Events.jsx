import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../Styles/events.css";
import events from "../../data/events.json";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {

  const navigate = useNavigate();
  console.log(events);
  console.log(Object.keys(events));

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="events-event-card" data-aos="fade-up">
      <div className="upcoming-events" data-aos="fade-down">
        <h2 className="event-page-title">Events</h2>
      </div>

      <div className="events-event-images">
        {Object.keys(events).map((title, index) => {
          let event = events[title]          
          return(
          <div className="image-item" data-aos="zoom-in" data-aos-delay={index * 100} key={index} onClick={()=>{
            navigate(`/events/${title}`)
          }}>
              <img src={event.image} alt={title} className="events-event-image" />
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Events;
