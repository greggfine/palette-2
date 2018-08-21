import React from 'react';
import './InputFields.css';

const GenreInput = ({
  handleGenreOnChange,
  handleGenreKeypress,
  handleAddGenre,
  genreInput,
  currentGenre
}) => (
  <div className="input-field">
    <input
      placeholder="Add genre"
      autoFocus
      value={genreInput}
      onChange={e => handleGenreOnChange(e)}
      onKeyPress={e => handleGenreKeypress(e)}
      disabled = {currentGenre}
  />
      <button
        className="add-genre-btn"
        onClick={(e) => handleAddGenre(e)}>Add Genre</button>
    
  </div>
);

export default GenreInput;