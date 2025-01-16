import React from "react";

const Contact_us = () => {
  return (
    <>
      <div className="main_head_div">
        <div className="heading">
          Contact Us
          <div className="navigations">
            <a href="/">Home</a> | Contact Us
          </div>
        </div>
        <div className="description">
          Enhance your skills with our comprehensive IT training programs
          designed for professionals and individuals
        </div>
      </div>
      <div className="contactUs_body">
        <div className="contactUs_section1">
          <div className="contact_content1">
            <div className="contactUs">
              <div className="ContectUs_heading"> Contact Us</div>
              <div className="ContectUs_description">
                {" "}
                Visit our technology center for expert IT support, software
                solutions, and training in programming languages, web design,
                and mobile app development
              </div>
            </div>
            <div className="contactUs">
              <div className="ContectUs_heading"> Address</div>
              <div className="ContectUs_description">
                {" "}
                The One World, B-611, 150. Raiya Ring Road, Rajkot-360006,
                Gujarat, India
              </div>
            </div>
            <div className="contactUs">
              <div className="ContectUs_heading"> Timing </div>
              <div className="ContectUs_description">
                {" "}
                Monday - Friday <br /> 10AM - 9PM
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8816014469335!2d70.7672384!3d22.3203171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c915531c332d%3A0xce014907c17a41ed!2sThe%20One%20World!5e0!3m2!1sen!2sus!4v1736239676017!5m2!1sen!2sus"
              width="710"
              height="449"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>
        <div className="contactUs_section2">
          <div className="contact_content1">
            <div className="contactUs">
              {/* <div className='ContectUs_heading'> Contact Us</div>   */}
              <div className="ContectUs_description">
                {" "}
                Get in touch with our team for all your technology-related
                solutions and training needs. We are here to assist you
                efficiently
              </div>
            </div>
            <div className="contactUs">
              <div className="ContectUs_heading"> Contact</div>
              <div className="ContectUs_description">
                +91 XXXXX XXXXX <br /> +91 XXXXX XXXXX{" "}
              </div>
            </div>
            <div className="contactUs">
              <div className="ContectUs_heading"> Support </div>
              <div className="ContectUs_description">
                {" "}
                admin@divinetechsolution.in{" "}
              </div>
            </div>
          </div>

          <div className="contact-page-form-123"> 
            <div className="contact-Name">
              <div>Name*</div>
              <input type="text" placeholder="Enter your first name " style={{height:61}}  />
            </div>
            <div className="contact-Email">
              <div>Email*</div>
              <input type="text" placeholder="Enter your Email " style={{height:61}} />
            </div>
            <div className="contact-Message">
              <div> Message* </div>
              <textarea type="text" placeholder="Type your Message here" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
