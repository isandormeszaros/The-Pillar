import React from "react";
import "./FetchError.css";

function FetchError() {
  return (
    <div className="fetch-error-container">
      <div className="fetch-error-content">
        <h1 className="custom-heading-font">
          Sajnáljuk, az oldalt jelenleg nem tudjuk betölteni.
        </h1>
        <h5 className="text-muted mb-5">Kérjük, térjen vissza később.</h5>
        <a href="/home" className="default-button">
          Kezdőlap
        </a>
        {/* <a href="/home" className="default-button bg-white">
          Kapcsolat
        </a> */}
      </div>
    </div>
  );
}

export default FetchError;
