import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShortTime from './ShortTime';
import reportWebVitals from './reportWebVitals';
import Home from "./home"
import ContactUs from './ContactUs';

// import Train from './Train.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
   {/* <Navbar/> */}
   {/* <Home /> */}
   {/* <Train /> */}
   {/* <ContactUs></ContactUs>  */}
   <ShortTime />

  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
