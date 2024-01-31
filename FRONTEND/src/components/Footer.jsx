import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Footer.css";

const Footer = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const closeAccordion = (event) => {
    event.preventDefault();
    setIsAccordionOpen(false);
  };

  return (
    <footer>
      <section className="container text-center text-md-start mt-5 d-none d-md-block">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">
              The Pillar <i className="pi pi-verified ms-1"></i>
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p className="mb-1">
              <a href="#!" className="text-reset text-decoration-none">
                Angular
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-reset text-decoration-none">
                React
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-reset text-decoration-none">
                Vue
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-reset text-decoration-none">
                Laravel
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p className="mb-1">
              <a
                href="#!"
                className="text-reset text-decoration-none"
                onClick={closeAccordion}
              >
                Pricing
              </a>
            </p>
            <p className="mb-1">
              <a
                href="#!"
                className="text-reset text-decoration-none"
                onClick={closeAccordion}
              >
                Settings
              </a>
            </p>
            <p className="mb-1">
              <a
                href="#!"
                className="text-reset text-decoration-none"
                onClick={closeAccordion}
              >
                Orders
              </a>
            </p>
            <p className="mb-1">
              <a
                href="#!"
                className="text-reset text-decoration-none"
                onClick={closeAccordion}
              >
                Help
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-none d-md-block">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p className="mb-1">Budapest váci utca 47, Magyarország</p>
            <p className="mb-1">support@thepillar.com</p>
            <p className="mb-1"> +36 30 1266285</p>
          </div>
        </div>
      </section>

      

      {/* PHONE BOOTSTRAP MENU */}

      <div className="accordion text-center" id="accordionPanelsStayOpenExample">
        <div className="accordion-item d-md-none">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h6 className="text-uppercase fw-bold m-0">The Pillar <i className="pi pi-verified ms-1"></i></h6>
              
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className="accordion-item d-md-none">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h6 className="text-uppercase fw-bold m-0">Products</h6>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Pricing
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Settings
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Orders
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item d-md-none">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <h6 className="text-uppercase fw-bold m-0">Useful Links</h6>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Pricing
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Settings
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Orders
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item d-md-none">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              <h6 className="text-uppercase fw-bold m-0">Contact</h6>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Pricing
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Settings
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Orders
                </a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-reset" onClick={closeAccordion}>
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="m-0">
          &copy;{new Date().getFullYear()} The Pillar <br />
          Minden jog fenttartva
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
