import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const TopWatches = () => {
  const images = "http://localhost:8080/images/carouser/famouswatches/";

  return (
    <div className="top-watches container mt-5">
      <h1 className="text-start custom-heading-font mb-4 text-center">
        Legismertebb óráink
      </h1>
      <hr />
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          gap: "1rem",
          pagination: false,
          autoplay: true,
          interval: 3000,
          autoStart: true,
          pauseOnHover: true,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 2,
            },
            1440: {
              perPage: 3,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="card border-0 position-relative">
            <img
              src={images + "rolex.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Rolex"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card border-0 position-relative">
            <img
              src={images + "omega.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Omega"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card border-0 position-relative">
            <img
              src={images + "seiko.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Seiko"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card border-0 position-relative">
            <img
              src={images + "tudor.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Tudor"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card border-0 position-relative">
            <img
              src={images + "tagheuer.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Tag Heuer"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="mb-5">
          <div className="card border-0 position-relative">
            <img
              src={images + "longines.jpg"}
              className="carouser-img rounded-0 black-and-white"
              alt="Longines"
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default TopWatches;
