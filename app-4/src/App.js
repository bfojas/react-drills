import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  this.updateUsername = this.updateUsername.bind(this);
  this.updatePassword = this.updatePassword.bind(this);
  this.login = this.login.bind(this);
  }
  updateUsername(value){
    this.setState({
      username: value
    })
  }
  updatePassword(value){
    this.setState({
      password: value
    })
  }
  login(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)

  }

  render() {
    return (
      <div className="App">
        <input 
        className="inputLine" 
          onChange={event => this.updateUsername(event.target.value)}
        />
        <input 
          className="inputLine" 
          onChange={event => this.updatePassword(event.target.value)}
        />
        <button className="confirmationButton" onClick={this.login}>Log it</button>
      </div>
    );
  }
}

export default App;
