import React from 'react';
import './InputFields.css';

const GenreInput = ({
  handleGenreOnChange,
  handleGenreKeypress,
  genreInput
}) => (
  <div className="input-field">
    <input
      placeholder="Add genre"
      autoFocus
      value={genreInput}
      onChange={e => handleGenreOnChange(e)}
      onKeyPress={e => handleGenreKeypress(e)}
    />
  </div>
);

export default GenreInput;