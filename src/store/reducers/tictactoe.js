import * as actionTypes from '../actions/actionTypes';

const initialState = {
    marks: ['','','','','','','','',''],
    userMark: 'X',
    serverMark: 'O',
    isComplete: false,
    winner: null,
    winSeries: [],
    gameOn: false,
    cursorNotAllowed: false,
    totalGames: 0,
    userWon: 0,
    userLost: 0,
    tied: 0,
    turn: 'Your turn'
}

export const serverMarked = (state, action) => {
    if (state.isComplete) return state;
    const incompletes = []
    for (let i = 0; i < state.marks.length; i++) {
        if (state.marks[i] === '') incompletes.push(i);
    }

    const updatedMarks = [...state.marks]
    updatedMarks[incompletes[0]] = state.serverMark;
    return {
        ...state,
        marks: updatedMarks,
        cursorNotAllowed: false,
        turn: 'Your turn'
    }
}

const getWinSeries = (winSeries, indexes) => {
    const updatedWinSeries = [...winSeries]
    for (let i = 0; i < indexes.length; i++) {
        updatedWinSeries[indexes[i]] = true 
    }

    return updatedWinSeries
}

export const isComplete = (state, action) => {
    if (state.isComplete) return state;
    const marks = state.marks
    let winnerMark = null
    let isComplete = false
    let winSeries = [false, false, false, false, false, false, false, false, false]

    if (marks[0] === marks[1] && marks[1] === marks[2] && marks[0] !== '') {
        isComplete = true
        winnerMark = marks[0]
        winSeries  = getWinSeries(winSeries, [0,1,2])
    } else if (marks[3] === marks[4] && marks[4] === marks[5] && marks[3] !== '') {
        isComplete = true
        winnerMark = marks[3]
        winSeries  = getWinSeries(winSeries, [3,4,5])
    } else if (marks[6] === marks[7] && marks[7] === marks[8] && marks[6] !== '') {
        isComplete = true
        winnerMark = marks[6]
        winSeries  = getWinSeries(winSeries, [6,7,8])
    } else if (marks[0] === marks[3] && marks[3] === marks[6] && marks[0] !== '') {
        isComplete = true
        winnerMark = marks[0]
        winSeries  = getWinSeries(winSeries, [0,3,6])
    } else if (marks[1] === marks[4] && marks[4] === marks[7] && marks[1] !== '') {
        isComplete = true
        winnerMark = marks[1]
        winSeries  = getWinSeries(winSeries, [1,4,7])
    } else if (marks[2] === marks[5] && marks[5] === marks[8] && marks[2] !== '') {
        isComplete = true
        winnerMark = marks[2]
        winSeries  = getWinSeries(winSeries, [2,5,8])
    } else if (marks[0] === marks[4] && marks[4] === marks[8] && marks[0] !== '') {
        isComplete = true
        winnerMark = marks[0]
        winSeries  = getWinSeries(winSeries, [0,4,8])
    } else if (marks[2] === marks[4] && marks[4] === marks[6] && marks[2] !== '') {
        isComplete = true
        winnerMark = marks[2]
        winSeries  = getWinSeries(winSeries, [2,4,6])
    }

    if (isComplete) {
        return {
            ...state,
            isComplete: true,
            winSeries: winSeries,
            winner: winnerMark === state.userMark ? 'You Win' : 'Server Wins',
            cursorNotAllowed: true,
            totalGames: state.totalGames + 1,
            userWon: winnerMark === state.userMark ? state.userWon + 1: state.userWon,
            userLost: winnerMark !== state.userMark ? state.userLost + 1: state.userLost,
            tied: winnerMark === null ? state.tied + 1 : state.tied
        }
    }
    

    const incompletes = marks.filter(mark=>{
        return mark !== ''
    })

    if (incompletes.length === 0) {
        return {
            ...state,
            isComplete: true,
            cursorNotAllowed: true,
            totalGames : state.totalGames + 1,
            tied: state.tied + 1
        }
    }

    return state
}

export const gameOn = (state, action) => {
    return {
        ...state,
        gameOn: true
    }
}

export const replay = (state, action) => {
    return {
        ...state,
        marks: ['','','','','','','','',''],
        userMark: 'X',
        serverMark: 'O',
        isComplete: false,
        winner: null,
        winSeries: [],
        gameOn: false,
        turn: 'Your Turn',
        cursorNotAllowed: false
    }
}

export const userMarked = (state, action) => {
    const updatedMarks = [...state.marks]
    updatedMarks[action.index] = state.userMark
    const updatedState = {
        ...state,
        marks: updatedMarks,
        cursorNotAllowed: true,
        turn: 'Server Turn'
    }

    return updatedState
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TICTACTOE_USER_MARKED:
            return userMarked(state, action);
        case actionTypes.TICTACTOE_SERVER_MARKED:
            return serverMarked(state, action);
        case actionTypes.TICTACTOE_IS_COMPLETE:
            return isComplete(state, action);
        case actionTypes.TICTACTOE_GAME_ON:
            return gameOn(state);
        case actionTypes.TICTACTOE_REPLAY:
            return replay(state);
        default:
            return state;
    }
}

export default reducer