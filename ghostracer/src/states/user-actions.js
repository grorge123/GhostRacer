import { getUserProfile as getUserProfileFromApi } from 'api/user.js';

/* User */

function startLoading() {
    return {
        type: '@USER/START_LOADING'
    }
}

function endLoading() {
    return {
        type: '@USER/END_LOADING'
    }
}

function login() {
    return {
        type: '@USER/LOGIN'
    }
}

function logout() {
    return {
        type: '@USER/LOGOUT'
    }
}

function getUserData(data) {
    return {
        type: '@USER/GET_DATA',
        speed: data['speed']
    }
}

function listFriends() {
    return {
        type: '@USER/LIST_FRIENDS'
    }
}

export function loginAction(toggle){
    return (dispatch, getState) => {

    }
}

