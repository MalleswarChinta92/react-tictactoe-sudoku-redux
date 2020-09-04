import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/tictactoe';
import styles from './TicTacToe.css';
import TicTacToeGrid from './TicTacToeGrid/TicTacToeGrid';

class TicTacToe extends Component {

    render() {
        const startButton = (
            <button type="button"
                onClick={this.props.startGameOn} 
                className="btn btn-primary btn-lg">Play Against Server</button>
        )

        const playAgainButton = (
            <button type="button"
                onClick={this.props.replay} 
                className="btn btn-primary btn-lg">Play Again</button>
        )
        
        const stats = (
            <div style={{'textAlign': 'center', 'margin': '20px'}}>
                <span className="badge badge-pill badge-primary">Total {this.props.total}</span>
                <span className="badge badge-pill badge-success">Won {this.props.won}</span>
                <span className="badge badge-pill badge-danger">Lost {this.props.lost}</span>
                <span className="badge badge-pill badge-secondary">Tied {this.props.tied}</span>
            </div>
        )

        let playStatus = null
        if (this.props.isComplete) {
            playStatus = <p className="text-primary">{this.props.winner}</p>
        } else if (this.props.gameOn) {
            playStatus = <p className="text-primary">{this.props.turn}</p>
        }

        const grids = this.props.marks.map((grid, index) => {
            return <TicTacToeGrid
                cursorNotAllowed = {this.props.cursorNotAllowed} 
                success = {this.props.winSeries[index]}
                key={index} 
                data={grid} 
                clicked={() => this.props.userClicked(index, this.props.cursorNotAllowed || grid)}/>
        })

        return (
                <div>
                    {this.props.gameOn ? stats : null}
                <div className="container">
                    
                    {this.props.gameOn ? grids : startButton}
                    {this.props.isComplete ? playAgainButton : null}
                    {playStatus}
                </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        marks: state.tictactoe.marks,
        winSeries: state.tictactoe.winSeries,
        cursorNotAllowed: state.tictactoe.cursorNotAllowed,
        gameOn: state.tictactoe.gameOn,
        total: state.tictactoe.totalGames,
        won: state.tictactoe.userWon,
        lost: state.tictactoe.userLost,
        tied: state.tictactoe.tied,
        isComplete: state.tictactoe.isComplete,
        winner: state.tictactoe.winner,
        turn: state.tictactoe.turn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userClicked: (index, notAllowed) => {
            if (notAllowed) return
            dispatch(actions.userMarked(index))
            dispatch(actions.isComplete())
            setTimeout(()=> {
                dispatch(actions.serverMarked())
                dispatch(actions.isComplete())
            }, 1000)
        },
        startGameOn: () => {
            dispatch(actions.gameOn())
        },
        replay: () => {
            dispatch(actions.replay())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);