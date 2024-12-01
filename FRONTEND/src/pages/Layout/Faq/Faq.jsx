import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "primeicons/primeicons.css";
import Cards from "../Reusable cards/Cards";
import './Faq.css'


function Faq() {
  const images = "http://localhost:8080/images/layout/";
  const items = [
    {
      title: "Összes óra 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
      title: "Összes óra 2",
      content: "The industry's standard dummy text ever since the 1500s..."
    },
    {
      title: "Összes óra 3",
      content: "An unknown printer took a galley of type and scrambled it..."
    },
    {
      title: "Összes óra 4",
      content: "It has survived not only five centuries, but also the leap into electronic typesetting..."
    }
  ];


  return (
    <div>
      {/* IMAGE */}
      <section id="header" className="text-center pb-5">
        <img
          className="card-img-top"
          src={images + "layout.jpg"}
          alt="Card cap"
          style={{ objectFit: "cover", height: "375px" }}
        />
      </section>

      {/* NAV TABS */}
      <ul className="nav nav-pills nav-fill mb-3 container gap-2" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Gyakran ismételt kérdések</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Eredetiség igazolás</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Szállítási információk</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Elállási jog</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Álláslehetőség</button>
        </li>
      </ul>

      {/* NAV TABS CONTROL */}
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          {/* GYAK */}
          <h1 className="text-center custom-heading-font faq-header">GYAK</h1>
          <div className="faq-container container custom-p-font text-start">

          {/* TAKE AN APPOINTMENT */}
          <div className="faq-helper-container justify-content-center align-items-center py-5">
              <div className="row g-5">
                <div className="col-lg-6 align-self-center">
                  <h1 className="faq-helper-header custom-heading-font pb-2">Contact with us</h1>
                  <p className="faq-helper-content custom-p-font">The Pillar is your all-in-one customer management SaaS platform, built to streamline your operations and supercharge your business. With user-friendly tools, you can effortlessly organize customer interactions, monitor order progress, and analyze performance—all from a single dashboard.We take the guesswork and complexity out of running your business, so you can focus on what matters most: growing and connecting with your customers</p>
                  <p className="faq-helper-content custom-p-font">Say goodbye to the headaches of managing multiple systems. The Pillar simplifies your workflow, freeing up your time to focus on what truly drives success: building lasting relationships and expanding your business</p>
                  <button className="default-button">Take an appointment </button>
                </div>
                <div className="col-lg-6 ">
                  <div className="position-relative">
                    <button type="button" className="position-absolute top-100 start-50 translate-middle btn btn-sm btn-warning rounded-pill">
                      <p className="custom-p-font button-image-text">We're moved out!</p>
                    </button>
                  </div>
                  <img src="https://images.unsplash.com/photo-1684595011468-14ef87017062?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-100 h-75 object-fit-cover img-fluid" />
                </div>
              </div>
            </div>

          <Cards items={items}/>

            <div className="accordion-container justify-content-center align-items-center pt-5">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed custom-p-font" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Mennyi az átlagos szállítási idő?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed custom-p-font" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Mennyi az átlagos szállítási idő?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed custom-p-font" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Mennyi az átlagos szállítási idő?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed custom-p-font" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Mennyi az átlagos szállítási idő?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed custom-p-font" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Mennyi az átlagos szállítási idő?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Hogyan tudom, hogy eredeti terméket kaptam?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Felvehetem a kapcsolatot az eladóval?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>
            </div>

           

          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><p>random</p></div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
      </div>



    </div>
  );
}

export default Faq;
