import React from 'react';

const CurrentDisplay = ({
  currentGenre,
  currentInstruments,
  removeInstrument
}) => (
  <div className="text-center mb-5">
    <h1 className="text-primary">{currentGenre}</h1>
    <ul>
      {currentInstruments.map((inst, index, arr) => {
        return (
          <li 
            className='list-unstyled lead'
            key={inst}>
            {inst}
            <span
              className="badge badge-danger ml-3 remove-instrument-x"
                onClick={(e)=> removeInstrument(e, index, arr)}> x </span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CurrentDisplay;