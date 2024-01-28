import React, { useState, useEffect } from 'react';
import WatchesServices from '../WatchesServices';

export default function Watches() {
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

  return (
    <div>
      <h1>Órák ({watches.length} db)</h1>
      {error ? (
        <div>Error fetching data: {error}</div>
      ) : (
        <ul>
          {watches.map(watch => (
            <li key={watch.id}>
              <div>
                <strong>Brand:</strong> {watch.brand_id}
              </div>
              <div>
                <strong>Model:</strong> {watch.Model}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
