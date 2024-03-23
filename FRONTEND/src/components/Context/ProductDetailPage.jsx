import { useEffect, useState, useRef } from "react";
import { json, useParams } from "react-router-dom";
import WatchesServices from "../../services/WatchesServices";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import locales from "../../utils/locales.json";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [splideReady, setSplideReady] = useState(false); // Track initialization of splide

  const splideRef = useRef(null); // Ref to Splide component

  useEffect(() => {
    WatchesServices.getProductById(id)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((error) => {
        console.error('Nem sikerült betölteni az adatokat:', error);
      });
  }, [id]);

  const handleThumbnailClick = (index) => {
    // Ensure splide is ready before accessing it
    if (splideReady) {
      splideRef.current.go(index);
    }
  };

  const baseUrl = product ? "http://localhost:8080/images/" + product.id + "/" : "";
  const numberOfImages = 6;
  const imageUrls = [];

  for (let i = 1; i <= numberOfImages; i++) {
    const imagePath = `1000${i}.jpg`;
    const imageUrl = baseUrl + imagePath;
    imageUrls.push(imageUrl);
  }

  console.log(product)

  return (
    <div>
      <div className="detailed-page-container container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/allbrands">Óráink</a></li>
            {product && (
              <li className="breadcrumb-item"><a href="/allbrands">{product.brand}</a></li>
            )}
            {product && (
              <li className="breadcrumb-item active" aria-current="page">{product.watchName}</li>
            )}
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6">
            {product ? (
              <>
                {/* Main Slider */}
                <Splide
                  options={{
                    type: 'loop',
                    fixedHeight: 500,
                    heightRatio: 0.5,
                    pagination: false,
                    arrows: true,
                    cover: true,
                  }}
                  onMounted={(splideObj) => {
                    splideRef.current = splideObj;
                    setSplideReady(true); // Set splide ready
                  }}
                >
                  {imageUrls.map((imageUrl, index) => (
                    <SplideSlide key={index}>
                      <img src={imageUrl} alt={`Main Slide ${index + 1}`} />
                    </SplideSlide>
                  ))}
                </Splide>

                {/* Thumbnail Slider */}
                <Splide className="pt-1"
                  options={{
                    rewind: true,
                    fixedWidth: 80,
                    fixedHeight: 80,
                    isNavigation: true,
                    gap: 5,
                    pagination: false,
                    arrows: false,
                    lazyLoading: "nearby",
                    cover: true,
                    breakpoints: {
                      640: {
                        fixedWidth: 64,
                        fixedHeight: 64,
                      },
                    },
                  }}
                >
                  {imageUrls.map((imageUrl, index) => (
                    <SplideSlide key={index} onClick={() => handleThumbnailClick(index)}>
                      <img src={imageUrl} alt={`Thumbnail ${index + 1}`} />
                    </SplideSlide>
                  ))}
                </Splide>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="col-lg-6 text-start justify-content-start">
            {product && (
              <div className="custom-p-font">
                <h3 className="custom-heading-font">{product.watchName}</h3>
                <p>
                  {product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                </p>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
