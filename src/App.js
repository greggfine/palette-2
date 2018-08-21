import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GenreInput from './components/GenreInput';
import InstrumentInput from "./components/InstrumentInput";
import CurrentDisplay from "./components/CurrentDisplay";
import SavedPalettes from "./components/SavedPalettes";
import Buttons from './components/Buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genreInput: "",
      instrumentInput: "",
      currentInstruments: [],
      currentGenre: "",
      palettes: [],
      savedPalettes: []
    };

    this.handleGenreOnChange = this.handleGenreOnChange.bind(this);
    this.handleGenreKeypress = this.handleGenreKeypress.bind(this);
    this.handleInstrumentOnChange = this.handleInstrumentOnChange.bind(this);
    this.handleInstrumentKeypress = this.handleInstrumentKeypress.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
  }

  handleSavePalette(e) {
    if (this.state.currentGenre && this.state.currentInstruments.length) {
      this.setState({
        genreInput: "",
        instrumentInput: "",
        currentInstruments: [],
        currentGenre: "",
        palettes: [{ genre: "", instruments: [] }],
        savedPalettes: [
          ...this.state.savedPalettes,
          {
            genre: this.state.currentGenre,
            instruments: this.state.currentInstruments
          }
        ]
      });
    }
  }

  handleGenreOnChange(e) {
    this.setState({
      genreInput: e.target.value
    });
  }

  handleInstrumentOnChange(e) {
    this.setState({
      instrumentInput: e.target.value
    });
  }

  handleGenreKeypress(e) {
    if (e.which === 13) {
      if (!this.state.currentGenre) {
        this.setState({
          currentGenre: e.target.value,
          genreInput: ""
        });
      }
    }
  }

  handleInstrumentKeypress(e) {
    if (e.which === 13) {
      this.setState({
        currentInstruments: [...this.state.currentInstruments, e.target.value],
        instrumentInput: ""
      });
    }
  }

  handleStartOver() {
    this.setState({
      genreInput: "",
      instrumentInput: "",
      currentInstruments: [],
      currentGenre: "",
      palettes: [{ genre: "", instruments: [] }]
    });
  }

  render() {
    const {
      currentGenre,
      currentInstruments,
      genreInput,
      instrumentInput,
      palettes,
      savedPalettes,
      userInput
    } = this.state;

    return (
      <div>
        <Header />
        <div className="App">
          <div className="form-fields">
            <GenreInput
              handleGenreOnChange={this.handleGenreOnChange}
              handleGenreKeypress={this.handleGenreKeypress}
              genreInput={genreInput}
            />

            <InstrumentInput
              handleInstrumentOnChange={this.handleInstrumentOnChange}
              handleInstrumentKeypress={this.handleInstrumentKeypress}
              instrumentInput={instrumentInput}
            />
            <CurrentDisplay
              currentGenre={currentGenre}
              currentInstruments={currentInstruments}
            />
            <Buttons
              handleStartOver={this.handleStartOver}
              handleSavePalette={this.handleSavePalette}
            />
          </div>
          <SavedPalettes savedPalettes={savedPalettes} />
        </div>
      </div>
    );
  }
}

export default App;
