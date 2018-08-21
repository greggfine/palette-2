import React from 'react';
import './CurrentDisplay.css';

const CurrentDisplay = ({ currentGenre, currentInstruments, }) => (
    <div className="input-field">
        <h1>{currentGenre}</h1>
        <ul>
            {currentInstruments.map(inst => {
                return <li key={ inst }>{inst}</li>;
            })}
        </ul>

    </div>
);

export default CurrentDisplay;