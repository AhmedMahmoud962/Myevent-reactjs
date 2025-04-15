import React from 'react'
import './UpcomingEvent.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import GroupIcon from '@mui/icons-material/Group'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { Link } from 'react-router-dom'
import { events } from '../../assets/Data'

function UpcomingEvent() {
  // Get only the last 4 events
  const displayedEvents = events.slice(-4)

  return (
    <div className="events-section">
      <div className="upcoming-event-container">
        <div className="upcoming-header-container">
          <h2>Upcoming Events</h2>
        </div>

        <div className="upcoming-event-grid">
          {displayedEvents.map((event) => (
            <div className="upcoming-event-card" key={event.id}>
              <div className="image-container">
                <img src={event.image} alt="Event" />
                <div className="concert-icon">{event.highlight}</div>
              </div>
              <div className="icons">
                <FavoriteBorderIcon className="icon" />
                <ShareIcon className="icon" />
              </div>
              <div className="upcoming-card-body">
                <span className="date">{event.date}</span>
                <h5 className="upcoming-card-title">
                  {event.title.length > 30
                    ? event.title.substring(0, 30) + '...'
                    : event.title}
                </h5>
                <p className="text-muted">{event.time}</p>
                <p className="text-muted">{event.location}</p>
                <p className="category">{event.category}</p>
                <p className="price">{event.price}</p>
                <p className="followers">
                  <GroupIcon className="icon-small" /> {event.followers}{' '}
                  followers
                </p>
                <p className="hosted">Hosted by: {event.hostedBy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/events">
            <button className="btn-view">View All</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
