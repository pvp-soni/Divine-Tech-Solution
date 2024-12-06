import React from 'react'
import Graphic1 from '../assets/graphic1.png'

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
                    Your one-stop center for all technology-related solutions <br/> and expert advice
                </div>
            </div>
            <button className='primary_btn'>Explore</button>
        </div>
        <div className="side_image">
            <img src={Graphic1} alt="" height={488} width={488} />
        </div>
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