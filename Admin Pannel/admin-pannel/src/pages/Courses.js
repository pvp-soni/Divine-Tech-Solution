import React from 'react'
import './styles.css'
import Delete from './assets/delete_png.png';
import Edit from './assets/edit_png.png';

const Courses = () => {
  return (
    <>
    
    <div className='inline-display'>
      <button className='add-btn'>
        Add New Category
      </button>
    </div>

    {/* short-term courses */}
    <div className='course-head-div'>
      Short-Term Courses
      <div>
      <button className='add-btn'> Add Course </button>
      <button className='edit-btn'> Edit Category </button>
      <button className='delete-btn'> Delete Category </button>
      </div>
    </div>
    <div className='course_body'>
      <div className='inside_content_card'>PHP & Laravel <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>HTML & HTML5 <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>CSS & CSS3 <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Database Connectivity <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Advance PHP <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Application to industrial project <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>MVC <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Laravel Framework <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Laravel Forms & Migration <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Laravel Controllers & Routes <div><img src={Delete}></img><img src={Edit}></img></div></div>
    </div>

    {/* mobile app development */}
    <div className='course-head-div'>
      Mobile Application Development
      <div>
      <button className='add-btn'> Add Course </button>
      <button className='edit-btn'> Edit Category </button>
      <button className='delete-btn'> Delete Category </button>
      </div>
    </div>
    <div className='course_body'>
      <div className='inside_content_card'>Level 1 <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Level 2 <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Level 3 <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Level 4 <div><img src={Delete}></img><img src={Edit}></img></div></div>
    </div>
    
    {/* Software Testing & Automation */}
    <div className='course-head-div'>
      Software Testing & Automation
      <div>
      <button className='add-btn'> Add Course </button>
      <button className='edit-btn'> Edit Category </button>
      <button className='delete-btn'> Delete Category </button>
      </div>
    </div>
    <div className='course_body'>
      <div className='inside_content_card'>Module 1 - Software Testing <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 2 - Web Automation Testing with Selenium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 3 - Mobile Automation Testing with Appium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 4 - API Testing with Postman <div><img src={Delete}></img><img src={Edit}></img></div></div>
    </div>
    {/* Software Testing & Automation */}
    <div className='course-head-div'>
      Software Testing & Automation
      <div>
      <button className='add-btn'> Add Course </button>
      <button className='edit-btn'> Edit Category </button>
      <button className='delete-btn'> Delete Category </button>
      </div>
    </div>
    <div className='course_body'>
      <div className='inside_content_card'>Module 1 - Software Testing <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 2 - Web Automation Testing with Selenium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 3 - Mobile Automation Testing with Appium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 4 - API Testing with Postman <div><img src={Delete}></img><img src={Edit}></img></div></div>
    </div>
    {/* Software Testing & Automation */}
    <div className='course-head-div'>
      Software Testing & Automation
      <div>
      <button className='add-btn'> Add Course </button>
      <button className='edit-btn'> Edit Category </button>
      <button className='delete-btn'> Delete Category </button>
      </div>
    </div>
    <div className='course_body'>
      <div className='inside_content_card'>Module 1 - Software Testing <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 2 - Web Automation Testing with Selenium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 3 - Mobile Automation Testing with Appium <div><img src={Delete}></img><img src={Edit}></img></div></div>
      <div className='inside_content_card'>Module 4 - API Testing with Postman <div><img src={Delete}></img><img src={Edit}></img></div></div>
    </div>

    
    </>
  )
}

export default Courses