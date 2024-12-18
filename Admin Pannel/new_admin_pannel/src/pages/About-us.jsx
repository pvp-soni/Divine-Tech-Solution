import React from 'react'

const About_us = () => {
  return (
    <>
    <div className="about_us_main_body">  
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Address</div>
          <div>The One World, B-611, 150. Raiya Ring Road, Rajkot-360006, Gujarat, India</div>
        </div>
        <div className='about_us_card_button'>
        <button className='edit-btn'> Edit Address </button>
        </div>
      </div>
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Contact</div>
          <div>+91 84909 80192</div>
        </div>
        <div className='about_us_card_button'>
        <button className='edit-btn'> Edit Contact </button>
        </div>
      </div>
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Email</div>
          <div>admin@divinetechsolutions.com</div>
        </div>
        <div className='about_us_card_button'>
        <button className='edit-btn'> Edit Email </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About_us