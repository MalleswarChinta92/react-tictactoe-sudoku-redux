import * as actionTypes from './actionTypes';

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

export const userRequest = (level) => {
    return {
        type: actionTypes.SUDOKU_USER_REQUEST
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
