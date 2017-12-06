import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    name: 'sentence'
  }

  resetHandler = (newName) => {
    this.setState({
      name: newName
    });
  }

  inputHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>React.js Assignment 1</h1>
        <UserOutput name='helloooo'/>

        <UserInput changed={this.inputHandler} value={this.state.name}/>
        <button onClick={this.resetHandler.bind(this, 'sentence')}>Reset</button>

        <UserOutput name={this.state.name}/>
        <UserOutput name={this.state.name}/>
      </div>
    );
  }
}

export default App;
