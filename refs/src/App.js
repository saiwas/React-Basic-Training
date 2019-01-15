import React, { Component } from 'react';
import './App.css';

const MyInput = (props) => {
  return (
    <input
      type='text'
      ref={props.inputRef}
    />
  )
}

const FuncCustomComponent = () => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }

  return (
    <div>
      <div>
        <span>FuncCustomComponent:</span>
        <MyInput inputRef={(input) => {inputRef = input}}/>
      </div>
      <div>
        <input
          type='submit' value='submit'
          onClick={onClick}
        />
      </div>
    </div>
  )
}

class App extends Component {
  onClick = () => {
    alert(`submitted: ${this.firstName.value} | ${this.lastName.value}`)
  }

  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch(target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
          break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input
            type='text'
            ref={(input) =>{ this.firstName = input}}
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input
            type='text' ref={(input) =>{ this.lastName = input}}
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
          />
        </div>
        <div>
          <span>Age:</span>
          <input
            type='text' ref={(input) =>{ this.age = input}}
            onKeyUp={this.onKeyUp.bind(this, 'age')}
          />
        </div>
        <div>
          <input
            type='submit' value='submit' onClick={this.onClick} ref={(input) =>{ this.submit = input}}
            onKeyUp={this.onKeyUp.bind(this, 'submit')}
          />
        </div>
        <FuncCustomComponent />
      </div>
    );
  }
}

export default App;
