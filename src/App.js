import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      genreInput: '',
      instrumentInput: '',
      currentInstruments: [],
      currentGenre: '',
      palettes: [ { genre: '', instruments: [] } ],
      savedPalettes: []
    }
  }

  handleSubmit(e) {
    if(this.state.currentGenre && this.state.currentInstruments.length){
      this.setState({
        genreInput: '',
        instrumentInput: '',
        currentInstruments: [],
        currentGenre: '',
        palettes: [{ genre: '', instruments: [] }],
        savedPalettes: [...this.state.savedPalettes, { genre: this.state.currentGenre, instruments: this.state.currentInstruments }],
      })
    }
  }


  handleGenre(e){
    this.setState({
      genreInput: e.target.value
    })
  }

  handleInstrument(e) {
    this.setState({
      instrumentInput: e.target.value
    })
  }

  handleGenreKeypress(e) {
    if(e.which === 13){
      if(!this.state.currentGenre){
        this.setState({
          currentGenre: e.target.value,
          genreInput: ''
        })
      }
    }
  }

  handleInstrumentKeypress(e) {
    if (e.which === 13) {
      this.setState({
        currentInstruments: [...this.state.currentInstruments, e.target.value],
        instrumentInput: ''
      })
    }
  }

  handleClear(){
    this.setState({
      genreInput: '',
      instrumentInput: '',
      currentInstruments: [],
      currentGenre: '',
      palettes: [{ genre: '', instruments: [] }
      ]
    })
  }


  render() {
    const { userInput } = this.state
    const mappedPalettes = this.state.palettes.map((palette) => {
      return <div key={ palette.genre }>
              <h1>{palette.genre}</h1>
              <ul>
                {palette.instruments.map((inst) => {
                  return <li key={ inst }>{ inst }</li>
                })}
              </ul>
             </div>
    })

    return <div>
          <h1>INSTRUMENT PALETTES</h1>
          <div className="App">  
            <div className="input-field">
              <input placeholder="genre" value={ this.state.genreInput } onChange={(e) => this.handleGenre(e)} onKeyPress={(e) => this.handleGenreKeypress(e)}/>
              <input placeholder="instruments" value={ this.state.instrumentInput } onChange={(e) => this.handleInstrument(e)} onKeyPress={(e) => this.handleInstrumentKeypress(e)}/>
                { mappedPalettes }
                <h1>{ this.state.currentGenre }</h1>
                <ul>
                  { this.state.currentInstruments.map((inst)=> {
                    return <li>{ inst }</li>
                  }) }
                </ul>
                <button onClick={(e) => this.handleClear(e) }>New Palette</button>
                <button onClick={(e) => this.handleSubmit(e) }>Save Palette</button>
              </div>

              <div className="saved-palettes">
                { this.state.savedPalettes.map((savedPalette)=> {
                    return <div> 
                              <h1>
                                { savedPalette.genre }
                              </h1>
                              <ul>
                                { savedPalette.instruments.map((inst)=> {
                                    return <li>{ inst }</li>
                                }) }
                              </ul>
                          </div>
                }) }
              </div>
          </div>
          </div>
  }
}

export default App;
