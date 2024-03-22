import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div>
      <input
        className="search-form-control custom-p-font"
        type="text"
        placeholder="Keresési érték"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="default-button" onClick={handleSearch}>
        Keresés
      </button>
    </div>
  );
};

export default SearchComponent;