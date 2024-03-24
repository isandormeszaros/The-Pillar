import React, { useState, useEffect } from "react";
import http from "../../http-common";
import WatchesServices from "../../services/WatchesServices";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom"; // Import missing dependencies

function FilterSection() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(""); // Define and set searchTerm

  const fetchProducts = () => {
    return http.post(`http://localhost:8080/allwatches/filter`, {
      'termek': searchTerm
    });
  };

  useEffect(() => {
    fetchProducts().then((response) => setProducts(response.data)).catch((error) => console.error('Error fetching products:', error));

    let searchParams = {};
    if (searchTerm) searchParams["search"] = searchTerm;

    navigate({ search: queryString.stringify(searchParams) });
  }, [navigate, location.search, searchTrigger, searchTerm]);

  const handleSearch = () => {
    fetchProducts();
    setSearchTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    WatchesServices.getBrands()
      .then((response) => setBrands(response.data))
      .catch((error) =>
        console.error("Error occurred while fetching brands:", error)
      );
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <section id="filter-section" className="col-lg-3 col-md-4 text-justify">
      <h2 className="custom-heading-font">Filter</h2>
      <div>
        <div>
          <h3>Brands</h3>
          {brands.map((brand) => (
            <div key={brand.id}>
              <input
                type="checkbox"
                id={brand.id}
                value={brand.brand}
                checked={selectedBrand === brand.brand}
                // onChange={() => setSelectedBrand(brand.brand)}
                onChange={handleChange}
              />
              <label htmlFor={brand.id}>
                {brand.brand} ({brand.watch_count})
              </label>
            </div>
          ))}
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
}

export default FilterSection;
