import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "./Navbar.css";

const Navbar = ({ cart, islogged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const images = "http://localhost:8080/images/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isDownwardScroll = scrollTop > window.innerHeight / 2;

      setIsScrolledDown(isDownwardScroll);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  console.log(islogged)

  return (
    // <nav className={`navbar navbar-expand-lg custom-navbar fixed-top ${isScrolledDown ? "scrolled-down" : ""}`}>
    <>
      <div className="row coupon-row p-0 m-0">
        <div className="col text-align-center align-items-center">
          <p className="custom-p-font m-2">Vásároljon egy karórát $1,000 felett és használja a <strong>teleki2024</strong> kupont június 30-áig!</p>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg custom-navbar ${isScrolledDown ? "scrolled-down" : ""}`}>
        <div className="container">
          <Link to="/home" className="navbar-brand" onClick={closeMenu}>
            <img
              src={images + "logo.svg"}
              alt="The Pillar"
              className="navbar-brand-logo"
            />
          </Link>
          <div className="d-lg-flex d-lg-none ms-auto align-items-center button-container me-2">
            <a href="/allbrands" className="me-3">
              <span className="pi pi-search icon-size"></span>
            </a>
            <a href="/login" className="me-3">
              {islogged ? (<i className="pi pi-circle-fill user-badge"></i>) : ''}
              <span className="pi pi-user icon-size"></span>
            </a>
            <a href="/cart" className="text-decoration-none">
              <span className="pi pi-shopping-cart icon-size"></span>
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </a>
          </div>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <i className="pi pi-times"></i>
            ) : (
              <i className="pi pi-bars"></i>
            )}
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/allbrands" className="nav-link" onClick={closeMenu}>
                  Összes óra
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link" onClick={closeMenu}>
                  Márkák
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link" onClick={closeMenu}>
                  Cikkeink
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>
                  Kapcsolat
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMenu}>
                  Rólunk
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link" onClick={closeMenu}>
                  GYAK
                </Link>
              </li>
            </ul>
            <div className="d-none d-lg-flex ms-auto align-items-center button-container">
              <a href="/allbrands" className="me-3">
                <span className="pi pi-search"></span>
              </a>
              <a href="/login" className="me-3">
                <span className="pi pi-user"></span>
              </a>
              <a href="/cart" className="text-decoration-none">
                <span className="pi pi-shopping-cart"></span>
                {cart.length > 0 && (
                  <span className="cart-badge">{cart.length}</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
