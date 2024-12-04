import React from 'react'
import './login.css'
import Logo from './assets/divine_logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const redirect_to_dashboard = () => {
        navigate('/');
    }
  return (
    <>
    
        <div className="main-bg">
            <div className="black-bg"></div>
                <div className="container">
                    <div className='header'>
                        <img src={Logo} alt="" height={66} width={66}/>
                        DivinetechSolutions
                    </div>
                    <div className='content'>
                        <div>Username<br/>
                        <input type="text" name="" id="" className='input-text'placeholder='Enter Username'/></div>
                        <div>Password<br/>
                        <input type="password" name="" id="" className='input-text' placeholder='Enter Password'/></div>
                    </div>
                    <div className='footer'>
                        <button className='login-btn' onClick={redirect_to_dashboard}>LOGIN</button>
                    </div>
                </div>
            
        </div>
    
    </>
  )
}

export default Login