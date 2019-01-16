import React from 'react';

const GenreInput = ({
  handleGenreOnChange, handleGenreKeypress, handleAddGenre,
  genreInput, currentGenre}) => (
    <div className="mb-3 input-group">
        <input className="input-group-text text-left" autoFocus
        placeholder="Add genre" value={genreInput}
        onChange={(event) => handleGenreOnChange(event)}
        onKeyPress={(event) => handleGenreKeypress(event)}
        disabled = {currentGenre}
        style={currentGenre? { backgroundColor: '#aaa' }:{ backgroundColor: '#fff' }}
        />
        <button className='btn btn-success input-group-append'
          onClick={(event) => handleAddGenre(event)}>Add Genre
        </button>
    </div>
);

export default GenreInput;