import React, { useState, useEffect } from 'react';
import WatchesServices from '../WatchesServices';

export default function TopProducts() {
  const [watches, setWatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateWatches();
  }, []);

  const updateWatches = () => {
    WatchesServices.getAll()
      .then(response => setWatches(response.data))
      .catch(error => setError(error.message));
  };

  const getImagePath = (brandId, imageName) => `/images/${brandId}/${imageName}`;

  return (
    <div>
      <h1>Órák ({watches.length} db)</h1>
      {error ? (
        <div>Error fetching data: {error}</div>
      ) : (
        <div className="card-container container">
          <div className="row">
            {watches.map(watch => (
              <div className="col-md-4" key={watch.id}>
                <div className="card m-1">
                  <img
                    src={getImagePath(watch.brand_id, '10001.jpg')}
                    alt={`Brand ${watch.brand_id}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Brand: {watch.brand_id}</h5>
                    <p className="card-text">Model: {watch.Model}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
