import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Consultancy from './pages/Consultancy';
import Feedback from './pages/Feedback';
import Faqs from './pages/Faqs';
import About_us from './pages/About-us';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Dashboard />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/services' element={<Services />} />
      <Route path='/consultancy' element={<Consultancy />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/about-us' element={<About_us />} />
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
