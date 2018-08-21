import React from "react";
import './SavedPalettes.css'

const SavedPalettes = ({ savedPalettes }) => (
  <div className="saved-palettes">
    {savedPalettes.map(savedPalette => {
      return (
        <div>
          <h1>{savedPalette.genre}</h1>
          <ul>
            {savedPalette.instruments.map(inst => {
              return <li>{inst}</li>;
            })}
          </ul>
        </div>
      );
    })}
  </div>
);

export default SavedPalettes;


