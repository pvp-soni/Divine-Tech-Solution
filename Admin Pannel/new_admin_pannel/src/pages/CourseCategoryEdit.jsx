import React from 'react'
import Courses from './Courses';

const CourseCategoryEdit = () => {
    const contents = [
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
      ];
  return (
    <>
    <div className='inline-display'>
      <button className='edit-btn'>
        Save
      </button>
    </div>
    <div className='edit_page_main_div'>
        <div className='eidt_image_section'>
            <img src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'></img>
            <button className='add-btn'> Edit Image </button>
        </div>
        <div className='edit_content_section'>
            <div id='content-section'>
                {
                    contents.map((item, index)=>{
                        return (
                            <div className="content_item">
                                {item}
                            <div>
                            <div><svg style={{scale: '110%'}} width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8872 1.22793C12.6622 0.997089 12.3951 0.813982 12.1011 0.689078C11.8071 0.564174 11.492 0.499924 11.1738 0.5C10.8556 0.500076 10.5405 0.564477 10.2466 0.689522C9.95264 0.814566 9.68561 0.997802 9.46077 1.22875L1.85517 9.03997C1.402 9.50583 1.14739 10.137 1.14717 10.795V13.4231C1.14717 13.7628 1.41597 14.0385 1.74717 14.0385H4.32557C4.96797 14.0385 5.58397 13.7759 6.03757 13.3107L13.6376 5.51097C14.0909 5.0449 14.3455 4.41343 14.3455 3.75509C14.3455 3.09674 14.0909 2.46528 13.6376 1.99921L12.8872 1.22793ZM0.947168 15.2692C0.788038 15.2692 0.635426 15.3341 0.522904 15.4495C0.410382 15.5649 0.347168 15.7214 0.347168 15.8846C0.347168 16.0478 0.410382 16.2044 0.522904 16.3198C0.635426 16.4352 0.788038 16.5 0.947168 16.5H13.7472C13.9063 16.5 14.0589 16.4352 14.1714 16.3198C14.284 16.2044 14.3472 16.0478 14.3472 15.8846C14.3472 15.7214 14.284 15.5649 14.1714 15.4495C14.0589 15.3341 13.9063 15.2692 13.7472 15.2692H0.947168Z" fill="#008CFF"/>
                            </svg></div>
                            <div><svg style={{scale: '150%'}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.25L1.5 7.75M1.5 1.25L8 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='input_section'>
            <input type="text" name="" id="" placeholder='Enter New Item' />
            <button className='add-btn'> Add Item </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseCategoryEdit