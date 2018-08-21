import React from 'react';
import "./InputFields.css";

const InputFields = ({ handleInstrumentOnChange, handleInstrumentKeypress, currentGenre, currentInstruments, instrumentInput, }) => (
    <div className="input-field">
        <input
            placeholder="Add instrument"
            value={instrumentInput}
            onChange={e => handleInstrumentOnChange(e)}
            onKeyPress={e => handleInstrumentKeypress(e)}
        />
    </div>
);

export default InputFields;