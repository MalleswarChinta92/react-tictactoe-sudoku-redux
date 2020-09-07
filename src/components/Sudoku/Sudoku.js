import React from 'react'
import {connect} from 'react-redux'
import SudokuGrid from './SudokuGrid/SudokuGrid'
import './Sudoku.css'
import * as actions from '../../store/actions/sudoku';
const sudoku = (props) => {

    const grid = Array.from(props.numbers).map((number, index) => {
        const isLoaded = Array.from(props.loadedNumbers)[index] === '0' ? false : true
        if (number === '0') number = ''
        const isMarked = index === props.markedIndex
        return <SudokuGrid loaded={isLoaded} number={number} marked={isMarked} key={index}/>
    })


    return (
        <div className="sudoku-container">
            <button onClick={props.requestServer}>Request</button>
            {grid}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numbers: state.sudoku.numbers,
        loadedNumbers: state.sudoku.loadedNumbers,
        solution: state.sudoku.solution,
        marked : state.sudoku.markedIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: () => {dispatch(actions.userServerRequest())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sudoku)