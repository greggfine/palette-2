import React from 'react';
import './Accordion.css';

class Accordion extends React.Component{
    constructor(props){
        super(props)

        this.state={
            activePanel: false,
            className: ''
        }

        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
    }

    handleClick(e){
        if(e.target.id === 'header1'){
            this.myRef.current.className = "active"
            this.myRef2.current.className = ""
            this.myRef3.current.className = ""
        } else if (e.target.id === 'header2'){
            this.myRef.current.className = ""
            this.myRef2.current.className = "active"
            this.myRef3.current.className = ""
        } else {
            this.myRef.current.className = ""
            this.myRef2.current.className = ""
            this.myRef3.current.className = "active"
        }
    }

    render(){
        const { activePanel } = this.state;
        return <div id="accordion" style={{ fontSize: "2rem" }}>
            <div  className="panel" ref={this.myRef} onClick={e => this.handleClick(e)}>
                <div id="header1" className="acc-header">header1</div>
              <div className="acc-body">body of panel 1</div>
            </div>

            <div className="panel" ref={this.myRef2} onClick={e => this.handleClick(e)}>
                <div id="header2" className="acc-header">header2</div>
              <div className="acc-body">body of panel 2</div>
            </div>

            <div className="panel" ref={this.myRef3} onClick={e => this.handleClick(e)}>
                <div id="header3" className="acc-header">header3</div>
                <div className="acc-body">body of panel 3</div>
            </div>
          </div>;
    }
    
    
}

export default Accordion;