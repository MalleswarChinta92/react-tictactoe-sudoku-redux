import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';

class App extends Component {
  render() {
    return (
    <div className="App">
      <NavigationItems />
    </div>
    )
  }
}

export default withRouter(App);
