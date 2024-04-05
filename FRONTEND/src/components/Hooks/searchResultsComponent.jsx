import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WatchesServices from "../../services/WatchesServices";
import SearchComponent from "./searchComponent";
import AddFavourite from "../../utils/AddFavourite"
import "./searchResultsComponent.css"

const SearchResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    if (!keyword) {
      setLoading(false);
      return;
    }

    WatchesServices.getFiltered(keyword)
      .then((response) => {
        setFilteredProducts(response.data);
        setLoading(false);
        setError(false);
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setMessage("Hiba történt: " + error.response.status);
        setFilteredProducts([]);
        setLoading(false);
      });
  }, [keyword]);

  const userId = localStorage.getItem('userId');

  const handleAddToFavoriteClick = (productId) => {
    handleAddToFavorite(productId);
  };

  const handleAddToFavorite = (productId) => {
    AddFavourite(userId, productId)
      .then((response) => {
        // Handle successful response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div>
    <section className="parallax parallax-search">
          <div className="parallax-inner">
          </div>
        </section>
      <SearchComponent />
      {loading ? (
        <p>Betöltés...</p>
      ) : error ? (
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="custom-heading-font">Hoppá, nincs találat.</h1>
              <p className="custom-p-font">
                Sajnáljuk, úgy tűnik <strong>{keyword}</strong> keresésére nem volt találat.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
        <h2 className="custom-heading-font">Keresési eredmények</h2>
          <div className="container">
            <div className="row">
              <div className="d-flex flex-row-reverse bd-highlight">
                <div className="bd-highlight custom-p-font">Találatok száma: {filteredProducts.length} db</div>
              </div>
              {filteredProducts.map((watch) => (
                <div key={watch.id} className="col-12 col-md-4 col-lg-3 mb-2 p-1">
                  <div className="card custom-border h-100">
                    <div className="view overlay">
                      <img
                        className="card-img-top rounded-0"
                        src={watch.image}
                        alt="Card"
                      />
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                      <div className="card-body">
                        <h4 className="custom-card-title custom-heading-font mb-0">{watch.watchName}</h4>
                        <p className="card-text text-muted">
                          Price:{" "}
                          {watch.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                        <button className="default-button product-default-button"><i className="pi pi-cart-plus" style={{ fontSize: "1rem" }}></i> Kosárba</button>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                      >
                        <button className="btn btn-outline-danger border-0 btn-sm" onClick={() => handleAddToFavoriteClick(watch.id)}>
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
      )}
    </div>
  );
};

export default SearchResultsComponent;