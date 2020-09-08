import React from 'react'
import {connect} from 'react-redux'
import SudokuGrid from './SudokuGrid/SudokuGrid'
import './Sudoku.css'
import * as actions from '../../store/actions/sudoku';
const sudoku = (props) => {

    const grid = Array.from(props.numbers).map((number, index) => {
        const isLoaded = Array.from(props.loadedNumbers)[index] === '0' ? false : true
        if (number === '0') number = ''
        const isMarked = index === props.marked
        return <SudokuGrid loaded={isLoaded} number={number} 
            marked={isMarked} key={index} clicked={() => props.userMarked(index)}/>
    })

    const buttons = (
        <div className="container">
            <h3>Choose your level</h3>
            <button type="button" className="btn btn-primary" onClick={() => props.requestServer("EASY")}>EASY</button>
            <button type="button" className="btn btn-success" onClick={() => props.requestServer("MEDIUM")}>MEDIUM</button>
            <button type="button" className="btn btn-secondary" onClick={() =>props.requestServer("HARD")}>HARD</button>
            <button type="button" className="btn btn-danger" onClick={() => props.requestServer("EXPERT")}>EXPERT</button>        
        </div>
    )

    return (
        <div className="sudoku-container">
            {props.gameOn ? grid : buttons}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numbers: state.sudoku.numbers,
        loadedNumbers: state.sudoku.loadedNumbers,
        solution: state.sudoku.solution,
        marked : state.sudoku.markedIndex,
        gameOn: state.sudoku.gameOn,
        isLoading: state.sudoku.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (level) => {dispatch(actions.userServerRequest(level))},
        userMarked: (index) => {console.log(index); dispatch(actions.userMarked(index))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sudoku)