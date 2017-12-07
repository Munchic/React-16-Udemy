import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    input: '',
    characters: {
    }
  }

  updatePositions = (input) => {
    const characters = {}
    for (let i = 0; i < input.length; ++i) {
      if (characters.hasOwnProperty(input[i])) {
        characters[input[i]].push(i)
      } else {
        characters[input[i]] = [i]
      }
    }

    return characters
  }

  inputHandler = (event) => {
    const input = event.target.value

    this.setState({
      input: input,
      characters: this.updatePositions(input)
    }) 
  }

  deleteHandler = (key) => {
    const charsToBeRemoved = [...this.state.characters[key]]
    let input = this.state.input.slice(0)
    
    for (const i of charsToBeRemoved.reverse()) {
      input = input.slice(0, i) + input.slice(i + 1, input.length)
    }

    this.setState({
      input: input,
      characters: this.updatePositions(input)
    })
  }

  render() {
    const style = {
      textAlign: 'center',
      width: '50%',
      margin: 'auto',
      padding: '5%'
    }

    const characters = (
      <div style={{textAlign: 'left'}}>
        {Object.keys(this.state.characters).map(key => {
          return <CharComponent name={key} positions={this.state.characters[key]} clicked={this.deleteHandler.bind(this, key)} />
        })}
      </div>
    )

    return (
      <div className="App" style={style}>
        <h3>Enter a sentence:</h3>

        <input
          onChange={this.inputHandler}
          value={this.state.input}
          maxLength='10000'
          style={{
            width: '80%',
            margin: 'auto',
            height: '20px',
            border: '1px solid rgb(200, 200, 200)',
            boxShadow: '2px 3px rgb(235, 235, 235)',
            borderRadius: '4px'
        }} />

        <p>Length: {this.state.input.length}</p>
        <ValidationComponent length={this.state.input.length} style={this.state.style} />
        
        <hr />

        <h3>Characters entered (click to remove):</h3>
        {characters}
      </div>
    );
  }
}

export default App;
