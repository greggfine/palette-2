import React from 'react';
import './Buttons.css';

const Buttons = ({ handleStartOver, handleSavePalette }) => (
    <div className="btn-group">
        <button 
            className="save-palette-btn"
            onClick={(e) => handleSavePalette(e)}>Save Palette</button>
        <button 
            className="start-over-btn"
            onClick={(e) => handleStartOver(e)}>Start Over</button>
    </div>
)


export default Buttons;