import React from 'react';
import './SudokuGrid.css'

const sudokuGrid = (props) =>{

    const classes = ["sudoku-grid"]
    if (props.loaded) classes.push("sudoku-grid-loaded")
    else if (props.marked) classes.push("sudoku-grid-selected")

    return (
        <div 
            className= {classes.join(" ")}
            onClick={props.clicked}>{props.number}
        </div>
    )
}

export default sudokuGrid