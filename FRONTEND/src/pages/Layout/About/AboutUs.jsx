import React from "react";
import './About.css'

function AboutUs() {
  const numRows = 200; // Sorok száma
  const numCols = 5; // Oszlopok száma

  // Grid létrehozása
  const grid = Array.from({ length: numRows }, (_, row) => (
    <div key={`row-${row}`} className="grid-row">
      {Array.from({ length: numCols }, (_, col) => (
        <div key={`cell-${row}-${col}`} className="node"></div>
      ))}
    </div>
  ));

  return (
    <div className="grid-container">
      <div className="grid-background"></div>
      <div className="grid">{grid}</div>
      <p className="text">Backgrounds</p>
    </div>
  );
}

export default AboutUs;
