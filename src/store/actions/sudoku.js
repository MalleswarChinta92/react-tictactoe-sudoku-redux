import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userMarked = (index) => {
    return {
        type: actionTypes.SUDOKU_USER_MARKED,
        index
    }
}

export const userClicked = (number) => {
    return {
        type: actionTypes.SUDOKU_USER_CLICKED,
        number
    }
}

export const userRequest = (sudokuJson) => {
    return {
        type: actionTypes.SUDOKU_USER_REQUEST,
        sudokuJson
    }
}

export const userGaveUp = () => {
    return {
        type: actionTypes.SUDOKU_USER_GAVEUP
    }
}

export const sudokuReset = () => {
    return {
        type: actionTypes.SUDOKU_USER_RESET
    }
}

export const userServerRequest = (level) => {
    return dispatch => {
        axios.get('https://react-tictactoe-sudoku-redux.firebaseio.com/sudoku.json').then(response => {
            const data = response.data
            const sudokuJson = data.find((json) => {
                return json.level === level
            })
            dispatch(userRequest(sudokuJson))
        })    
    }
}