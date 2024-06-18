import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './News.css';

function News() {
  const [motorcycle_events, setMotorcycleEvents] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/motorcycle_events')
      .then(response => response.json())
      .then(data => setMotorcycleEvents(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:8000/motorcycle_events`)
      .then(response => response.json())
      .then(data => setMotorcycleEvents(data));
  };

  return (
    <div className="news-container">
      <h1 className="news-title">Motorcycle Events</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search for motorcycle events"
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <ul className="event-list">
        {motorcycle_events.map(event => (
          <li key={event.id} className="event-item">
            <img className="event-image" src={event.image_url} alt={event.title} />
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">{event.event_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
