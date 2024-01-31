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

  const closeMenu = (e) => {
      setIsOpen(false);
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
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img src={logo} alt="The Pillar" className='navbar-brand-logo' />
          </Link>
          <div className="d-lg-flex d-lg-none ms-auto align-items-center button-container me-2">
            <a className="me-3"><span className="pi pi-search icon-size"></span></a>
            <a className='me-3'><span className="pi pi-user icon-size"></span></a>
            <a><span className="pi pi-shopping-cart icon-size"></span></a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            {isOpen ? <i className="pi pi-times"></i> : <i className="pi pi-bars"></i>}
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/allbrands" className="nav-link" onClick={closeMenu}>Összes óráink</Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link" onClick={closeMenu}>Márkák</Link>
              </li>
              <li className="nav-item">
                <Link to="/edc" className="nav-link" onClick={closeMenu}>EDC</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link" onClick={closeMenu}>Cikkeink</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>Kapcsolat</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMenu}>Rólunk</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link" onClick={closeMenu}>GYAK</Link>
              </li>
            </ul>
            <div className="d-none d-lg-flex ms-auto align-items-center button-container">
              <a className="me-3"><span className="pi pi-search"></span></a>
              <a className="me-3"><span className="pi pi-user"></span></a>
              <a><span className="pi pi-shopping-cart"></span></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
