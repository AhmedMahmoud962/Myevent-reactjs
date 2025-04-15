import React from 'react'
import './NewEvents.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import GroupIcon from '@mui/icons-material/Group'
// import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { Link } from 'react-router-dom'
import { newEvents } from '../../assets/Data.jsx'

function NewEvents() {
  return (
    <div className="new-events-section">
      <div className="new-events-container">
        <div className="new-events-header">
          <h2>New Events</h2>
        </div>

        <div className="new-events-grid">
          {newEvents.map((event) => (
            <div className="new-event-card" key={event.id}>
              <div className="new-event-image-container">
                <img src={event.image} alt="Event" />
                {event.highlight && (
                  <div className="new-event-icon">{event.highlight}</div>
                )}
              </div>
              <div className="new-event-icons">
                {localStorage.getItem('token') && <FavoriteBorderIcon className="icon" />}
              </div>
              <div className="new-event-body">
                <span className="new-event-date">{event.date}</span>
                <h5 className="new-event-title">
                  {event.title.length > 30
                    ? event.title.substring(0, 30) + '...'
                    : event.title}
                </h5>
                <p className="new-event-time">{event.time}</p>
                <p className="new-event-location">{event.location}</p>
                <p className="new-event-category">{event.category}</p>
                <p className="new-event-price">{event.price}</p>
                <p className="new-event-followers">
                  <GroupIcon className="icon-small" /> {event.followers}{' '}
                  followers
                </p>
                <p className="new-event-host">Hosted by: {event.hostedBy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="new-events-view-all">
          <Link to="/events">
            <button className="new-events-btn">View All</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewEvents
