import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = ({setSearchTrigger}) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  

  const handleSearch = () => {
    // Átirányítás a keresési eredmények oldalára
    setSearchTrigger(prev => prev + 1);
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