import React, { useState, useEffect } from "react";
import WatchesServices from "../../services/WatchesServices";

export default function Blogs() {
  const [watches, setWatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateWatches();
  }, []);

  const updateWatches = () => {
    WatchesServices.getAll()
      .then((response) => setWatches(response.data))
      .catch((error) => setError(error.message));
  };

  const getTopWatches = () => {
    const watchCounts = watches.reduce((acc, watch) => {
      acc[watch.id] = (acc[watch.id] || 0) + 1;
      return acc;
    }, {});

    const sortedWatches = Object.keys(watchCounts).sort(
      (a, b) => watchCounts[b] - watchCounts[a]
    );

    return sortedWatches
      .slice(0, 6)
      .map((id) => watches.find((watch) => watch.id === id));
  };

  const topWatches = getTopWatches();

  return (
    <div>
      <h1>Órák ({watches.length} db)</h1>
      {error ? (
        <div>Error fetching data: {error}</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {topWatches.map((watch) => (
            <div
              key={watch.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
                width: "200px",
              }}
            >
              <h3>{watch.brand_id}</h3>
              <p>Model: {watch.model}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
