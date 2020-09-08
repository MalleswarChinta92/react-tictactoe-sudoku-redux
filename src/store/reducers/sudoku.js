import * as actionTypes from '../actions/actionTypes'

const intialState = {
    numbers: "",
    loadedNumbers: "",
    solution: "",
    loading: false,
    invalid: false,
    markedIndex:-1,
    wrongIndexes: [],
    level: null,
    gameOn: false
}

const userMarked = (state, action) => {
    return {
        ...state,
        markedIndex: action.index
    }
}

const userClicked = (state, action) => {

    const updatedNumbers = [...state.numbers];
    const clickedNumber = action.number;

    return {
        ...state,
        numbers: [...state.numbers],
        markedIndex: -1
    }
}

const userRequest = (state, action) => {
    return {
        ...state,
        numbers: action.sudokuJson.problem,
        loadedNumbers: action.sudokuJson.problem,
        solution: action.sudokuJson.solution,
        gameOn: true,
        level: action.sudokuJson.level,
        loading: false
    }
}

const reset = (state, action) => {
    return {
        ...state,
        markedIndex: -1,
        loading: false,
        invalid: false,
        numbers: [...state.loadedNumbers],
        loadedNumbers: [...state.loadedNumbers]
    }
}

const userGaveUp = () => {

}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case actionTypes.SUDOKU_USER_MARKED:
            return userMarked(state,action);
        case actionTypes.SUDOKU_USER_RESET:
            return reset(state, action);
        case actionTypes.SUDOKU_USER_REQUEST:
            return userRequest(state,action);
        default:
            return state;
    }
}

export default reducer;