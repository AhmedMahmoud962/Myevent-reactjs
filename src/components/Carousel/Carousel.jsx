import React, { useState, useEffect, useRef, useCallback } from 'react'
import fetchSliders from '../Api/ApiSlider'
import fallbackImage from '../../assets/fallback-image.jpg' // تأكد إن الملف موجود
import './Carousel.css'

const BASE_URL = 'https://myevnt.ai'

const Carousel = () => {
  const [slides, setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [imageLoading, setImageLoading] = useState({})
  const autoNextRef = useRef(null)
  const timeAutoNext = 4000

  useEffect(() => {
    const getSliders = async () => {
      try {
        const data = await fetchSliders()
        const formattedSlides = data.map((slider) => {
          const mainImage = slider.media.find((media) => media.name === 'image')
          return {
            id: slider.id,
            img: mainImage ? `${BASE_URL}${mainImage.path}` : fallbackImage,
            author: 'Unknown',
            title: slider.title || 'Event Slider',
            topic: 'General',
            description: slider.description || 'Check out this amazing event.',
          }
        })
        setSlides(formattedSlides)
        setLoading(false)
      } catch (err) {
        setError('Failed to load sliders. Please try again.')
        setLoading(false)
      }
    }
    getSliders()
  }, [])

  const showSliderByIndex = (index) => {
    setCurrentSlide(index)
  }

  const showSlider = useCallback(
    (direction) => {
      setCurrentSlide((prev) => {
        if (direction === 'next')
          return prev === slides.length - 1 ? 0 : prev + 1
        if (direction === 'prev')
          return prev === 0 ? slides.length - 1 : prev - 1
        return prev
      })
    },
    [slides.length],
  )

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      showSlider('next')
    }
    if (isRightSwipe) {
      showSlider('prev')
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    if (!isPaused && !loading && !error) {
      autoNextRef.current = setTimeout(() => {
        showSlider('next')
      }, timeAutoNext)
    }
    return () => clearTimeout(autoNextRef.current)
  }, [currentSlide, isPaused, loading, error, showSlider])

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="list">
        {loading ? (
          <div className="loading-message">
            <p>Loading...</p>
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : slides.length > 0 ? (
          slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="overlay"></div>
              {imageLoading[slide.id] !== false && (
                <div className="image-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <img
                src={slide.img}
                alt={slide.title}
                onLoad={() =>
                  setImageLoading((prev) => ({ ...prev, [slide.id]: false }))
                }
                onError={(e) => {
                  e.target.src = fallbackImage
                  setImageLoading((prev) => ({ ...prev, [slide.id]: false }))
                }}
                style={{
                  display: imageLoading[slide.id] === false ? 'block' : 'none',
                }}
              />
              {/* <div className="content">
                <div className="author">{slide.author}</div>
                <div className="title">{slide.title}</div>
                <div className="topic">{slide.topic}</div>
                <div className="des">{slide.description}</div>
                <div className="buttons">
                  <a href="#">Explore Now</a>
                </div>
              </div> */}
            </div>
          ))
        ) : (
          <div className="no-data-message">
            <p>No sliders available.</p>
          </div>
        )}
      </div>

      {!loading && !error && slides.length > 0 && (
        <div className="arrows">
          <button onClick={() => showSlider('prev')}>❮</button>
          <button onClick={() => showSlider('next')}>❯</button>
        </div>
      )}
    </div>
  )
}

export default Carousel

// import React, { useState, useEffect, useRef, useCallback } from 'react'
// import slide1 from '../../assets/carousel/slide-1.jpg'
// import slide2 from '../../assets/carousel/slide-2.jpg'
// import slide3 from '../../assets/carousel/slide-3.jpg'
// import slide4 from '../../assets/carousel/slide-4.jpg'
// import './Carousel.css'

// const slides = [
//   {
//     id: 1,
//     img: slide1,
//     author: 'John Doe',
//     title: 'Amazing View',
//     topic: 'Nature',
//     description: 'Enjoy the beauty of nature.',
//   },
//   {
//     id: 2,
//     img: slide2,
//     author: 'Jane Smith',
//     title: 'City Lights',
//     topic: 'Urban',
//     description: 'Experience the night life in the city.',
//   },
//   {
//     id: 3,
//     img: slide3,
//     author: 'Alex Brown',
//     title: 'Serene Beach',
//     topic: 'Travel',
//     description: 'Relax at the most beautiful beaches.',
//   },
//   {
//     id: 4,
//     img: slide4,
//     author: 'Emily Clark',
//     title: 'Mountain Peaks',
//     topic: 'Adventure',
//     description: 'Reach the highest mountains.',
//   },
// ]

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isPaused, setIsPaused] = useState(false)
//   const [touchStart, setTouchStart] = useState(null)
//   const [touchEnd, setTouchEnd] = useState(null)
//   const autoNextRef = useRef(null)
//   const timeAutoNext = 4000 // Auto-slide interval (4 seconds)

//   const showSliderByIndex = (index) => {
//     setCurrentSlide(index)
//   }

//   const showSlider = useCallback((direction) => {
//     setCurrentSlide((prev) => {
//       if (direction === 'next') return prev === slides.length - 1 ? 0 : prev + 1
//       if (direction === 'prev') return prev === 0 ? slides.length - 1 : prev - 1
//       return prev
//     })
//   }, [])

//   // Touch event handlers
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX)
//   }

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return

//     const distance = touchStart - touchEnd
//     const isLeftSwipe = distance > 50
//     const isRightSwipe = distance < -50

//     if (isLeftSwipe) {
//       showSlider('next')
//     }
//     if (isRightSwipe) {
//       showSlider('prev')
//     }

//     setTouchStart(null)
//     setTouchEnd(null)
//   }

//   useEffect(() => {
//     if (!isPaused) {
//       autoNextRef.current = setTimeout(() => {
//         showSlider('next')
//       }, timeAutoNext)
//     }
//     return () => clearTimeout(autoNextRef.current)
//   }, [currentSlide, isPaused, showSlider])

//   return (
//     <div
//       className="carousel"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="list">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${index === currentSlide ? 'active' : ''}`}
//           >
//             <div className="overlay"></div>
//             <img src={slide.img} alt={slide.title} />
//             <div className="content">
//               <div className="author">{slide.author}</div>
//               <div className="title">{slide.title}</div>
//               <div className="topic">{slide.topic}</div>
//               <div className="des">{slide.description}</div>
//               <div className="buttons">
//                 <a href="#">Explore Now</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="arrows">
//         <button onClick={() => showSlider('prev')}>❮</button>
//         <button onClick={() => showSlider('next')}>❯</button>
//       </div>
//     </div>
//   )
// }

// export default Carousel
