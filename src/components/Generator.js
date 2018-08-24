import React, { Component } from 'react';
import './Generator.css';
import instList from '../InstrumentList';

const instListNames = instList.map((inst) => {
  return inst.name
})

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instruments: [],
      userInput: '',
      numInstruments: ''
    };
  }

  handleChange(e) {
    e.target.value;
    this.setState({
      userInput: e.target.value
    });
  }

  handleKeyPress(e){
    if(e.which === 13){
        this.setState({
            numInstruments: this.state.userInput,
            userInput: ''
        })
    }
  }

  generateRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
  }

    generateFourRandNums(arr, numInstruments) {
    const result = [];
    let randNum;

    while (result.length < numInstruments) {
      randNum = this.generateRandNum(arr);
      if (!result.includes(randNum)) {
        result.push(randNum);
      }
    }
    return result;
  }

  generatePermutatedArr(arr, numInstruments) {
    if(this.state.numInstruments){
        const result = [];
        const fourRandNums = this.generateFourRandNums(arr, numInstruments);
        fourRandNums.forEach(num => {
        result.push(arr[num]);
        });
        this.setState(prevState => {
        return {
            instruments: [...result]
        };
        });
    }
  }

  render() {
    const { instruments, numInstruments } = this.state;
    const mappedInstruments = instruments.map(instrument => {
      return <li key={instrument}>{instrument}</li>;
    });
    return (
      <div className="generator">
        <h1>This is a Generator</h1>
        <input
          type="text"
          placeholder="How many instruments?"
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.handleKeyPress(e)}
          value={this.state.userInput}
        />
        <span><h1>{ numInstruments }</h1></span>
        <button onClick={() => this.generatePermutatedArr(instListNames, numInstruments)}>
          Generate Random List
        </button>
        <ul>{mappedInstruments}</ul>
      </div>
    );
  }
}

export default Generator;