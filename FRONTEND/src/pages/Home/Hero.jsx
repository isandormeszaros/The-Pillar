import React from "react";
import "./Hero.css";

const Hero = () => {
  const images = "http://localhost:8080/images/hero/";

  return (
    <div className="home-container">
      <section className="image-section position-relative">
        <img
          src={images + "hero-fullscreen.jpg"}
          alt="Pillar Watch Hero"
          className="background-image"
        />
        <img
          src={images + "hero-mobile.jpg"}
          alt="Pillar Watch Hero"
          className="mobile-background-image"
        />
        <div className="content-section">
          <div className="content">
            <h1 className="custom-heading-font">Welcome to Pillar Watch</h1>
            <p className="text-light  smaller-text">
              Discover the latest in Pillar watches.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
