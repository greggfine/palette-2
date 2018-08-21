import React from 'react';
import "./InputFields.css";

const InputFields = ({
  handleAddInstrument,
  handleInstrumentOnChange,
  handleInstrumentKeypress,
  instrumentInput
}) => (
  <div className="input-field">
    <input
      placeholder="Add instrument"
      value={instrumentInput}
      onChange={e => handleInstrumentOnChange(e)}
      onKeyPress={e => handleInstrumentKeypress(e)}
    />
    <button
      className="add-instrument-btn"
      onClick={e => handleAddInstrument(e)}
    >
      Add Instrument
    </button>
  </div>
);

export default InputFields;