import React, { PureComponent } from 'react';
import './App.css';

const FunctionComponent = (props) => {
  console.log('render FunctionComponent');

  return(
    <div>
      {props.name}
    </div>
  )
}

// It's quite dangerous to use `PureComponent` without knowing your state
class PureApp extends PureComponent {
  state = {
    name: 'Johnny'
  }

  componentDidMount() {
    setInterval(()=> {
      this.setState(() => ({name: 'Johnny'}));
    }, 100);
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

export default PureApp;
