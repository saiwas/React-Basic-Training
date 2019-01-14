import React, { Component } from 'react';

class ChildB extends Component {

  constructor() {
    super();
    console.log('ChildB constructor');
  }

  componentWillMount() {
    console.log('ChildB componentWillMount');
  }

  componentDidMount() {
    console.log('ChildB componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('ChildB componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('ChildB nextProps -----------',nextProps);
    console.log('ChildB nextState -----------',nextState);

    return true;
  }

  componentWillUpdate() {
    console.log('ChildB componentWillUpdate');
  }

  componentDidUpdate(preProps, preState) {
    console.log('componentDidUpdate');
    console.log('ChildB preProps -----------', preProps);
    console.log('ChildB preState -----------', preState);
  }

  componentWillUnmount() {
    console.log('ChildB componentWillUnmount');
  }

  render() {
    console.log('ChildB render');

    return (
      <div>
        ChildB Name: {this.props.name}
      </div>
    );
  }
}

export default ChildB;
