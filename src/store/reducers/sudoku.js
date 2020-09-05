import * as actionTypes from '../actions/actionTypes'

const intialState = {
    numbers:[[],[],[],[],[],[],[],[],[]],
    loadedNumbers: [[],[],[],[],[],[],[],[],[]],
    solution: [],
    loading: false,
    invalid: false,
    markedIndex:-1,
    wrongIndexes: []
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

    updatedNumbers[]

    return {
        ...state,
        numbers: [...state.numbers],

    }
}

const userRequest = () => {

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
        default:
            return state;
    }
}

export default reducer;