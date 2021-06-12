/* play */

const initPlayState = {
    stakeSize: 0,
    speed: 100,
    accuracy: 1
}
export function play(state = initPlayState, action) {
    switch (action.type) {
        case '@PLAY/ADD_STAKE':
            return {
                ...state,
                stakeSize: stakeSize + 1
            }
        case '@PLAY/LESS_STAKE':
            return {
                ...state,
                stakeSize: stakeSize - 1
            }
        case '@PLAY/SET_WPM':
            return {
                ...state,
                speed: action.speed
            }
        case '@PLAY/SET_ACC':
            return {
                ...state,
                accuracy: action.accuracy
            }
        default:
            return state;
    }
}
