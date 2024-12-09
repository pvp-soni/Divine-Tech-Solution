import React from 'react'
import Graphic1 from '../assets/graphic1.png'
import itTrainingCenter from '../assets/it_training_center_png.png'
import mobileAppDevelopment from '../assets/mobile_app_development_png.png'
import webDesignServices from '../assets/web_design_services_png.png'

const Home = () => {
    const trendingCourses = [
        {
            id: 1,
            title: 'Short-Term Courses',
            description: 'Master in-demand skills with our quick, focused IT courses for career growth'
        }
    ]
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <div className="main_container">

        {/* main section  */}

        <div className="main_bg">
        <div className="tag_line">
            <div>
                <div className="sub_head">
                    Where ideas meet innovation!
                </div>
                <div className="main_head">
                    DivinetechSolutions
                </div>
                <div className="sub_head">
                    Your one-stop center for all technology-related solutions and expert advice
                </div>
            </div>
            <button className='primary_btn'>Explore</button>
        </div>
        <div className="side_image">
            <img src={Graphic1} alt="" height={488} width={488} />
        </div>
        </div>

        {/* who we are section */}


        <div className="who-we-are-main">
            <div className="quick_section">
                <div className="quick_section_card">
                    <div className="quick_section_card_1">
                        <img src={itTrainingCenter} height={82} width={100} alt="" />
                        It Training Center
                    </div>
                    <div className="quick_section_card_2">
                        Foundational training in programming languages and web design & development    
                    </div>                    
                </div>
                <div className="quick_section_card">
                    <div className="quick_section_card_1">
                        <img src={mobileAppDevelopment} alt="" height={82} width={82}/>
                        Mobile App Development
                    </div>
                    <div className="quick_section_card_2">
                    Mobile and cross-platform application development training for corporations and individuals
                    </div>
                </div>
                <div className="quick_section_card">
                    <div className="quick_section_card_1">
                        <img src={webDesignServices} height={82} width={82} alt="" />
                        Web Design Services
                    </div>
                    <div className="quick_section_card_2">
                    Crafting responsive, user-friendly websites with modern web technologies
                    </div>
                </div>
            </div>
        <div className="sub1">
        <p className="sub-head">Who we are?</p>
        <p className="main-head">Your Technology Partner</p>
        </div>
          
        <div className="sub2">
            <div className="sub-description">
        Providing comprehensive technology solutions and expert advice for all your IT needs. Specializing in software applications, mobile apps, website development, and research consultancy
        </div>
        </div>
        </div>

        {/* Explore section  */}

        <div className="main-explore">
          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L13 5V266L0 271V0Z" fill="#283956"/>
          </svg>
          <div className="explore-main-content">
          <div className="sub1">
          <p className="sub-head">Explore</p>
          <p className="main-head" style={{color: '#3EADAE'}}>Our Trending IT Courses</p>
          </div>
          
          <div className="sub2">
          <p className="sub-description" style={{color: 'black', opacity: '0.6'}}>
          Stay ahead in the tech world with our curated selection of trending IT courses. Learn cutting-edge skills and tools to excel in today's competitive industry. Start your journey to success with expert-led training and hands-on projects
          </p>
          </div>
          </div>
          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L0 5V266L13 271V0Z" fill="#283956"/>
          </svg>
        </div>

        {/* trending it courses section */}

        <div className="trending_courses_main_div">
            <div className='courses_main_div'>
            <div className="course_card">
                <div className="course_img">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/Y4LJ41ZXZJuQK2E8/short-term-course-3-YbNvKWvq9nCWMNx3.webp" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            <div className="course_card">
                <div className="course_img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop,trim=0;35.98393574297189;0;215.9036144578313/Y4LJ41ZXZJuQK2E8/1711974550479-AoPvO3qnRLfv0jo8.jpg" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            <div className="course_card">
                <div className="course_img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/Y4LJ41ZXZJuQK2E8/gradient-api-infographic_23-2149-A1aw7OPgNkfVK4n5.jpg" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            <div className="course_card">
                <div className="course_img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/Y4LJ41ZXZJuQK2E8/java-full-stack-developer-specialization-2-AzGe6QXZrkho1PXd.png" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            <div className="course_card">
                <div className="course_img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/Y4LJ41ZXZJuQK2E8/backend-mv0DvqJe8lcZqLx1.jpg" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            <div className="course_card">
                <div className="course_img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/Y4LJ41ZXZJuQK2E8/backend_vs_frontend_development_what_s_the_difference_1280_720-1-YD0623wGPPsPG1oX.jpg" alt="" />
                </div>
                <div className="course_content">
                    <div className="course_title">Short-Term Courses</div>
                    <div className="course_description">Crafting innovative and user-friendly mobile apps to elevate your business and engage your audience</div>
                </div>
            </div>
            </div>
            <button className='primary_btn'>Explore All</button>
        </div>
    </div>
    
    </>
  )
}

export default Home