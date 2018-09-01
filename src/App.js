import React, { Component } from 'react';

import './App.css';
import UserLogin from './Components/UserLogin';
import Quiz from './Components/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Misc-RSS-icon.png" className="App-logo" alt="logo" />
          <h1 className="App-title">RadioWired</h1>
        </header>
        <p className="App-intro">
          This will be a podcast curation App
        </p>
        <UserLogin />
        <Quiz />
      </div>
    );
  }
}

export default App;
