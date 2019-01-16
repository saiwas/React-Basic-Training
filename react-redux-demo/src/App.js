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

        <hr />

        <div>
          The Change History:
          <ul>
            {
              this.props.changeHistory.map((el) => (
                <li key={el.key}
                  className='historyItem'
                  onClick={this.props.onDelItem.bind(this, el.key)}
                >
                  {el.age}
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    changeHistory: state.changeHistory
  }
}

const mapDispatchToProps = (dispatch)  => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 2}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
    onDelItem: (key) => dispatch({type: 'DEL_ITEM', key: key})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
