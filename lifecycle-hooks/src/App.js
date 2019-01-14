import React, { Component } from 'react';
import './App.css';

import ChildA from './childA';
import ChildB from './childB';

class App extends Component {

  state = { name: 'This is a const state' };

  constructor() {
    super();
    // We should set the initialize state here
    this.state = { name: 'Johnny' };
    console.log('constructor');
  }

  componentWillMount() {
    // This function will run before the component render.
    // Usually, base on the props, we would like to change the state.
    // Then, we should set the state here. Because the component still not render.
    // Also, this function will only run one time in the the component life cycle.
    // Something like the window / global vars will set here.
    if(window.innerWidth < 500) {
      this.setState({innerWidth: window.innerWidth});
    }
    console.log('componentWillMount');
  }

  componentDidMount() {
    // This function will run after the component render.
    // And also, this function will only run one time in the the component life cycle.
    // If you need an Ajax call, then you should make the call here.
    // In this function, you should not to call the `setState`, otherwise, it will make the component re-render.
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    // This function should not be run in this file.
    // Because it's no props changed.
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // In this function, we should according to our business to make the decision of render the component or not.
    // If the component is using force update, this function will be ignored.
    // true: go to the rendering.
    // false: block the further re-render.

    console.log('shouldComponentUpdate');
    console.log('nextProps -----------',nextProps);
    console.log('nextState -----------',nextState);

    return true;
  }

  componentWillUpdate() {
    // This function should be similar with the `componentDidMount`
    // We should not call `setState` function here, because it will make the components into a infinite loop.
    console.log('componentWillUpdate');
  }

  componentDidUpdate(preProps, preState) {
    console.log('componentDidUpdate');
    console.log('preProps -----------', preProps);
    console.log('preState -----------', preState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  changeState() {
    this.setState({name: 'saiwas'});
  }

  unmountChild() {
    this.setState({name: ''});
  }


  render() {
    // This function will according to the state, props to render the component.
    // In the function, we should not to call the `setState` function, otherwise, the components will entry a infinite loop.
    console.log('render');

    if(this.state.name === 'x') {
      return (<div />);
    }

    return (
      <div className="App">
        {this.state.name}
        {this.state.innerWidth}
        <ChildA name={this.state.name}/>
        <ChildB name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change Button</button>
        <button onClick={this.unmountChild.bind(this)}>Unmout Child</button>
      </div>
    );
  }
}

export default App;
