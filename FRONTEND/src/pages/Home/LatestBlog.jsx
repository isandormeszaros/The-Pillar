import React, { useState } from "react";
import "./LatestBlog.css";

function LatestBlog() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);
  const [isZoomed4, setIsZoomed4] = useState(false);
  const images = "http://localhost:8080/images/blog/";

  return (
    <div className="latest-blog container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-5 custom-heading-font">Főcím</h1>
          <hr />
        </div>
      </div>
      {/* First row */}
      <div className="row">
        <div className="col-md-8 p-sm-2 p-md-1 position-relative">
          <img
            src={images + "latest_blog1.jpg"}
            className={`rounded-0 img-fluid black-and-white mobile-padding blog-image ${
              isZoomed1 ? "zoom-in" : ""
            }`}
            alt="Rolex"
            onMouseOver={() => setIsZoomed1(true)}
            onMouseOut={() => setIsZoomed1(false)}
          />
          <div className="text-overlay">
            <h1 className="p-3 blog-title">Megjelent az új Omega Moonswatch</h1>
          </div>
        </div>
        <div className="col-md-4 p-sm-2 p-md-1 position-relative">
          <img
            src={images + "latest_blog2.jpg"}
            className={`rounded-0 img-fluid black-and-white mobile-padding blog-image ${
              isZoomed2 ? "zoom-in" : ""
            }`}
            alt="Rolex"
            onMouseOver={() => setIsZoomed2(true)}
            onMouseOut={() => setIsZoomed2(false)}
          />
          <div className="text-overlay">
            <h2 className="p-3 blog-title">Business casual</h2>
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="row">
        <div className="col-md-4 p-sm-2 p-md-1 position-relative">
          <img
            src={images + "latest_blog4.jpg"}
            className={`rounded-0 img-fluid black-and-white mobile-padding blog-image ${
              isZoomed3 ? "zoom-in" : ""
            }`}
            alt="Rolex"
            onMouseOver={() => setIsZoomed3(true)}
            onMouseOut={() => setIsZoomed3(false)}
          />
          <div className="text-overlay">
            <h2 className="p-3 blog-title">Vadászgépektől a luxusórákig</h2>
          </div>
        </div>
        <div className="col-md-8 p-sm-2 p-md-1 position-relative">
          <img
            src={images + "/latest_blog3.jpg"}
            className={`rounded-0 img-fluid black-and-white mobile-padding blog-image ${
              isZoomed4 ? "zoom-in" : ""
            }`}
            alt="Tudor"
            onMouseOver={() => setIsZoomed4(true)}
            onMouseOut={() => setIsZoomed4(false)}
          />
          <div className="text-overlay">
            <h1 className="p-3 blog-title">
              Seiko Panda: A tökéletesség órája
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
