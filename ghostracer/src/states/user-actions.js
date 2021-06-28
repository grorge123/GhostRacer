import { getUserProfile as getUserProfileFromApi } from 'api/user.js';
import { startLoading, endLoading } from './page-actions.js'

/* User */

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
        ID: data['ID'],
        speed: data['speed'],
        username: data['nickname'],
        acc: data['acc'],
        img: data['img'],
        money: data['money']
    }
}

function listFriends() {
    return {
        type: '@USER/LIST_FRIENDS'
    }
}

export function loginAction(username) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        if (getState.loggedIn) {
            dispatch(logout())
            console.log('logged out')
        } else {
            getUserProfileFromApi(username).then(data => {
                dispatch(getUserData(data))
            }).catch(error => console.log('Error fetch user data from server. ', error))
            dispatch(login())
            console.log('logged in')
        }
        dispatch(endLoading())
    }
}

