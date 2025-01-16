import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Training from './Pages/Training';
import Services from './Pages/Services';
import Consultancy from './Pages/Consultancy';
import About_us from './Pages/About_us';
import Contact_us from './Pages/Contact_us';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<Navbar/>}>
  //     <Route path='/' element={<Home />}></Route>
  //     <Route path='/training' element={<Training />}></Route>
  //     <Route path='/services' element={<Services />}></Route>
  //     <Route path='/consultancy' element={<Consultancy />}></Route>
  //     <Route path='/about-us' element={<About_us />}></Route>
  //     <Route path='/contact-us' element={<Contact_us />}></Route>
  //   </Route>
  // </Routes>
  // </BrowserRouter>
  <Contact_us/>
);
reportWebVitals();