  import React, { useEffect, useState } from 'react';
  import EventCard from '../event_card/card';
  import axios from 'axios';
  import fb from "../../assets/icons8-facebook-50.png";
  import tw from "../../assets/icons8-twitterx-50.png";
  import ig from "../../assets/icons8-instagram-50.png";
  import li from "../../assets/icons8-linkedin-50.png";

  import './activities.css';
  const apiUrl = process.env.REACT_APP_API_URL;
  const Activities = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 10;

    useEffect(() => {
      const fetchEvents = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(`${apiUrl}/events`, {
            params: {
              page,
              per_page: perPage
            }
          });

          const { data, meta } = response.data;
          console.log('Data:', data);
          setEvents(data);
          setTotalPages(meta?.total_pages || 1);

        } catch (err) {
          console.error('Axios error:', err);
          setError(err.message || 'Something went wrong!');
        } finally {
          setLoading(false);
        }
      };

      fetchEvents();
    }, [page]);

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
        {loading && <p>Loading events...</p>}
        {error && <p >{error}</p>}
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
            <EventCard
              imageUrl={event.image_url}
              title={event.name}
              date={event.start}
              briefDescription={event.brief}
              longDescription={event.description}
              deadline={event.deadline}
            />
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Activities;
