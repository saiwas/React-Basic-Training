import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Johnny',
    age: 21
  }

  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    })
  }

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    })
  }

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.state.age}</span></div>
        <div>Name: <span>{this.state.name}</span></div>
        <button onClick={this.onAgeUp}>Age Up</button>
        <button onClick={this.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

export default App;
