import { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css'

function App() {

  return (
    <>
      <div className='navbar'>
        <div className='navbar_left'>
          <h2>Dylan Osborne • Personal Trainer</h2>
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
            <p className='text' id='welcome_text'>I am a new personal trainer starting training in 2024. If you are in need of a personal trainer
            then please contact me and we can see if I will be the one to assist you in achieving your goals.</p>
          </div>
        </div>
      </Element>

      <Element name="about_segment" className='about_segment'>
        <div className='segment_div' id='about_segment_div'>
          <div className='container' id='about_segment_container'>
            <h1 className='heading' id='about_heading'>About</h1>
              <p className='text' id='about_text'>Hi, I'm Dylan Osborne, I'm 19 years old and I work as both a developer and a personal trainer. I am a qualified personal trainer that 
                studied at ETA college and received a higher certificate in fitness. I have a training history, coming up to 4 years now, where I mainly focused on body bulding type 
                training. I don't have much experience training others professionally but I have a lot of experience training my friends and family, assisting them to get into training
                eventually leading them to be able to train pn their own.</p>
          </div>
        </div>
      </Element>

      <Element name="offer_segment" className='offer_segment'>
        <div className='segment_div' id='offer_segment_div'>
          <div className='container' id='offer_segment_container'>
            <h1 className='heading' id='offer_heading'>Offers</h1>
              <div className='text' id='offer_text'>
                  <p>Per session: R200</p>
                  <p>3 Session Package: R510 <p className='small_text'>*Save R90, R170/session</p></p>
                  <p>5 Session Package: R800 <p className='small_text'>*Save R200, R160/session</p></p>
              </div>
              <div className='text' id='offer_disclaimer'>
                <p>*Note that the <t className='italic_text'>Session Packages</t> and <t className='italic_text'>Single Session</t> need to be paid up front and refunds will only be given if there is a valid reason for missing the session.</p>
                <p>Refunds will not be be full amount, some amount will be taken off depending on the type of session paid for.</p>
              </div>
          </div>
        </div>
      </Element>

      <Element name="contact_segment" className='contact_segment'>
      <div className='segment_div' id='contact_segment_div'>
          <div className='container' id='contact_segment_container'>
            <h1 className='heading' id='contact_heading'>Contact Info</h1>
              <div className='text' id='contact_text'>
                <p>Email: dylanosbornebuisness@gmail.com</p>
                <p>Contact Number: 061 996 4321</p>
                <p>Instagram: <a id='insta_link' href='https://www.instagram.com/dylanosbornefitness/'>dylanosbornefitness</a></p>
              </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default App
