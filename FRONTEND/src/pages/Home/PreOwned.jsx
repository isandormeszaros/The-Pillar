import React from "react";
import "./PreOwned.css";

const PreOwned = () => {
  return (
    <div className="pre-owned container-fluid p-0 background-pre-owned">
      <div className="container my-5 py-5">
        <div className="row no-gutters m-a">
          <div className="align-items-center justify-content-center text-white h-100 ">
            <div className="text-center">
              <h1 className="custom-heading-font">Pre-Owned Watches</h1>
              <p className="custom-p-font text-align-center pt-3 pb-1 text-white">
                Shop luxury pre-owned watches, authenticated by our expert team
                of watchmakers.
              </p>
              <a href="" className="bg-white default-button black">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOwned;
