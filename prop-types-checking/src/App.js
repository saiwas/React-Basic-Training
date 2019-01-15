import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

const FuncComponent = (props) => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool}</h1>
    </div>
  )
}

FuncComponent.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FuncComponent str={'Johnny'} bool={'string'}/>
      </div>
    );
  }
}

export default App;
