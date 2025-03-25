import React, {useState} from 'react';

import './card.css';

const EventCard = ({ imageUrl, title, date, briefDescription, longDescription, deadline }) => {
  const [hovered, setHovered] = useState(false);
  const isRegistrationOpen = new Date(deadline) > new Date();

  return (
    <div 
      className="event-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{briefDescription}</p>
      </div>
      <div className="event-long-description">
        <p>{longDescription}</p>
      </div>

      
      {hovered && isRegistrationOpen && (
        <button className="register-button">Register</button>
      )}
    </div>
  );
};

export default EventCard;
