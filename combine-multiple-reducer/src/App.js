import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='col'>
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={this.props.updateA.bind(this, this.props.b)}>Update A</button>
        </div>
        <div className='col'>
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={this.props.updateB.bind(this, this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (bValue) => dispatch({type: 'UPDATE_A', value: bValue}),
    updateB: (aValue) => dispatch({type: 'UPDATE_B', value: aValue})
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
