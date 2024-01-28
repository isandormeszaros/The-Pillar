// Navbar.js

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/Images/logo.svg';
import 'primeicons/primeicons.css';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="The Pillar" className='navbar-brand-logo' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/all-watch" className="nav-link">Összes óra</Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link">Márkák</Link>
              </li>
              <li className="nav-item">
                <Link to="/edc" className="nav-link">EDC</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Cikkeink</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Kapcsolat</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Rólunk</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">GYAK</Link>
              </li>
            </ul>
            <div className="d-flex ms-auto align-items-center">
              <button className="btn btn-outline-success me-2" type="submit">Login</button>
              <a className="me-2"><span className="pi pi-search"></span></a>
              <a className="me-2"><span className="pi pi-user"></span></a>
              <a><span className="pi pi-shopping-cart"></span></a>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className={`bottom-bar ${visible ? 'visible' : ''}`}>
      <p>FIRST PURCHASE? USE CODE WWSFIRST FOR 10% OFF SELECT ITEMS</p>
    </div> */}
    </>
  );
};

export default Navbar;
