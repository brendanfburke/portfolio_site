import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes >
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
