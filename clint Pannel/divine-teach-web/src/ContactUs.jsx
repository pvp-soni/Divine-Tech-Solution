import React from 'react'
import "./home.css"

const ContactUs = () => {
  return (
    <>
    <div className='Bcontact' >
        <div className='Bcontact-section1'>
             <div className='Bcontact-sub-section1'>
                <div className='Bcontact-title'>
                Contact Us
                </div>
                <div className='Bcontact-subtitle'>
                Visit our technology center for expert IT support, software solutions,<br/>
                 and training in programming languages, web design, and mobile <br/>
                 app development.
                </div>
            </div> 
            <div className='Bcontact-sub-section2'>
                <div className='Badd'>
                Address
                </div>
                <div className='Bsub-add'>
                The One World, B-611, 150. Raiya Ring Road, <br/> 
                Rajkot-360006, Gujarat, India
                </div>
            </div> 
            <div className='Bcontact-sub-section3'>
                <div className='Btime'>
                Time
                </div>
                <div className='Bsub-time'>
                Mon-Fri 10am-9pm
                </div>
            </div> 
        </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.881601984532!2d70.76466347539086!3d22.320317079672176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c915531c332d%3A0xce014907c17a41ed!2sThe%20One%20World!5e0!3m2!1sen!2sin!4v1733995836484!5m2!1sen!2sin" width="600" height="450" style={{border: '1px'}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className='Acontact'>
        <div className='Acontact-section1'>
             <div className='Acontact-sub-section1'>
                <div className='Acontact-title'>
                Contact 
                </div>
                <div className='Acontact-subtitle'>
                Get in touch with our team for all your technology-related solutions and <br/>
                training needs. We are here to assist you efficiently.
                </div>
            </div> 
            <div className='Acontact-sub-section2'>
                <div className='Aadd'>
                Tech
                </div>
                <div className='Asub-add'>
                +91 84909 80192
                </div>
            </div> 
            <div className='Acontact-sub-section3'>
                <div className='Atime'>
                Support
                </div>
                <div className='Asub-time'>
                admin@divinetechsolutions.com
                </div>
            </div> 
        </div>
        <div className="contactForm">
              <div className="contactForm1-2">
                <label>Contact</label>
                <input type="text" placeholder="Enter your first name "/>
              </div>
              <div className="contactForm1-2">
                <label>Email*</label>
                <input type="text" placeholder="Enter your Email "/>
              </div>
              <div className="contactForm1-2">
                <label> Message* </label>
                <textarea type="text" placeholder="Type your Message here"/>
              </div>
               <button className="send-message"> send Message </button>
            
        </div>
        
         
    </div>

    </>
  )
}

export default ContactUs
