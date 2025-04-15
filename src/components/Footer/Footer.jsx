import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import logo from '../../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="MyEvent Logo" className="footer-logo" />
          <p>
            Discover amazing events and create unforgettable memories with us.
            Join our community of event enthusiasts and stay updated with the
            latest happenings.
          </p>
          <div className="social-icons">
            <Link to="/facebook" className="social-icon">
              <FacebookIcon />
            </Link>
            <Link to="/twitter" className="social-icon">
              <TwitterIcon />
            </Link>
            <Link to="/instagram" className="social-icon">
              <InstagramIcon />
            </Link>
            <Link to="/linkedin" className="social-icon">
              <LinkedInIcon />
            </Link>
            <Link to="/youtube" className="social-icon">
              <YouTubeIcon />
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Event Categories</h3>
          <ul>
            <li>
              <Link to="/events/music">Music</Link>
            </li>
            <li>
              <Link to="/events/sports">Sports</Link>
            </li>
            <li>
              <Link to="/events/arts">Arts & Theater</Link>
            </li>
            <li>
              <Link to="/events/food">Food & Drinks</Link>
            </li>
            <li>
              <Link to="/events/business">Business</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p>
              <LocationOnIcon /> 123 Event Street, City, Country
            </p>
            <p>
              <PhoneIcon /> +1 234 567 890
            </p>
            <p>
              <EmailIcon /> info@eventsite.com
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; © 2024, All Right Reserved by MyEvent</p>
      </div>
    </footer>
  )
}

export default Footer
