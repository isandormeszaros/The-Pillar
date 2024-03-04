import React, { useEffect, useState } from "react";
import WatchesServices from "../../services/WatchesServices";

const ProductListFiltered = ({ szuro }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    WatchesServices.getFiltered(szuro)
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
  }, [szuro]);

  return (
    <div>
      <h2>Szűrt termékek</h2>
      {loading ? (
        <p>Betöltés...</p>
      ) : error ? (
        <p>Hiba történt: {message}</p>
      ) : (
        
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.watchName} - {product.price}
            </li>
          ))}
        </ul>        
      )}
    </div>
  );
};

export default ProductListFiltered;
