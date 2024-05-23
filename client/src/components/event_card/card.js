import React from 'react';
import './card.css';

const EventCard = ({ imageUrl, title, date, briefDescription, longDescription }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{briefDescription}</p>
      </div>
      <div className="event-long-description">
        <p>{longDescription}</p>
      </div>
    </div>
  );
};

export default EventCard;
