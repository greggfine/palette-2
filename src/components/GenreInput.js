import React from 'react';

const GenreInput = ({
  handleGenreOnChange,
  handleGenreKeypress,
  handleAddGenre,
  genreInput,
  currentGenre
}) => (
  <div className="mb-3 input-group">
    <input
      className="input-group-text"
      placeholder="Add genre"
      autoFocus
      value={genreInput}
      onChange={e => handleGenreOnChange(e)}
      onKeyPress={e => handleGenreKeypress(e)}
      disabled = {currentGenre}
      style={currentGenre? { backgroundColor: '#ccc' }:{ backgroundColor: '#fff' }}
  />
      <button
        className="btn btn-success input-group-append"
        onClick={(e) => handleAddGenre(e)}>Add Genre</button>
    
  </div>
);

export default GenreInput;