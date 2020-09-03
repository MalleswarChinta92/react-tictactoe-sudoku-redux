import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavigationItem path="/tictactoe" exact>Tic Tac Toe</NavigationItem>
                    <NavigationItem path="/sudoku" exact>Sudoku</NavigationItem>
                    {!props.authenticated ? <NavigationItem path="/authenticate" exact>Authenticate</NavigationItem> :
                    <NavigationItem path="/signout" exact>Sign out</NavigationItem> }
                </ul>
            </div>
        </nav>    
    )
}

export default navigationItems;
