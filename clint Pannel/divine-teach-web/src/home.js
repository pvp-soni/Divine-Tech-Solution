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
        <div className="section1">
        <div className="sub-section1">
        <p className="section1-subtitle">Who we are?</p>
        <p className="section1-title">Your Technology Partner</p>
        
        <p className="section1-description">
        Providing comprehensive technology solutions and expert advice for all <br/> 
        your IT needs. Specializing in software applications, mobile apps, <br/>
        website development, and research consultancy       </p>
        </div>
        </div>
        </body>
    </div>
  );
};

export default Home;

