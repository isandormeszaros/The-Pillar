import React, { useState, useEffect, useRef } from "react";
import WatchesServices from "../../services/WatchesServices";
import SearchComponent from "../Hooks/searchComponent";
import FilterSection from "./FilterSection";
import locales from "../../utils/locales.json";
import { Link, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";



function ProductList({ addToCartFunction }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalWatchesCount, setTotalWatchesCount] = useState(0);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const images = "http://localhost:8080/images/";
  const location = useLocation();
  const szures = {}
  const queryParams = new URLSearchParams(location.search);
  const [random, setRandom] = useState();
  queryParams.forEach((value, key) => {
    szures[key] = value;
  })



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

  const handleLoadMore = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

// Előző szures paraméter állapotának tárolása előző érték változóban
const prevSzures = useRef(szures);

useEffect(() => {
  // Szures változásának ellenőrzése
  const szuresChanged = JSON.stringify(szures) !== JSON.stringify(prevSzures.current);
  if (szuresChanged) {
    WatchesServices.postSearch(szures)
      .then(response => {
        setRandom(response.random);
        console.log("Sikeres");
      })
      .catch(error => {
        console.error("Hiba történt", error);
      });

    // Az aktuális szures paraméter értékének frissítése az előző értékre
    prevSzures.current = szures;
  }
}, [szures]); // Dependency array includes szures parameter


  console.log(random)


  const addToCart = (product) => {
    addToCartFunction(product);
    toast.success("Termék sikeresen hozzáadva a kosárhoz!");
  };

  return (
    <div>
      <section id="header" className="text-center pb-5">
        <img
          className="card-img-top"
          src={images + "allProductsThumbnail.jpg"}
          alt="Card image cap"
          style={{ objectFit: "cover", height: "375px" }}
        />
        <div className="text-center">
          <span className='text-danger text-uppercase'>Disclaimer: A szűrés még fejlesztés alatt áll, egyelőre undefined értékkel tér vissza.</span>
          <h1 className="custom-heading-font pt-4">All Watches</h1>
          <p
            className="small"
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            With thousands of pre-owned luxury watches from the best brands
            around the world, we are dedicated to bringing collectors and
            enthusiasts an unrivaled selection of timepieces. Our in-house team
            of Swiss-trained watchmakers, technicians, and refinishers are
            highly skilled and have a passion for quality, authenticity, and
            craftsmanship—so you never have to worry about compromising value or
            provenance.
          </p>
        </div>
      </section>

      <SearchComponent />
      <FilterSection />

      <section id="gallery">
        <div className="container">
          <div className="row">
            {items.map((product) => (

              <div key={product.id} className="col-lg-4 mb-4 pointer">
                <div className="card border">
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src={images + "test.jpg"}
                      alt="Card"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                    <div className="card-body">
                      <h4 className="custom-card-title">{product.watchName}</h4>
                      <p className="text-muted">
                        Price:{" "}
                        {product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                      </p>
                      <p className="card-text text-muted">ID: {product.id}</p>
                      <button onClick={() => addToCart(product)} className="default-button"><i className="pi pi-cart-plus" style={{ fontSize: "1rem" }}></i> Kosárba</button>
                      <Link to={`/allwatches/watches/${product.id}`}>Részletek</Link>
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
}

export default ProductList;
