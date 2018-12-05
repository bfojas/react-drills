import React, { Component } from 'react';
import Image from './components/Image';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
       <Image image="https://http.cat/400"/>
      </div>
    );
  }
}

export default App;
