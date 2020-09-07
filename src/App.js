import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import TicTacToe from './components/Tictactoe/TicTacToe';
import Sudoku from './components/Sudoku/Sudoku'

class App extends Component {
  render() {
    return (
    <div className="App">
      <NavigationItems />
      <Route path="/tictactoe" component={TicTacToe} />
      <Route path="/sudoku" component={Sudoku} />
      <Redirect from="/" to="/tictactoe" />
    </div>
    )
  }
}

export default withRouter(App);
