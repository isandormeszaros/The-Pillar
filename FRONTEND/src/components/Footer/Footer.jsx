import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // const closeAccordion = (event) => {
  //   event.preventDefault();
  //   setActiveAccordion(null);
  // };

  const accordionItems = [
    {
      title: "The Pillar",
      content:
        "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "Vásárlói fiók",
      content: [
        "Belépés",
        "Regisztráció",
        "Szállítási információk",
        "Elállási jog",
      ],
    },
    {
      title: "Információk",
      content: ["Rólunk", "Cikkeink", "Visszajelzések", "Állásajánlataink"],
    },
    {
      title: " Cégünk",
      content: [
        "Üzleteink",
        "Budapest váci utca 47, Magyarország",
        "support@thepillar.com",
        "+36 30 1266285",
      ],
    },
  ];

  return (
    <footer className="footer">
      {/* Desktop View */}
      <section className="container text-center text-md-start mt-5 d-none d-md-block">
        <div className="row mt-3">
          {accordionItems.map((item, index) => (
            <div key={index} className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">{item.title}</h6>
              {Array.isArray(item.content) ? (
                <ul className="list-unstyled">
                  {item.content.map((contentItem, i) => (
                    <a href="" className="text-decoration-none" key={i}>
                      <li className="custom-p-font footer-li-link">
                        {contentItem}
                      </li>
                    </a>
                  ))}
                </ul>
              ) : (
                <p className="custom-p-font">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Accordion */}
      <div className="accordion text-center">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="accordion-item d-md-none mx-3 border border-start-0 border-top-0 border-end-0 shadow-none"
          >
            <h2 className="accordion-header" id={`panelsStayOpen-heading${index}`}>
              <button
                className={`accordion-button ${activeAccordion === index ? "" : "collapsed"
                  }`}
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index ? "true" : "false"}
                aria-controls={`panelsStayOpen-collapse${index}`}
              >
                <h6 className="text-uppercase fw-bold m-0 footer-link">
                  {item.title}
                </h6>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${activeAccordion === index ? "show" : ""
                }`}
              aria-labelledby={`panelsStayOpen-heading${index}`}
            >
              <div className="accordion-body">
                {Array.isArray(item.content) ? (
                  <ul className="list-unstyled">
                    {item.content.map((contentItem, i) => (
                      <li className="custom-p-font footer-li-link" key={i}>
                        {contentItem}

                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="custom-p-font">{item.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center p-4 copy-footer">
        <p className="m-0">
          &copy;{new Date().getFullYear()} The Pillar <br />
          Minden jog fenttartva
        </p>
      </div>
    </footer>
  );
};

export default Footer;
