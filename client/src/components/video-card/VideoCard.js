import React from "react";
import "./VideoCard.css";

const VideoCard = ({ id, title, description, videoUrl, resources }) => {
  return (
    <div className="video-card" id={id}>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        {resources && (
          <div className="resources">
            <h3>Useful Resources:</h3>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
