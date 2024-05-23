import React from 'react';
import EventCard from '../event_card/card';
import fb from "../../assets/icons8-facebook-50.png";
import tw from "../../assets/icons8-twitterx-50.png";
import ig from "../../assets/icons8-instagram-50.png";
import li from "../../assets/icons8-linkedin-50.png";

import './activities.css';
const Activities = () => {
    return (
    <div className="activities-container">
      <h1 className="activities-title"><center>Active Events</center></h1>
      <div className='sorry'>
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
      </div>
      <h1 className="activities-title"><center>Latest Events</center></h1>
        <div className="events-grid">
          <div className="event-card">
          <EventCard
            imageUrl="./images/ieee-1.jpg"
            title="Event Title 1"
            date="May 12, 2024"
            briefDescription="Brief description of the event 1."
            longDescription="Long description of the event 1 which will be displayed on hover."
            />
          </div>
          <div className="event-card">
          <EventCard
            imageUrl="./images/ieee-1.jpg"
            title="Event Title 2"
            date="May 15, 2024"
            briefDescription="Brief description of the event 2."
            longDescription="Long description of the event 2 which will be displayed on hover."
            />
          </div>
          <div className="event-card">
          <EventCard
            imageUrl="./images/ieee-1.jpg"
            title="Event Title 3"
            date="May 18, 2024"
            briefDescription="Brief description of the event 3."
            longDescription="Long description of the event 3 which will be displayed on hover."
            />
          </div>
          <div className="event-card">
          <EventCard
            imageUrl="./images/ieee-1.jpg"
            title="Event Title 4"
            date="May 20, 2024"
            briefDescription="Brief description of the event 4."
            longDescription="Long description of the event 4 which will be displayed on hover blabla."
            />
          </div>
          <div className="event-card">
          <EventCard
            imageUrl="./images/ieee_bg.png"
            title="Event Title 5"
            date="May 22, 2024"
            briefDescription="Brief description of the event 5."
            longDescription="Long description of the event 5 which will be displayed on hover. blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla "
            />
          </div>

      </div>
    </div>
  );
};

export default Activities;
