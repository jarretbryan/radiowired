import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import UserRegister from './Components/UserRegister';
import Quiz from './Components/Quiz';
import PlaylistContainer from './Components/PlaylistContainer';
import UserLogin from './Components/UserLogin';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
    
      <div className="App">
          <Navbar />
          <Switch>
            
          <Route exact path="/" component={About} />

            <Route exact path="/register" component={UserRegister} />

          
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/profile" component={Profile} />
          </Switch>
      </div>
      
    );
  }
}

export default App;
