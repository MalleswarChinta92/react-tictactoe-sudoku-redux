import * as actionTypes from '../actions/actionTypes'

const intialState = {
    numbers: "015070000400800750008009016964107030082390500500004090020410800001703904000920065",
    loadedNumbers: "015070000400800750008009016964107030082390500500004090020410800001703904000920065",
    solution: "315672489496831752278549316964157238182396547537284691629415873851763924743928165",
    loading: false,
    invalid: false,
    markedIndex:-1,
    wrongIndexes: [],
    level: null
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