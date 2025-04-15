import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Avatar,
} from '@mui/material'
import { Link } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import logo from '../../assets/logo.png'
import logoDark from '../../assets/logo-white.png' // You'll need to add this dark mode logo
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  )
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(null)
  const [userMenu, setUserMenu] = useState(null)

  // Mock isLoggedIn state - replace with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light',
    )
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleUserMenuOpen = (event) => {
    setUserMenu(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setUserMenu(null)
  }

  // For demo purposes - toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        bgcolor: 'background.paper',
        padding: '7px 0',
      }}
      className="navbar"
    >
      <Container maxWidth="lg" sx={{ maxWidth: '1300px !important' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo - Changes based on dark/light mode */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src={darkMode ? logoDark : logo}
              alt="Logo"
              style={{ height: '40px' }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button className="nav-item" component={Link} to="/music">
              Music
            </Button>
            <Button className="nav-item" component={Link} to="/business">
              Business
            </Button>
            <Button className="nav-item" component={Link} to="/comedy">
              Comedy
            </Button>
            <Button
              className="nav-item"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              More <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem component={Link} to="/sports">
                Sports
              </MenuItem>
              <MenuItem component={Link} to="/tech">
                Tech
              </MenuItem>
            </Menu>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              className="organizations-btn"
              component={Link}
              to="/organizer"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Create Event
            </Button>

            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
              <>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                  }}
                >
                  <Button
                    onClick={handleUserMenuOpen}
                    sx={{ textTransform: 'none', color: 'var(--nav-text)' }}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    <Avatar sx={{ width: 32, height: 32, mr: 1 }}>U</Avatar>
                  </Button>
                  <Menu
                    anchorEl={userMenu}
                    open={Boolean(userMenu)}
                    onClose={handleUserMenuClose}
                  >
                    <MenuItem component={Link} to="/profile">
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/tickets">
                      My Tickets
                    </MenuItem>
                    <MenuItem component={Link} to="/settings">
                      Settings
                    </MenuItem>
                    <MenuItem onClick={toggleLogin}>Logout</MenuItem>
                  </Menu>
                </Box>
              </>
            ) : (
              <Button
                className="nav-btn"
                onClick={toggleLogin} // For demo purposes
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                Login
              </Button>
            )}

            {/* Dark Mode Toggle */}
            <IconButton
              className="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
            </IconButton>

            {/* Mobile Menu */}
            <IconButton
              className="mobile-menu-toggle"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={(e) => setMobileMenu(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenu}
              open={Boolean(mobileMenu)}
              onClose={() => setMobileMenu(null)}
            >
              <MenuItem component={Link} to="/music">
                Music
              </MenuItem>
              <MenuItem component={Link} to="/business">
                Business
              </MenuItem>
              <MenuItem component={Link} to="/comedy">
                Comedy
              </MenuItem>
              <MenuItem component={Link} to="/sports">
                Sports
              </MenuItem>
              <MenuItem component={Link} to="/tech">
                Tech
              </MenuItem>
              <MenuItem component={Link} to="/organizer">
                For Organizer
              </MenuItem>

              {/* Conditional rendering for mobile menu */}
              {isLoggedIn ? (
                <>
                  <MenuItem component={Link} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/tickets">
                    My Tickets
                  </MenuItem>
                  <MenuItem component={Link} to="/settings">
                    Settings
                  </MenuItem>
                  <MenuItem onClick={toggleLogin}>Logout</MenuItem>
                </>
              ) : (
                <MenuItem onClick={toggleLogin}>Login</MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
