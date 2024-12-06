import React from "react";
import "./home.css";
import homeIMG from "./himg.png"


const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
       
        
      </header>
      <body>  
        <div className="contant">
        <div className="contant1">
        <p className="contant-subtitle">Where ideas meet innovation!</p>
        <p className="contant-title">Divine Tech Solutions</p>
        
        <p className="contant-description">
          Your one-stop center for all technology-related solutions<br></br>
          and expert advice.
        </p>
        <button className="explore-button">Explore</button>
        </div>
        <div className="contaant2">
        <img src = {homeIMG} alt="image" className="himg"></img>
        </div>
        </div>

        {/* who we are section */}


        <div className="who-we-are-main">
        <div className="sub1">
        <p className="sub-head">Who we are?</p>
        <p className="main-head">Your Technology Partner</p>
        </div>
          
        <div className="sub2">
        <p className="sub-description">
        Providing comprehensive technology solutions and expert advice for all <br/> 
        your IT needs. Specializing in software applications, mobile apps, <br/>
        website development, and research consultancy       </p>
        </div>
        </div>

        {/* Explore section  */}

        <div className="main-explore">




          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L13 5V266L0 271V0Z" fill="#283956"/>
          </svg>
          <div className="explore-main-content">
          <div className="sub1">
          <p className="sub-head">Who we are?</p>
          <p className="main-head" style={{color: '#3EADAE'}}>Your Technology Partner</p>
          </div>
          
          <div className="sub2">
          <p className="sub-description" style={{color: 'black', opacity: '0.6'}}>
          Providing comprehensive technology solutions and expert advice for all <br/> 
          your IT needs. Specializing in software applications, mobile apps, <br/>
          website development, and research consultancy       </p>
          </div>
          </div>
          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L0 5V266L13 271V0Z" fill="#283956"/>
          </svg>
        </div>



        </body>
    </div>
  );
};

export default Home;

