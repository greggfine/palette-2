import React from 'react';
import './css/CurrentDisplay.css';

const CurrentDisplay = ({ currentGenre, currentInstruments, removeInstrument }) => (
  <div className='text-center mb-5'>
    <h1 className='text-primary'>{currentGenre}</h1>
    <ul className="border list-group">
      {currentInstruments.map((inst, index, arr) => {
        return (
          <li className='list-group-item lead' key={inst}>
            {inst}
            <span
              className='badge badge-danger ml-3 remove-instrument-x'
                onClick={(event)=> removeInstrument(event, index, arr)}> x </span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CurrentDisplay;