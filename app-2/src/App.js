import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state ={
      food : ['apples', 'bananas', 'cookies', 'bread'],
    
    };

  }

  render() {
   
      var arrDisplay =  this.state.food.map(elem => {
        return (
          <h2> {elem} </h2>
        )
      });
    
    return (
      <div className="App">
        {arrDisplay }
        
      </div>
    );
  }
}

export default App;
