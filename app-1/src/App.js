import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      userInput : 'place Holder',
    
    };

    
    this.updateText = this.updateText.bind(this);

  }

    updateText(event){
      this.setState({userInput : event.target.value});
    }

  render() {
    return (
      <div className="App">
        <input onChange = { this.updateText} />
        <p> {this.state.userInput} </p>
      </div>
    );
  }
}

export default App;
