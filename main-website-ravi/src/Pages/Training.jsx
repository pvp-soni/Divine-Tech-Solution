import React from 'react'
import "../Pages/Sub_Training.css"

const Training = () => {
  const all_courses = [
    {
      id: 1,
      name: 'Short Term Courses',
      des: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 2,
      name: 'Mobile Application Development',
      des: 'Creating innovative and high-performance mobile applications tailored to your business needs'
    },
    {
      id: 3,
      name: 'Software Testing & Automation',
      des: 'Ensuring quality and efficiency with expert software testing and automation services'
    },
    {
      id: 4,
      name: 'Fullstack Development',
      des: 'Building robust, end-to-end solutions with expert full-stack development services'
    },
    {
      id: 5,
      name: 'Backend Development',
      des: 'Delivering scalable and efficient back-end solutions to power your applications'
    },
    {
      id: 6,
      name: 'Frontend Development',
      des: 'Designing seamless and responsive front-end solutions for an exceptional user experience'
    },
    {
      id: 7,
      name: 'MERN Stack Development',
      des: 'Building dynamic, scalable web applications with expert MERN stack development'
    },
    {
      id: 8,
      name: 'Data Science & Data Analytics',
      des: 'Unlocking insights and driving data-driven decisions with expert data science and analytics services'
    },
    {
      id: 9,
      name: 'Designing',
      des: 'Creating visually captivating and user-centered designs to enhance your brand\'s impact'
    },
  ]
  return (
    <>
    
    <div className="main_head_div">
      <div className="heading">
        Trending IT Courses
        <div className="navigations"><a href="/">Home</a> | Training</div>
      </div>
      <div className="description">
      Enhance your skills with our comprehensive IT training programs designed for professionals and individuals
      </div>
    </div>

    {/* header section of page */}

    <div className="header_section_main">
        <div className='header_section_content'>
           <div className='header'>
              <div className='header_section_heading'>Empowering individuals and teams</div>
              <div className='sub_heading'>with expert IT training to enhance skills and drive success in the digital world </div>
            </div> 
             <div className='header_section_description'>At the heart of our mission is the goal to empower individuals and teams with the skills and knowledge they need to thrive in a rapidly evolving world. Our trending courses are carefully curated to meet industry demands, blending practical insights with hands-on learning. From mastering the latest technologies to enhancing creative problem-solving, each course is designed to unlock potential, boost confidence, and drive success. Whether you're an individual seeking growth or a team aiming for excellence, our platform is your gateway to the future</div>
          </div>
    </div>

    <div className="default_heading_section">
      <div className="default_heading">
        Trending IT Courses
      </div>
      <div className="default_description">
        Offering comprehensive IT training courses to help you master the latest technologies and advance your career
      </div>
    </div>

    {/* all courses section  */}
    <div className="all_courses_main">
      {
        all_courses.map((item, index)=>{
          return(
          <div className="all_course_card">
            <div className="all_course_card_img"></div>
            <div className="all_course_card_head">{item.name}</div>
            <div className="all_course_card_description">{item.des}</div>
          </div>
          );
        })
      }
    </div>
    
    </>
  )
}

export default Training