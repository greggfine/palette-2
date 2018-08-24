import React from "react";
import './SavedPalettes.css'
import { Panel } from "react-bootstrap";


const SavedPalettes = ({ savedPalettes, clearSavedPalettes }) => (
  <div className="saved-palettes">
    {savedPalettes.map(savedPalette => {
      return (
        <Panel key={savedPalette.genre}>
        
        <Panel.Body>
          <h1>{savedPalette.genre}</h1>
          <ul>
            {savedPalette.instruments.map(inst => {
              return <li key={ inst }>{inst}</li>;
            })}
          </ul>

            </Panel.Body>
        </Panel>
      );
    })}
    <button onClick={clearSavedPalettes}>Clear Saved Palettes</button>
  </div>
);

export default SavedPalettes;


