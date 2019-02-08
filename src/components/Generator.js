import React, { Component } from 'react';
import instList from '../InstrumentList';

const instListNames = instList.map((inst) => {
  // return inst
  return inst
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

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({
        numInstruments: this.state.userInput,
        userInput: ''
      })
    }
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
      return (
        <div>
          <li className="list-group-item" key={instrument}>
            {instrument.name}
            <img src={instrument.img} alt="" style={{ width: '50px'}}/>
          </li>
        </div>
      )
    });
    return (
      <div className='generator'>
        <h1 className="shadow-sm pb-3 text-info text-center display-4 mb-5">Generator</h1>
        <div className="text-center">
          <input
            className='mb-5 mr-3 p-2'
            style={{margin: 'auto', width: '200px'}}
            type='text'
            placeholder='How many instruments?'
            onChange={event => this.handleChange(event)}
            onKeyPress={event => this.handleKeyPress(event)}
            value={this.state.userInput}
          />
          <span className='badge badge-dark text-white p-2 mb-5'>{ numInstruments }</span>
          <button 
              className='btn btn-success d-block mx-auto mb-5'
              onClick={() => this.generatePermutatedArr(instListNames, numInstruments)}>
            Generate Random List
          </button>
          <ul className='list-group lead'>{mappedInstruments}</ul>
        </div>
      </div>
    );
  }
}

export default Generator;