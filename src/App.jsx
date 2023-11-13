import { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css'

function App() {

  return (
    <>
      <div className='navbar'>
        <div className='navbar_left'>
          <h2>Dylan Osborne</h2>
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
        <div className='segment_div' id='welcome_segment_div'>
          <div className='container' id='welcome_segment_container'>
            <h1 className='heading' id='welcome_heading'>Welcome</h1>
            <p className='text' id='welcome_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend tortor vitae varius luctus. Vivamus dapibus euismod est, at aliquam sem finibus sit amet. 
              Praesent pulvinar tempor tempus. Aenean ornare lectus ac elit sollicitudin dictum. Praesent molestie vestibulum orci, nec posuere purus ornare ac. Praesent id dui diam. 
              Sed faucibus leo nec nisi elementum, quis lacinia magna tincidunt. Proin laoreet bibendum nunc sit amet dictum.</p>
          </div>
        </div>
      </Element>

      <Element name="about_segment" className='about_segment'>
        <div className='segment_div' id='about_segment_div'>
          <div className='container' id='about_segment_container'>
            <h1 className='heading' id='about_heading'>About</h1>
              <p className='text' id='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend tortor vitae varius luctus. Vivamus dapibus euismod est, at aliquam sem finibus sit amet. 
                Praesent pulvinar tempor tempus. Aenean ornare lectus ac elit sollicitudin dictum. Praesent molestie vestibulum orci, nec posuere purus ornare ac. Praesent id dui diam. 
                Sed faucibus leo nec nisi elementum, quis lacinia magna tincidunt. Proin laoreet bibendum nunc sit amet dictum.</p>
          </div>
        </div>
      </Element>

      <Element name="offer_segment" className='offer_segment'>
        <div className='segment_div' id='offer_segment_div'>
          <div className='container' id='offer_segment_container'>
            <h1 className='heading' id='offer_heading'>Offers</h1>
              <p className='text' id='offer_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend tortor vitae varius luctus. Vivamus dapibus euismod est, at aliquam sem finibus sit amet. 
                Praesent pulvinar tempor tempus. Aenean ornare lectus ac elit sollicitudin dictum. Praesent molestie vestibulum orci, nec posuere purus ornare ac. Praesent id dui diam. 
                Sed faucibus leo nec nisi elementum, quis lacinia magna tincidunt. Proin laoreet bibendum nunc sit amet dictum.</p>
          </div>
        </div>
      </Element>

      <Element name="contact_segment" className='contact_segment'>
        <div className='contact_segment_div'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend tortor vitae varius luctus. Vivamus dapibus euismod est, at aliquam sem finibus sit amet. 
            Praesent pulvinar tempor tempus. Aenean ornare lectus ac elit sollicitudin dictum. Praesent molestie vestibulum orci, nec posuere purus ornare ac. Praesent id dui diam. 
            Sed faucibus leo nec nisi elementum, quis lacinia magna tincidunt. Proin laoreet bibendum nunc sit amet dictum.</p>
        </div>
      </Element>
    </>
  )
}

export default App
