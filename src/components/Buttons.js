import React from 'react';
// import './Buttons.css';

const Buttons = ({ handleStartOver, handleSavePalette }) => (
    <div className="btn-group text-center d-block border-bottom">
        <button 
            className="btn btn-info mr-3 mb-5"
            onClick={(e) => handleSavePalette(e)}>Save Palette</button>
        <button 
            className="btn btn-info mb-5"
            onClick={(e) => handleStartOver(e)}>Start Over</button>
    </div>
)


export default Buttons;
