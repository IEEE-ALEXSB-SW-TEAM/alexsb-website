import React from 'react';
import EventCard from '../event_card/card';
import fb from "../../assets/icons8-facebook-50.png";
import tw from "../../assets/icons8-twitterx-50.png";
import ig from "../../assets/icons8-instagram-50.png";
import li from "../../assets/icons8-linkedin-50.png";

import './activities.css';
import events from './events.js'; 

const Activities = () => {
    return (
    <div className="activities-container">
      {/* <h1 className="activities-title"><center>Upcoming Events</center></h1> */}
      {/* <div className='sorry'>
          <h1 className="sorry-title"><center>Sorry, No acvtive events for now :(</center></h1>
          <p><center>we are working on somethings amazing follow us on our socila media to get the latest news,</center></p>
          <p><center> and see what we have done till now in the section below</center></p>
          <div className="socials">
            <a href="https://www.facebook.com/IEEE.AlexSB/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://twitter.com/IEEEAlexSB" target="_blank" rel="noopener noreferrer">
              <img src={tw} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/ieeealexsb/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-alexsb/" target="_blank" rel="noopener noreferrer">
              <img src={li} alt="linkedin" />
            </a>
          </div>
      </div> */}
      <h1 className="activities-title"><center>Latest Events</center></h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <EventCard
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
              briefDescription={event.briefDescription}
              longDescription={event.longDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
