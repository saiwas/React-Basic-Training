import React, { Component } from 'react';
import './App.css';

import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
        <ButtonTwo />
      </div>
    );
  }
}

export default App;
