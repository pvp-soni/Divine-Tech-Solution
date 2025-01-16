import React from 'react'
// import './bgColor.css'

const Services2 = () => {
  return (
    <>
    
    <div className="main_head_div">
      <div className="heading">
        Services
        <div className="navigations"><a href="/">Home</a> | Services</div>
      </div>
      <div className="description">
      Enhance your skills with our comprehensive IT training programs designed for professionals and individuals
      </div>
    </div>

    <div style={{display: 'flex',justifyContent: 'center'}}>
    <div className="default_heading_section">
      <div className="default_heading">
        Core IT Services
      </div>
      <div className="default_description">
      Empowering businesses with tailored IT solutions, including consulting, infrastructure, software development, and cybersecurity
      </div>
    </div>
    </div>

    <div className="service_card">
      <div className="service_img_and_name">
        <div className="service_img"></div>
        <div className="service_name">
          <div className="service_name_heading">Website Development</div>
          <div className="service_name_description">Custom websites, e-commerce platforms and web application</div>
        </div>
      </div>
      <div className="service_card_details">
        Frontend Development - React.js, Angular, Vue.js<br/>
        Backend Development - Node.js, Django<br/>
        Full-Stack Development - End-to-end solutions covering frontend and backend<br/>
        E-Commerce Development - Shopify, WooCommerce<br/>
        CMS Development - WordPress<br/>
        Progressive Web Apps (PWA) - Web apps with native app-like features<br/>
        API Development & Integration - Custom APIs, third-party integrations<br/>
        <div className="service_card_animation_div"></div>
      </div>
      
    </div>
    
    </>
  )
}

export default Services2