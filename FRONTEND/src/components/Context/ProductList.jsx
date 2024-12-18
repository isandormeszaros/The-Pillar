import React, { useState, useEffect, useRef } from "react";
import WatchesServices from "../../services/WatchesServices";
import SearchComponent from "../Hooks/searchComponent";
import FilterSection from "./FilterSection";
import locales from "../../utils/locales.json";
import { Link, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import "./ProductList.css"
import AddFavourite from "../../utils/AddFavourite"

function ProductList({ addToCartFunction, islogged }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalWatchesCount, setTotalWatchesCount] = useState(0);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const images = "http://localhost:8080/images/";
  const location = useLocation();
  const [szures, setSzures] = useState({});
  const queryParams = new URLSearchParams(location.search);
  const [random, setRandom] = useState(null);
  const [updatedSzures, setUpdatedSzures] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const updatedSzures = {}; // alapértelmezett üres szűrők


    queryParams.forEach((value, key) => {
      updatedSzures[key] = value;
      console.log("Sikeres " + key, value)
    });

    console.log(updatedSzures)

    WatchesServices.postSearch(updatedSzures)
      .then(response => {
        setRandom(response);
        console.log("Sikeres");
      })
      .catch(error => {
        console.error("Hiba történt", error);
      });
  }, [location.search]);


  // console.log(queryParams.forEach((value, key) => {
  //   szures[key] = value;
  // }))


  console.log(updatedSzures)
  console.log(random)

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    WatchesServices.getPage(page)
      .then((response) => {
        const data = response.data;

        if (data.length === 0) {
          setAllItemsLoaded(true);
          return WatchesServices.getAll();
        }
        setItems((prevItems) => [...prevItems, ...data]);
        setPage(page + 1);
      })
      .then(() => {
        return WatchesServices.getAll();
      })

      .then((totalCountResponse) => {
        if (totalCountResponse) {
          const totalCount = totalCountResponse.data.length;
          setTotalWatchesCount(totalCount);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  const updateSelectedBrands = (selectedBrands) => {
    setUpdatedSzures(selectedBrands);
  };

  console.log(updatedSzures)

  const handleLoadMore = () => {
    fetchData();
  };



  const filteredData = () => {
    WatchesServices.postSearch(updatedSzures)
      .then(response => {
        setRandom(response);
        console.log("Sikeres");
      })
      .catch(error => {
        console.error("Hiba történt", error);
      });
  };


  useEffect(() => {
    if (Object.keys(updatedSzures).length > 0) {
      filteredData();
    } else {
      fetchData();
    }
  }, [updatedSzures]);


  const addToCart = (product) => {
    if (!islogged) {
      toast.error("A vásárláshoz kérjük jelentkezzen be!");
    } else {
      addToCartFunction(product);
      toast.success("Termék sikeresen hozzáadva a kosárhoz!");
    }
  };

  const userId = localStorage.getItem('userId');

  const handleAddToFavoriteClick = (productId) => {
    handleAddToFavorite(productId);
  };

  const handleAddToFavorite = (productId) => {
    AddFavourite(userId, productId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    WatchesServices.getJustBrands()
      .then(response => {
        setBrand(response.data);
        console.log("Sikeres");
      })
      .catch(error => {
        console.error("Hiba történt", error);
      });
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const encodedName = urlParams.get("watchName");
  const name = decodeURIComponent(encodedName);
  console.log(name);

  return (
    <div>
      <section id="header" className="text-center pb-5">
        <section className="parallax">
          <div className="parallax-inner">
          </div>
        </section>
        {/* <img
          className="card-img-top"
          src={images + "allbrands/5.jpg"}
          alt="Card image cap"
          style={{ objectFit: "cover", height: "375px" }}
        /> */}
        {random && random.data.length === totalWatchesCount ? (
          <div className="text-center">
            <h1 className="custom-heading-font pt-4">All Watches</h1>
            <p
              className="small"
              style={{
                maxWidth: "90%",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              With thousands of pre-owned luxury watches from the best brands around the world, we are dedicated to bringing collectors and enthusiasts an unrivaled selection of timepieces. Our in-house team of Swiss-trained watchmakers, technicians, and refinishers are highly skilled and have a passion for quality, authenticity, and craftsmanship—so you never have to worry about compromising value or provenance.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p
              className="small"
              style={{
                maxWidth: "90%",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {brand.map(brand => {
                if (brand.brand === name) {
                  return (
                    <div key={brand.brandId}>
                      <h2 className="custom-heading-font pt-4">{brand.brand}</h2>
                      <p className="custom-p-font">{brand.description}</p>
                    </div>
                  );
                } else {
                  return null; // Visszaad null-t, ha a feltétel nem teljesül
                }
              })}
            </p>
          </div>
        )}

      </section>

      <SearchComponent />

      <section id="gallery">
        <div className="product-image-container container" style={{ maxWidth: "95%" }}>
          <div className="row">
            <div className="col-12 text-start col-lg-2 pb-4">
              <FilterSection />
            </div>

            <div className="col-12 col-lg-10">
              <div className="row">
                {random && random.data.map((product) => (
                  <div key={product.id} className="col-12 col-md-4 col-lg-3 px-1 mb-2">
                    <div className="card custom-border h-100">
                      <div className="view overlay">
                        <Link to={`/allwatches/watches/${product.id}`} className="text-decoration-none custom-p-font">
                          <img
                            className="card-img-top rounded-0"
                            src={`http://localhost:8080/images/${product.id}/10001.jpg`}
                            alt="Card"
                          />
                        </Link>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                        <div className="card-body">
                          <h4 className="custom-card-title custom-heading-font mb-0">{product.watchName}</h4>
                          <p className="text-muted mb-0">-</p>
                          <p className="text-muted mb-3 custom-price">
                            {product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                          </p>
                          <button onClick={() => addToCart(product)} className="default-button product-default-button"><i className="pi pi-cart-plus" style={{ fontSize: "1rem" }}></i> Kosárba</button>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            justifyContent: "center",
                            alignItems: "center",
                            top: "10px",
                            right: "10px",
                          }}
                        >
                          <button className="btn btn-outline-danger border-0 btn-sm" onClick={() => handleAddToFavoriteClick(product.id)}>
                            <i className="pi pi-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        {!allItemsLoaded && (
          <a
            className="filter-btn"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Betöltés..." : (
              <>
                <i className="pi pi-plus"></i> További termékek betöltése
              </>
            )}
            <p className="text-muted">Showing {items.length} of {totalWatchesCount} Watches</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductList;
