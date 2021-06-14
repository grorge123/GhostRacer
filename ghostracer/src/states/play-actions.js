/* Play */

export function addStake() { return { type: '@PLAY/ADD_STAKE' } }
export function lessStake() { return { type: '@PLAY/LESS_STAKE' } }

/*
--- Fill the parameters ---
infoExample = {
    time: 100,
    speed: 100,
    accuracy: 1,
    opponentTime: 98,
    opponentSpeed: 300,
    opponentAccuracy: 2,
    gameResult: false,
    gainedCoin: -10,
    gainedRank: -15
}

--- Call redux to store the parameters ---
dispatch(setResult(infoExample))
*/
export function setResult(info) {
    return {
        type: '@PLAY/SET_RESULT',
        ...info
    }
}