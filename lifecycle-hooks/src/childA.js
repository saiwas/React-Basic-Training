import React, { Component } from 'react';

class ChildA extends Component {

  constructor() {
    super();
    console.log('ChildA constructor');
  }

  componentWillMount() {
    console.log('ChildA componentWillMount');
  }

  componentDidMount() {
    console.log('ChildA componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('ChildA componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('ChildA nextProps -----------',nextProps);
    console.log('ChildA nextState -----------',nextState);

    return false;
  }

  componentWillUpdate() {
    console.log('ChildA componentWillUpdate');
  }

  componentDidUpdate(preProps, preState) {
    console.log('componentDidUpdate');
    console.log('ChildA preProps -----------', preProps);
    console.log('ChildA preState -----------', preState);
  }

  componentWillUnmount() {
    console.log('ChildA componentWillUnmount');
  }

  render() {
    console.log('ChildA render');

    return (
      <div>
        ChildA Name: {this.props.name}
      </div>
    );
  }
}

export default ChildA;
