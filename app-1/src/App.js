import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor (){
    super ()
    this.state={
      userInput: ''
    }
    
  }

  updateInput (event) {
    this.setState({
      userInput : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input className="inputLine" onChange={this.updateInput}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
