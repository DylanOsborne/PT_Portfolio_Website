import { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css'

function App() {

  return (
    <>
      <div className='navbar'>
        <div className='navbar_left'>
          <h3>Dylan Osborne</h3>
        </div>

        <div className='navbar_right'>
          <Link to="welcome_segment" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Welcome</button>
          </Link>
          <Link to="about_segment" spy={true} smooth={true} offset={-70} duration={500}>
            <button>About</button>
          </Link>
          <Link to="offer_segment" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Offers</button>
          </Link>
          <Link to="contact_segment" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Contact Info</button>
          </Link>
        </div>
      </div>

      <Element name="welcome_segment" className='welcome_segment'>
        {/* Your content for the "Welcome" section */}
      </Element>

      <Element name="about_segment" className='about_segment'>
        {/* Your content for the "About" section */}
      </Element>

      <Element name="offer_segment" className='offer_segment'>
        {/* Your content for the "Offers" section */}
      </Element>

      <Element name="contact_segment" className='contact_segment'>
        {/* Your content for the "Contact Info" section */}
      </Element>
    </>
  )
}

export default App
