import React from 'react';
import './CurrentDisplay.css';

const CurrentDisplay = ({
  currentGenre,
  currentInstruments,
  removeInstrument
}) => (
  <div className="input-field">
    <h1>{currentGenre}</h1>
    <ul>
      {currentInstruments.map((inst, index, arr) => {
        return (
          <li key={inst}>
            {inst}
            <span
                className="remove-instrument-x" 
                onClick={(e)=> removeInstrument(e, index, arr)}> x </span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CurrentDisplay;