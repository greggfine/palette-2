import React from 'react';

const InstrumentInput = ({
  handleAddInstrument,
  handleInstrumentOnChange,
  handleInstrumentKeypress,
  instrumentInput
}) => (
  <div className="mb-3 input-group">
    <input
      className="input-group-text"
      placeholder="Add instrument"
      value={instrumentInput}
      onChange={e => handleInstrumentOnChange(e)}
      onKeyPress={e => handleInstrumentKeypress(e)}
    />
    <button
      className="btn btn-success input-group-append"
      onClick={e => handleAddInstrument(e)}
    >
      Add Instrument
    </button>
  </div>
);

export default InstrumentInput;