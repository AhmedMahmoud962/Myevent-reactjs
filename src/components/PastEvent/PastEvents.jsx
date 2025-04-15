import React from 'react'
import './PastEvents.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import ShareIcon from '@mui/icons-material/Share'
import GroupIcon from '@mui/icons-material/Group'
// import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { Link } from 'react-router-dom'
import { pastEvents } from '../../assets/Data'

function PastEvents() {
  // Get only the last 4 events

  return (
    <div className="past-events-section">
      <div className="past-events-container">
        <div className="past-events-header-container">
          <h2>Past Events</h2>
        </div>

        <div className="past-events-grid">
          {pastEvents.map((event) => (
            <div className="past-event-card" key={event.id}>
              <div className="past-image-container">
                <img src={event.image} alt="Event" />
                {event.highlight && (
                  <div className="past-concert-icon">{event.highlight}</div>
                )}
              </div>
              <div className="past-icons">
                {localStorage.getItem('token') && (
                  <FavoriteBorderIcon className="icon" />
                )}
              </div>
              <div className="past-card-body">
                <span className="past-date">{event.date}</span>
                <h5 className="past-card-title">
                  {event.title.length > 30
                    ? event.title.substring(0, 30) + '...'
                    : event.title}
                </h5>
                <p className="past-text-muted">{event.time}</p>
                <p className="past-text-muted">{event.location}</p>
                <p className="past-category">{event.category}</p>
                <p className="past-price">{event.price}</p>
                <p className="past-followers">
                  <GroupIcon className="past-icon-small" /> {event.followers}{' '}
                  followers
                </p>
                <p className="past-hosted">Hosted by: {event.hostedBy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="past-view-all-container">
          <Link to="/events">
            <button className="past-btn-view">View All</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PastEvents
