import React, { Component } from 'react';

import CheckBox from './components/checkbox'
import InputText from './components/inputtext'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> To-Do </h1>
        <div className="todo">
          <CheckBox />
          <InputText />
        </div>
      </div>
    );
  }
}

export default App;
