import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [   
     "spaghetti",
      "ice cream",
      "sushi",
      "bologna",
      "cheese"],
      userInput:''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(value){
    this.setState({
      userInput: value,
      
    })
  
  }
  render() {

    const display = this.state.list.filter((val)=> 
      val.includes(this.state.userInput)).map((val,i) =>
       <h2 key={i}>{val}</h2>)
    return (
      <div className="App">
        <input 
          className="inputLine" 
          onChange={event => this.changeHandler(event.target.value)} />
        {display}
      </div>
    );
  }
}

export default App;
