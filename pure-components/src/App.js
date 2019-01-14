import React, { Component } from 'react';
import './App.css';

const FunctionComponent = (props) => {
  console.log('render FunctionComponent');

  return(
    <div>
      {props.name}
    </div>
  )
}

class App extends Component {
  state = {
    name: 'Johnny'
  }

  componentDidMount() {
    setInterval(()=> {
      this.setState(() => ({name: 'Johnny'}));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState){
    return !(this.state.name === nextState.name)
  }

  render() {
    console.log('render App');

    return (
      <div className="App">
        <FunctionComponent name={this.state.name}/>
      </div>
    );
  }
}

export default App;
