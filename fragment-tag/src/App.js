import React, { Component, Fragment } from 'react';
import './App.css';

const ComponentA = () => {
  return (
    [
      <div key='1'>Hi</div>,
      <div key='2'>Johnny</div>
    ]
  )
}

// Using frameElement
const ComponentB = () => {
  return (
    <>
      <div>Hi</div>
      <div>Johnny</div>
    </>
  )
}

// Using Fragment
const ComponentC = () => {
  return (
    <Fragment>
      <div>Hi</div>
      <div>Johnny</div>
    </Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    );
  }
}

export default App;
