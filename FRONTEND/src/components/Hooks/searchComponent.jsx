import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchComponent.css"

const SearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div className="search-container container px-4 pb-5 d-flex justify-content-center">
      <div className="row gx-1 ">
        <div className="col d-flex justify-content-center justify-content-md-end">
          <input
            className="form-control search-form-control"
            type="text"
            placeholder="Keresési érték"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col d-flex justify-content-center justify-content-md-start">
          <button onClick={handleSearch} className="default-button search-button">
            <i className="pi pi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;