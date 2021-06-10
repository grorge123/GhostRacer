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

export function getUserProfileAction(username) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return getUserProfileFromApi(username).then(data => {
            dispatch(getUserData(data));
        }).catch(err => {
            console.error(`Error getting user data`, err);
        }).then(() => {
            dispatch(endLoading());
        })
    }
}

export function listFriendsAction() {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return listFriendsFromApi()
    }
}