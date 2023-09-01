import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import './App.css'

function App() {

  // State to track the active link for content rendering
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    document.body.className = getBodyClassName();
  }, [activeLink])
  
  const getBodyClassName = () => {
    switch (activeLink) {
      case 'Home':
        return 'home-background'
      case 'Destination':
        return 'destination-background'
      case 'Crew':
        return 'crew-background'
      case 'Technology':
        return 'technology-background'
    }
  }

  return (
    <React.Fragment>
      {/* Navbar component receives the activeLink state and setActiveLink function */}
      <Navbar activeLink={activeLink} setActiveLink={ setActiveLink } />

      {/* Conditionally render content based on the active link */}
      {activeLink == 'Home' && <Home setActiveLink={ setActiveLink } />}
      {activeLink == 'Destination' && <Destination />}
      {activeLink == 'Crew' && <Crew />}
      {activeLink == 'Technology' && <Technology />}
      
    </React.Fragment>
  )
}

export default App
