import React from 'react'
import './styles.css'
import Logo from './divine_logo.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  return (
    <>
    <div className="navbar">
        <div className="logo_section">
            <img src={Logo} alt="" height={66} width={66} />
        </div>
        <div className="links_section">
            <NavLink to='/home' className="link">
                Home
                <svg className={location.pathname==='/home'?'link_active':"link_inactive"} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/training' className="link">
                Training
                <svg className='down_border' width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/services' className="link">
                Services
                <svg className='down_border' width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/consultancy' className="link">
                Consultancy
                <svg className='down_border' width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/about-us' className="link">
                About Us
                <svg className='down_border' width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/contact-us' className="link">
                Contact Us
                <svg className='down_border' width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
        </div>
    </div>
    <Outlet></Outlet>
    </>
  )
}

export default Navbar