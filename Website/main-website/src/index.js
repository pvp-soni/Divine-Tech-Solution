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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route path='/' element={<Home />}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);
reportWebVitals();