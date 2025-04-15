import React from 'react'
import { Helmet } from 'react-helmet-async'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import TopEvents from '../components/TopEvents/TopEvents'
import UpcomingEvent from '../components/Upcoming/UpcomingEvent'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MyEvent - Discover Amazing Events & Experiences</title>
        <meta
          name="description"
          content="Find and book tickets for the best events, concerts, sports, and more. Browse upcoming events, top-rated experiences, and exclusive offers on MyEvent platform."
        />
        <meta
          name="keywords"
          content="events, tickets, concerts, sports, entertainment, booking, upcoming events"
        />
        <meta
          property="og:title"
          content="MyEvent - Your Ultimate Event Discovery Platform"
        />
        <meta
          property="og:description"
          content="Discover and book tickets for amazing events, concerts, and experiences. Find the best upcoming events in your area."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Carousel />
      <Categories />
      <TopEvents />
      <UpcomingEvent />
    </div>
  )
}

export default Home
