import React, { useEffect, useState } from 'react'
import axios from 'axios';

const About_us = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(async ()=>{
    try {
          const response = await axios.get('http://localhost:8888/contact');
          setContactData(response.data);
          console.log(contactData);
        } catch (error) {
          console.log(error);
        }
  },[]);
  return (
    <>
    <div className="about_us_main_body">  
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Address</div>
          <div>{contactData.map((item,index)=>{ return item.Address })}</div>
        </div>
        <div className='about_us_card_button'>
        <button className='edit-btn'> Edit Address </button>
        </div>
      </div>
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Contact</div>
          {contactData.map((item,index)=>{
            return (
              item.Contact.map((nitem, index)=>{
                return(
                  <div>{nitem}</div>
                )
              })
            )
          })}
        </div>
        <div className='about_us_card_button'>
        <button className='edit-btn'> Edit Contact </button>
        </div>
      </div>
      <div className='about_us_card'>
        <div className="about_us_card_content">
          <div>Email</div>
          <div>{contactData.map((item,index)=>{ return item.Email })}</div>
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