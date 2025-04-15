import React, { useRef } from 'react'
import './TopEvents.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import GroupIcon from '@mui/icons-material/Group'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { Link } from 'react-router-dom'
import { events } from '../../assets/Data'

function TopEvents() {
  const sliderRef = useRef(null)

  // prev event
  const handlePrevClick = () => {
    if (sliderRef.current) {
      const cardWidth = 335
      sliderRef.current.scrollLeft -= cardWidth
    }
  }

  // next event
  const handleNextClick = () => {
    if (sliderRef.current) {
      const cardWidth = 335
      sliderRef.current.scrollLeft += cardWidth
    }
  }

  return (
    <div className="events-section">
      <div className="top-event-container">
        <div className="top-header-container">
          <h2>Top Events</h2>
          <div className="top-navigation-buttons">
            <button className="top-nav-button prev" onClick={handlePrevClick}>
              <ArrowBackIosNewIcon />
            </button>
            <button className="top-nav-button next" onClick={handleNextClick}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>

        <div className="top-event-grid" ref={sliderRef}>
          {events.map((event) => (
            <div className="top-event-card" key={event.id}>
              <div className="image-container">
                <img src={event.image} alt="Event" />
                <div className="concert-icon">{event.highlight}</div>
              </div>
              <div className="icons">
                <FavoriteBorderIcon className="icon" />
                {/* <ShareIcon className="icon" /> */}
              </div>
              <div className="top-card-body">
                <span className="date">{event.date}</span>
                <h5 className="top-card-title">
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
            <button className="btn-view">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopEvents
