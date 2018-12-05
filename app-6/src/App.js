import React, { Component } from 'react';
import './App.css';
import ToDo from './components/Todo'

class App extends Component {
  constructor (){
    super();
    this.state = {
      userInput: '',
      userArray: []
    }
    this.updateInput = this.updateInput.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  updateInput (value){
    this.setState({
      userInput: value
    })
  }
  addToList(){
    let newArr = this.state.userArray.slice()
    newArr.push(this.state.userInput)
    this.setState({
      userArray: newArr
    })

  }
  render() {
    const display = this.state.userArray.map((val) =>{
      return <ToDo task = {val} />
    })
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <input 
        className="inputLine" 
        onChange={event => this.updateInput(event.target.value)}
      />
      <button 
        className="confirmationButton"
        onClick={this.addToList}>Click</button>
      {display}
        
      </div>
    );
  }
}

export default App;
