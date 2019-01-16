import React, { Component } from 'react';
import './css/App.css';
import GenreInput from './GenreInput';
import InstrumentInput from './InstrumentInput';
import CurrentDisplay from './CurrentDisplay';
import SavedPalettes from './SavedPalettes';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genreInput: '',
      instrumentInput: '',
      currentInstruments: [],
      currentGenre: '',
      savedPalettes: [],
      warning: false
    };

    this.handleGenreOnChange = this.handleGenreOnChange.bind(this);
    this.handleGenreKeypress = this.handleGenreKeypress.bind(this);
    this.handleInstrumentOnChange = this.handleInstrumentOnChange.bind(this);
    this.handleInstrumentKeypress = this.handleInstrumentKeypress.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
    this.removeInstrument = this.removeInstrument.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.handleAddInstrument = this.handleAddInstrument.bind(this);
    this.clearSavedPalettes = this.clearSavedPalettes.bind(this);
  }

  handleAddGenre(e) {
    if (!this.state.currentGenre) {
      this.setState({
        currentGenre: this.state.genreInput,
        genreInput: '',
        warning: false
      });
    }
  }

  handleAddInstrument(e) {
    if (this.state.instrumentInput){
      this.setState({
        currentInstruments: [
          ...this.state.currentInstruments,
          this.state.instrumentInput
        ],
        instrumentInput: ""
      });
    }
  }

  removeInstrument(e, index, arr) {
    this.setState({
      currentInstruments: this.state.currentInstruments.filter(inst => {
        return inst !== arr[index];
      })
    });
  }

  handleSavePalette(e) {
    const { currentGenre, currentInstruments, savedPalettes } = this.state;
    if (currentGenre && currentInstruments.length) {
      this.setState({
        genreInput: '',
        currentGenre: '',
        instrumentInput: '',
        currentInstruments: [],
        savedPalettes: [
          ...savedPalettes,
          {
            genre: currentGenre,
            instruments: currentInstruments
          }
        ]
      });
    } else{
      this.setState({
        warning: true
      })
    }
  }

  handleGenreOnChange(e) {
    this.setState({
      genreInput: e.target.value
    });
  }

  handleGenreKeypress(e) {
    if (e.which === 13) {
      if (!this.state.currentGenre) {
        this.setState({
          currentGenre: this.state.genreInput,
          genreInput: ''
        });
      }
    }
  }

  handleInstrumentOnChange(e) {
    this.setState({
      instrumentInput: e.target.value
    });
  }

  handleInstrumentKeypress(e) {
    if (e.which === 13 && this.state.instrumentInput) {
      this.setState({
        currentInstruments: [
          ...this.state.currentInstruments,
          this.state.instrumentInput
        ],
        instrumentInput: ""
      });
    }
  }

  handleStartOver() {
    this.setState({
      genreInput: "",
      instrumentInput: "",
      currentInstruments: [],
      currentGenre: ""
    });
  }

  clearSavedPalettes(){
    this.setState({
      savedPalettes: []
    })
  }

  componentDidUpdate() {
    localStorage.setItem("palettes", JSON.stringify(this.state.savedPalettes));
  }

  componentDidMount() {
    const storedPalettes = localStorage.getItem("palettes");
    const parsedPalettes = JSON.parse(storedPalettes);
    for (let key in parsedPalettes) {
      if (parsedPalettes.hasOwnProperty(key)) {
        this.setState({ savedPalettes: parsedPalettes });
      }
    }
  }

  render() {
    const {
      currentGenre,
      currentInstruments,
      genreInput,
      instrumentInput,
      savedPalettes,
      userInput
    } = this.state;

    
    return (
    

          <div className="App">
            <h1 className="display-4 shadow-sm pb-3 text-info text-center mb-5">INSTRUMENT PALETTES</h1>
            <div className="mb-5 p-5">

              <div className="genre-inst-inputs">
                <GenreInput
                  handleGenreOnChange={this.handleGenreOnChange}
                  handleGenreKeypress={this.handleGenreKeypress}
                  genreInput={genreInput}
                  currentGenre={currentGenre}
                  handleAddGenre={this.handleAddGenre}
                />
                <InstrumentInput
                  handleInstrumentOnChange={this.handleInstrumentOnChange}Y
                  handleInstrumentKeypress={this.handleInstrumentKeypress}
                  instrumentInput={instrumentInput}
                  handleAddInstrument={this.handleAddInstrument}
                />
              </div>

              <CurrentDisplay
                currentInstruments={currentInstruments}
                currentGenre={currentGenre}
                removeInstrument={this.removeInstrument}
              />
              <h4 style={{ color: 'red' }} >{this.state.warning? 'please add a genre':null}</h4>
              <Buttons
                handleStartOver={this.handleStartOver}
                handleSavePalette={this.handleSavePalette}
              />
            </div>
            <SavedPalettes
              clearSavedPalettes={this.clearSavedPalettes}
              savedPalettes={savedPalettes}
            />
          </div>
          

    );
  }
}

export default App;
