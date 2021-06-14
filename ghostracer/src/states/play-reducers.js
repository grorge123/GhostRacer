/* play */

const initPlayState = {
    stakeSize: 3,
    time: 100,
    speed: 100,
    accuracy: 1,
    opponentTime: 98,
    opponentSpeed: 300,
    opponentAccuracy: 2,
    gameResult: false,
    gainedCoin: -10,
    gainedRank: -15,
}

function max(a, b) { return a > b ? a : b; }

export function play(state = initPlayState, action) {
    switch (action.type) {
        case '@PLAY/ADD_STAKE':
            return {
                ...state,
                stakeSize: state.stakeSize + 1
            }
        case '@PLAY/LESS_STAKE':
            return {
                ...state,
                stakeSize: max(state.stakeSize - 1, 0)
            }
        case '@PLAY/SET_RESULT':
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
}
