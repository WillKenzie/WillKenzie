import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import Gallery from './Gallery';
import Home from './Home';
import Menu from './Menu'
import { Route, Routes, BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
