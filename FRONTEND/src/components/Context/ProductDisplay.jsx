import React, { useState} from "react";
import FetchError from "../../utils/FetchError";
import ProductList from "./ProductList";

function ProductDisplay() {
  const [error, setError] = useState(null);

  return <div>{error ? <FetchError /> : <ProductList />}</div>;
}

export default ProductDisplay;
