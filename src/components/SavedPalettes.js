import React from "react";
import './SavedPalettes.css'

const SavedPalettes = ({ savedPalettes, clearSavedPalettes }) => (
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
    <button onClick={clearSavedPalettes}>Clear Saved Palettes</button>
  </div>
);

export default SavedPalettes;


