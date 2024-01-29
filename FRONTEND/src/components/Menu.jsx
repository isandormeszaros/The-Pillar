import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import AllBrands from '../Pages/AllBrands';
import Brands from '../Pages/Brands';
import Edc from '../Pages/Edc';
import Blogs from '../Pages/Blogs';
import Contact from '../Pages/ContactUs';
import About from '../Pages/AboutUs';
import Faq from '../Pages/Faq';
import NoPage from '../Pages/NoPage';

function Menu() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbrands" element={<AllBrands />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/edc" element={<Edc />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
