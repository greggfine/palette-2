import React from "react";
import './css/SavedPalettes.css'

const SavedPalettes = ({ savedPalettes, clearSavedPalettes }) => (
  <div className="p-5 text-center">
    {savedPalettes.map(savedPalette => {
      return (
        <div 
        className='mb-5'
        key={savedPalette.genre}>
          <h1 
            
            className="text-warning display-5">{savedPalette.genre}</h1>
          <ul>
            {savedPalette.instruments.map(inst => {
              return <li 
                className="text-center list-unstyled lead"
                key={ inst }>{inst}</li>;
            })}
          </ul>
        </div>
      );
    })}
    <button className="btn btn-danger" onClick={clearSavedPalettes}>Clear Saved Palettes</button>
  </div>
);

export default SavedPalettes;


