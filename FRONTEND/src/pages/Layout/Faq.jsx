import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "primeicons/primeicons.css";
import './Faq.css'


function Faq() {
  const images = "http://localhost:8080/images/layout/";

  return (
    <div>
      {/* IMAGE */}
      <section id="header" className="text-center pb-5">
        <img
          className="card-img-top"
          src={images + "layout.jpg"}
          alt="Card image cap"
          style={{ objectFit: "cover", height: "375px" }}
        />
      </section>

      {/* NAV TABS */}
      <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Gyakran ismételt kérdések</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Eredetiség igazolás</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Szállítási információk</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Elállási jog</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Álláslehetőség</button>
        </li>
      </ul>

      {/* NAV TABS CONTROL */}
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item "><a href="/home" className="text-decoration-none text-white">Home</a></li>
              <li class="breadcrumb-item "><a href="/home" className="text-decoration-none text-white">Szolgáltatlások</a></li>
              <li class="breadcrumb-item"><a href="/faq" className="text-decoration-none text-white">GYAK</a></li>
            </ol>
          </nav>

          {/* GYAK */}
          <h1 className="text-center custom-heading-font faq-header">GYAK</h1>
          <div className="faq-container container custom-p-font text-start">
            <div className="row justify-content-center align-items-center">
              <div className="border-color col-lg-5 pb-4 p-3 m-2">
                <h1 className="custom-heading-font">
                  Összes óra
                </h1>
                <p className="faq-box-content text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <a className="faq-button">Tovább
                  <i className="pi pi-arrow-right"></i>
                </a>
              </div>

              <div className="border-color col-lg-5 pb-4 p-3 m-2">
                <h1 className="custom-heading-font">
                  Összes óra
                </h1>
                <p className="faq-box-content text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <a className="faq-button">Tovább
                  <i className="pi pi-arrow-right"></i>
                </a>
              </div>

              <div className="border-color col-lg-5 pb-4 p-3 m-2">
                <h1 className="custom-heading-font">
                  Összes óra
                </h1>
                <p className="faq-box-content text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <a className="faq-button">Tovább
                  <i className="pi pi-arrow-right"></i>
                </a>
              </div>

              <div className="border-color col-lg-5 pb-4 p-3 m-2">
                <h1 className="custom-heading-font">
                  Összes óra
                </h1>
                <p className="faq-box-content text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <a className="faq-button">Tovább
                  <i className="pi pi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="container justify-content-center align-items-center">
              <div class="accordion accordion-flush col-lg-8" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
      </div>

    </div>
  );
}

export default Faq;
