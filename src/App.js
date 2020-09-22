import React, { Component } from 'react';
import './App.scss';
import User from './components/User/User';

class App extends Component {
  render() {
    return (
      <main className="app">
        <User />
      </main>
    );
  }
}

export default App;
