import React from 'react'
import trainingIMG from "./168283882_10625981 1.png"
import "./Train.css"

const Train = () => {
  return (
    <div className="Train">
        <img src = {trainingIMG} alt="" />
        <div className='trainig-section'>
            <div className='training-sub-section1'>Empowering <br/>
              individuals and teams</div>
            <div className='training-sub-section2'>At the heart of our mission is the goal to empower individuals and teams with the skills and knowledge they need to thrive in a rapidly evolving world. Our trending courses are carefully curated to meet industry demands, blending practical insights with hands-on learning. From mastering the latest technologies to enhancing creative problem-solving, each course is designed to unlock potential, boost confidence, and drive success. Whether you're an individual seeking growth or a team aiming for excellence, our platform is your gateway to the future</div>
        </div>
      
    </div>
  );
};

export default Train