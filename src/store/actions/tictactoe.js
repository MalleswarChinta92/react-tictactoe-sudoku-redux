import * as actionTypes from '../actions/actionTypes'

export const userMarked = (index) => {
    return {
        type: actionTypes.TICTACTOE_USER_MARKED,
        index
    }
}

export const serverMarked = () => {
    return {
        type: actionTypes.TICTACTOE_SERVER_MARKED
    }
}

export const gameOn = () => {
    return {
        type: actionTypes.TICTACTOE_GAME_ON
    }
}

export const replay = () => {
    return {
        type: actionTypes.TICTACTOE_REPLAY
    }
}

export const isComplete = () => {
    return {
        type: actionTypes.TICTACTOE_IS_COMPLETE
    }
}