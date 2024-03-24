import { useEffect, useState, useRef } from "react";
import { json, useParams } from "react-router-dom";
import WatchesServices from "../../services/WatchesServices";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import locales from "../../utils/locales.json";
import { toast } from 'react-toastify';
import "./ProductDetailPage.css"

function ProductDetailPage({ addToCartFunction }) {
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

  function addToCartSucceed() {
    toast.success(product.watchName + " sikeresen hozzáadva a kosárhoz")
  }

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
          <ol className="breadcrumb pt-3">
            <li className="breadcrumb-item custom-p-font"><a href="/home" className="breadcrumb-anchor-cart">Nyitóoldal</a></li>
            <li className="breadcrumb-item custom-p-font"><a href="/allbrands" className="breadcrumb-anchor-cart">Óráink</a></li>
            {product && (
              <li className="breadcrumb-item custom-p-font"><a href="/allbrands" className="breadcrumb-anchor-cart">{product.brand}</a></li>
            )}
            {product && (
              <li className="breadcrumb-item active custom-p-font" aria-current="page">{product.watchName}</li>
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

          <div className="col-description col-lg-6 text-start justify-content-start">
            {product && (
              <div className="custom-p-font">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="custom-heading-font">{product.watchName}</h3>
                  </div>
                  <div><i className="pi pi-heart"></i></div>
                </div>
                <p className="text-justify">{product.description}</p>
                <p className="description-price m-0">
                  {product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                </p>
                <p className="m-0 small"><sup>*</sup>Az ár az áfát nem tartalmazza</p>
                <div className="col-lg-4 col-md-12 justify-content-center pb-5">
                  <button className="default-button d-flex w-100 mt-4" onClick={() => { addToCartFunction(product); addToCartSucceed() }}>Kosárba<i className="pi pi-shopping-cart text-white"></i></button>
                </div>
                <div className="shipping-row row text-center">
                  <div className="col-12">
                    <ul className="list-unstyled">
                      <li><i className="pi pi-truck"></i> Ingyenes kiszállítás</li>
                      <li><i className="pi pi-verified"></i> Garantált eredetiség</li>
                      <li><i className="pi pi-gift"></i> 2 év ingyenes szervizgarancia</li>
                    </ul>
                  </div>
                </div>
                <div className="detail-row row">
                  <div className="col-12">
                    <h2 className="custom-heading-font detail-title">Óra részletei</h2>
                    <hr className="mt-0" />
                    <p>Darabszám: {product.quantity} db</p>
                    <p>Doboz: {product.box ? "Van" : "Nincs"}</p>
                    <p>Papírok: {product.paper ? "Van" : "Nincs"}</p>
                    <p>Gyártás éve: {product.date}</p>
                    <p>Gyártás helye: Még nincs</p>
                  </div>
                  <h2 className="custom-heading-font detail-title">Tok & számlap</h2>
                  <hr />
                  <p>Tok anyaga: {product.caseMaterial}</p>
                  <p>Tok vastagsága: {product.caseThickness}mm</p>
                  <p>Tok Diaméter: {product.caseDiameter}mm</p>
                  <p>Számlap anyaga: {product.dialMaterial}</p>
                  <p>Sámlap színe: {product.dialColor}</p>
                  <h2 className="custom-heading-font detail-title">Szíj</h2>
                  <hr />
                  <p>Szíj anyaga: {product.strapMaterial}</p>
                  <p>Szíj szélessége: {product.bandWidth}mm</p>
                  <h2 className="custom-heading-font detail-title">Működés</h2>
                  <hr />
                  <p>Szerkezet: {product.movement}</p>
                  <p>Vízállóság: {product.resistance}m</p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
