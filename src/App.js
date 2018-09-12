import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import UserRegister from './Components/UserRegister';
import Quiz from './Components/Quiz';
import UserLogin from './Components/UserLogin';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Profile from './Components/Profile';
import NonExistent from './Components/NonExistent';
import FavoritesContainer from './Components/FavoritesContainer';

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
          <Route exact path="/favorites" component={FavoritesContainer} />     
          <Route component={NonExistent} />
          </Switch>
      </div>
      
    );
  }
}

export default withRouter(App);
