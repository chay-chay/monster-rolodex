import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    monster: [
      {
        name: 'Frankenstein'
      },
      {
        name: 'Dracular'
      },
      {
        name: 'Zombie'
      },
    ]
  }

  render() {
    return (
      <div className='app'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1> {this.state.string}</h1>
          <button onClick={() => this.setState({ string: 'Hello Andrei'})}>Change Text</button> {/* change state */}
        </header>
        </div>
    )
  }
}

export default App;
