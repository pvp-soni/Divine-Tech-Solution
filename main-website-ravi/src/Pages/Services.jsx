import React from "react";
import AdditionalServicesImage from "../assets/digital_marketing.jpg";

const Services = () => {
  const core_it_services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Custom websites, e-commerce platforms, and web applications",
      // sub_discription: [
      //   "Frontend Development": "React.js, Angular, Vue.js",
      //   "Backend Development": "Node.js, Django",
      //   "Full-Stack Development" :"End-to-end solutions covering frontend and backend",
      //   "E-Commerce Development"  :"Shopify, WooCommerce",
      //   "CMS Development" :"WordPress",
      //   "Progressive Web Apps (PWA)" :"Web apps with native app-like features",
      //   "API Development & Integration" :"Custom APIs, third-party integrations";
      // ]
    },
  ];

  return (
    <>
      <div className="main_head_div">
        <div className="heading">
          Services
          <div className="navigations">
            <a href="/">Home</a> | Services
          </div>
        </div>
        <div className="description">
          Enhance your skills with our comprehensive IT training programs
          designed for professionals and individuals
        </div>
      </div>
      
      <div className="Additional_services_section">
        
        <div className="Additional_services_heading_section">
          <div className="Additional_services_heading">Additional Services</div>
          <div className="Additional_services_discription">
            Boost your business with our expert Digital Marketing, Virtual IT
            Training & Workshops, Tech Support, and seamless System Integration
            solutions
          </div>
        </div>
        <div className="Additional_Services_card_section">
        <div className="big_div"> 
          <div className="Additional_Services_card">
            <div className="Additional_Services_card_image">
              
            </div>
            <div className="Additional_Services_card_details">
              <div className="Additional_Services_name">System Inegration</div>
              <div className="Additional_Services_description">
                Inegration of various IT system and software
              </div>
            </div>
          </div>
          </div>
          <div className="big_div">
            <div className="Additional_Services_card">
              <div className="Additional_Services_card_image">
              
              </div>
              <div className="Additional_Services_card_details">
                <div className="Additional_Services_name">
                  System Inegration
                </div>
                <div className="Additional_Services_description">
                  Inegration of various IT system and software
                </div>
              </div>
            </div>
          </div>
          <div className="big_div">
            <div className="Additional_Services_card">
              <div className="Additional_Services_card_image">
                
              </div>
              <div className="Additional_Services_card_details">
                <div className="Additional_Services_name">
                  System Inegration
                </div>
                <div className="Additional_Services_description">
                  Inegration of various IT system and software
                </div>
              </div>
            </div>
          </div>

          <div className="big_div">
            <div className="Additional_Services_card">
              <div className="Additional_Services_card_image">
              </div>
              <div className="Additional_Services_card_details">
                <div className="Additional_Services_name">
                  System Inegration
                </div>
                <div className="Additional_Services_description">
                  Inegration of various IT system and software
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
