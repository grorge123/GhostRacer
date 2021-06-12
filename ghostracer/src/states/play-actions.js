import { getUserProfile as getUserProfileFromApi } from 'api/user.js';

/* Play */

function addStake() { return { type: '@PLAY/ADD_STAKE' } }
function lessStake() { return { type: '@PLAY/LESS_STAKE' } }

function setWpm() {
    return {
        type: '@PLAY/SET_WPM'
    }
}

function setAcc() {
    return {
        type: '@PLAY/SET_ACC'
    }
}

