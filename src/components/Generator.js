import React, { Component } from 'react';
import './Generator.css';

const instList = [
    'gtr', 'bass', 'drums', 'flute', 'violin', 'trombone', 'viola', 'harp', 'cornet', 'vocal', 'shout'

]

class Generator extends Component {
    constructor(props){
        super(props)

        this.state={
            instruments: [
            ]
        }        
    }

    generateRandNum(arr){
        return Math.floor(Math.random() * arr.length)
    }

    generateFourRandNums(arr){
        const result = [];
        let randNum;

        while(result.length < 6){
            randNum = this.generateRandNum(arr);
            if(!result.includes(randNum)){
                result.push(randNum)
            }
        }
        return result
    }

    generatePermutatedArr(arr){
        const result = [];
        const fourRandNums = this.generateFourRandNums(arr);
        fourRandNums.forEach((num)=>{
            result.push(arr[num])
        })
        this.setState((prevState)=>{
            return{
                instruments: [...result]
            }
        })
    }


    
    render(){
        const { instruments } = this.state;
        const mappedInstruments = instruments.map((instrument) => {
            return <li key={ instrument }>{ instrument }</li>
        })
        return(
            <div className="generator">
                <h1>This is a Generator</h1>
                <button
                    onClick={()=>this.generatePermutatedArr(instList) }
                >Generate Random List</button>
                <ul>
                    { mappedInstruments }
                </ul>
            </div>
        )
    }
    
}

export default Generator;