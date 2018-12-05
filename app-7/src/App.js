import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import NewTask from './components/NewTask';



class App extends Component {
  constructor(){
    super()
    this.state = {
      userArray : [],
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(value){
    let newArr = this.state.userArray.slice()
    newArr.push(value)
    this.setState({
      userArray: newArr
    })

  }
  render() {
    return (
      <div className="App">
        <h1>My to-do List</h1>
        <NewTask 
        add={this.handleAdd} />
        <List tasks={this.state.userArray} />
      </div>
    );
  }
}

export default App;
