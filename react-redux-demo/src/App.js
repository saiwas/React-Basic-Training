import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  /* Remove the previous
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
  */

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <div>Name: <span>{this.props.name}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({age: state.age})

const mapDispatchToProps = (dispatch)  => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
