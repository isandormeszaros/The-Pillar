import React from "react";
import './Partner.css'

const Partner = () => {
  const images = "http://localhost:8080/images/partner/";

  return (
    <div className="partner container-fluid py-5 black">
      <div className="container">
        <div className="row no-gutters m-a">
          <div className="col-12 col-md-6">
            <img
              src={images + "rolex-partner.jpg"}
              className="partner-card rounded-0 img-fluid"
              alt="Rolex partner"
            />
          </div>
          <div className="col-12 col-md-6 text-justify text-white">
            <h1 className="custom-heading-font pt-md-0 pt-3">Főcím</h1>
            <hr />
            <p className="custom-p-font text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="row">
              <div className="col">
                <a
                  href=""
                  className="d-flex d-lg-inline-flex d-md-flex bg-white default-button black"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
