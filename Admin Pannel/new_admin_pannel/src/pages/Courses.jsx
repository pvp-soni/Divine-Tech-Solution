import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Courses = () => {
  const navigate = useNavigate();
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [addCourseModal, setAddCourseModal] = useState(false);
  const toggleAddCategoryModal = () => {
    setAddCategoryModal(!addCategoryModal);
  }
  const toggleAddCourseModal = () => {
    setAddCourseModal(!addCourseModal);
  }
  const editCategoryPage = (id) => {
    navigate('/courses/'+id);
  }
  const delete_svg = <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className='svg_btn' d="M2.96317 16.385C2.5025 16.385 2.11817 16.231 1.81017 15.923C1.50217 15.615 1.34783 15.2303 1.34717 14.769V2.385H0.347168V1.385H4.34717V0.614998H10.3472V1.385H14.3472V2.385H13.3472V14.77C13.3472 15.23 13.1932 15.6143 12.8852 15.923C12.5772 16.2317 12.1925 16.3857 11.7312 16.385H2.96317ZM5.15517 13.385H6.15517V4.385H5.15517V13.385ZM8.53917 13.385H9.53917V4.385H8.53917V13.385Z" fill="#FF4649"/>
  </svg>;
  const edit_svg = <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.8872 1.22793C12.6622 0.997089 12.3951 0.813982 12.1011 0.689078C11.8071 0.564174 11.492 0.499924 11.1738 0.5C10.8556 0.500076 10.5405 0.564477 10.2466 0.689522C9.95264 0.814566 9.68561 0.997802 9.46077 1.22875L1.85517 9.03997C1.402 9.50583 1.14739 10.137 1.14717 10.795V13.4231C1.14717 13.7628 1.41597 14.0385 1.74717 14.0385H4.32557C4.96797 14.0385 5.58397 13.7759 6.03757 13.3107L13.6376 5.51097C14.0909 5.0449 14.3455 4.41343 14.3455 3.75509C14.3455 3.09674 14.0909 2.46528 13.6376 1.99921L12.8872 1.22793ZM0.947168 15.2692C0.788038 15.2692 0.635426 15.3341 0.522904 15.4495C0.410382 15.5649 0.347168 15.7214 0.347168 15.8846C0.347168 16.0478 0.410382 16.2044 0.522904 16.3198C0.635426 16.4352 0.788038 16.5 0.947168 16.5H13.7472C13.9063 16.5 14.0589 16.4352 14.1714 16.3198C14.284 16.2044 14.3472 16.0478 14.3472 15.8846C14.3472 15.7214 14.284 15.5649 14.1714 15.4495C14.0589 15.3341 13.9063 15.2692 13.7472 15.2692H0.947168Z" fill="#008CFF"/>
  </svg>;
  const coursesCategories = [
    {
      id: 1,
      name: 'Short-Term Courses',
      items: [
        'Core PHP',
        'HTML & HTML5',
        'CSS & CSS3',
        'Database Connectivity',
        'Advance PHP',
        'File Handling',
        'MVC',
        'Laravel Framework',
        'Laravel Forms & Migration',
        'Laravel Controllers & Routes',
        'Application to industrial project'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 2,
      name: 'Mobile Application Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 3,
      name: 'Software Testing & Automation',
      items: [
        'Module 1 - Software Testing',
        'Module 2 - Web Automation Testing with Selenium',
        'Module 3 - Mobile Automation Testing with Appium',
        'Module 4 - API Testing with Postman'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 4,
      name: 'Fullstack Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
        'Level 5',
        'Level 6'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 5,
      name: 'Backend Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 6,
      name: 'Frontend Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 7,
      name: 'MERN Stack Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
        'Level 5',
        'Level 6'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 8,
      name: 'Data Science & Analytics',
      items: [
        'Career In Data Science',
        'Career In Data Anaytics'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    },
    {
      id: 9,
      name: 'Designing',
      items: [
        'Graphic Designing',
        'UIUX Designing'
      ],
      description: 'Master in-demand skills with our quick, focused IT courses for career growth'
    }
  ]
  if(addCategoryModal){
    document.body.classList.add('active-modal')
  }
  else{
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    {
      addCategoryModal && (
        <div className='modal'>
        <div className="overlay" onClick={toggleAddCategoryModal}></div>
          <div className="modal-content">
          <div className='modal-head'><h3>Add New Course Category</h3>
          <svg style={{scale: '160%', cursor: 'pointer'}} onClick={toggleAddCategoryModal} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.25L1.5 7.75M1.5 1.25L8 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <form action="" method="get" className='modal-form'>
            <div>
            <label htmlFor="">Course Category Name</label>
            <input type='text' name="" id="" className='input-field' required/>
            </div>
            <div>
            <label htmlFor="">Course Category Discription</label>
            <input type="text" name="" id="" className='input-field' required/>
            </div>
            <div>
            <label htmlFor="course-image" className='add-btn'>Upload Image*</label>
            <input type="file" name="course-image" id="course-image" accept='image/*' required/>
            </div>
            <div className="div">
              <input type="submit" value="Add" className='edit-btn'/>
              <input type="reset" value="Clear" className='delete-btn' />
            </div>
          </form>
          </div>
        </div>
      )
    }
    {
      addCourseModal && (
        <div className='modal'>
        <div className="overlay" onClick={toggleAddCategoryModal}></div>
          <div className="modal-content">
          <div className='modal-head'><h3>Add New Course Category</h3>
          <svg style={{scale: '160%', cursor: 'pointer'}} onClick={toggleAddCategoryModal} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.25L1.5 7.75M1.5 1.25L8 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <form action="" method="get" className='modal-form'>
            <div>
            <label htmlFor="">Course Category Name</label>
            <input type='text' name="" id="" className='input-field' required/>
            </div>
            <div>
            <label htmlFor="">Course Category Discription</label>
            <input type="text" name="" id="" className='input-field' required/>
            </div>
            <div>
            <label htmlFor="course-image" className='add-btn'>Upload Image*</label>
            <input type="file" name="course-image" id="course-image" accept='image/*' required/>
            </div>
            <div className="div">
              <input type="submit" value="Add" className='edit-btn'/>
              <input type="reset" value="Clear" className='delete-btn' />
            </div>
          </form>
          </div>
        </div>
      )
    }
    
    <div className='inline-display'>
      <button className='add-btn' onClick={toggleAddCategoryModal}>
        Add New Category
      </button>
    </div>

    {/* short-term courses */}
    {
      coursesCategories.map((item, index)=>{
        return (
          <>
          <div className='course-head-div'>
            {item.name}
          <div>
          <button className='add-btn'> Add Course </button>
          <button className='edit-btn' onClick={()=>{editCategoryPage(item.id)}}> Edit Category </button>
          <button className='delete-btn'> Delete Category </button>
          </div>
          </div>
          <div className='course_body'>
            {
              item.items.map((content, index)=>{
                return(
                  <div className='inside_content_card'>{content}<div><div>{delete_svg}</div><div>{edit_svg}</div></div></div>
                )
              })
            }
          </div>
          </>
        )
      })
    }
    </>
  )
}

export default Courses