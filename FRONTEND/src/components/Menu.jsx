import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import AllBrands from '../pages/AllBrands';
import Brands from '../pages/Brands';
import Edc from '../pages/Edc';
import Blogs from '../pages/Blogs';
import Contact from '../pages/ContactUs';
import About from '../pages/AboutUs';
import Faq from '../pages/Faq';
import NoPage from '../pages/NoPage';
import Footer from './Footer';

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
      <Footer/>
    </BrowserRouter>
  );
}

export default Menu;
