import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['nachos','pizza','sushi','ramen','cheetos']
    }
  }
  render() {
    const display = this.state.list.map((val) => {
      return <h2>{val}</h2>
    })
    return (
      <div className="App">
        <h2>{display}
        </h2>
      </div>
    );
  }
}

export default App;
