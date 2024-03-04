import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WatchesServices from "../../services/WatchesServices";

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
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setMessage(error.request.status);
        setLoading(false);
      });
  }, [keyword]);

  return (
    <div>
      <h2>Keresési eredmények:</h2>
      {loading ? (
        <p>Betöltés...</p>
      ) : error ? (
        <p>Hiba történt: {message}</p>
      ) : (
        <div>
          <h2>Szűrt termékek</h2>
          {/* <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.watchName} - {product.price}
              </li>
            ))}
          </ul> */}
          <div className="container">
          <div className="row">
            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="p-1 bd-highlight">RENDEZÉS</div>
            </div>
            {filteredProducts.map((watch) => (
              <div key={watch.id} className="col-lg-3 mb-3">
                <div className="card border">
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src={watch.image} 
                      alt="Card"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                    <div className="card-body">
                      <h4 className="custom-card-title">{watch.watchName}</h4>
                      <p className="card-text text-muted">
                        Price:{" "}
                        {watch.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </p>
                      <a href="#" className="default-button">
                        Button
                      </a>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                    >
                      <a href="/" className="btn btn-outline-danger btn-sm">
                        <i className="pi pi-heart"></i>
                      </a>
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
