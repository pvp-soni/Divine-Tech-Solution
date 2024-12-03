import React from 'react'
import './styles.css'
import Delete from './assets/delete_png.png';
import Edit from './assets/edit_png.png';

const Courses = () => {
  const coursesCategories = [
    {
      id: 1,
      name: 'Short-Term Courses',
      items: [
        'PHP & Laravel',
        'Software Engineering',
        'Android',
        'Java',
        'Flutter',
        'Python',
        'Ios',
        'Automation Testing',
        'React JS',
        'Graphic Designing',
        'Web Designing',
        'UIUX',
        'Digital Marketing'
      ]
    },
    {
      id: 2,
      name: 'Mobile Application Development',
      items: [
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4'
      ]
    },
    {
      id: 3,
      name: 'Software Testing & Automation',
      items: [
        'Module 1 - Software Testing',
        'Module 2 - Web Automation Testing with Selenium',
        'Module 3 - Mobile Automation Testing with Appium',
        'Module 4 - API Testing with Postman'
      ]
    },
  ]
  return (
    <>
    
    <div className='inline-display'>
      <button className='add-btn'>
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
          <button className='edit-btn'> Edit Category </button>
          <button className='delete-btn'> Delete Category </button>
          </div>
          </div>
          <div className='course_body'>
            {
              item.items.map((content, index)=>{
                return(
                  <div className='inside_content_card'>{content}<div><img src={Delete}></img><img src={Edit}></img></div></div>
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