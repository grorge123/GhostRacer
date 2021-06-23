/* user */

const initUserState = {
    ID: '',
    loggedIn: false,
    username: '',
    friends: [],
    friendsListMore: false,
    maxSpeed: 'test speed',
    avgSpeed: 3,
    avgAccuracy: 50,
    avatar: 3,
    friendsListMore: false,
    friendsList: ''
}
export function user(state = initUserState, action) {
    // console.log(action)
    switch (action.type) {
        case '@USER/LOGIN':
            return {
                ...state,
                loggedIn: true
            }
        case '@USER/LOGOUT':
            return {
                ...state,
                loggedIn: false
            }
        case '@USER/GET_DATA':
            return {
                ...state,
                ID: action.ID,
                username: action.username,
                avgAccuracy: action.acc,
                maxSpeed: action.speed
            }
        case '@USER/LIST_FRIENDS':
            return {
                ...state,

            }
        case '@USER/UPDATE_LOCAL':
            return {
                ...state,
                friend: action.friends,
                maxSpeed: action.maxSpeed,
                avgSpeed: action.avgSpeed,
                avgAccuracy: action.avgAccuracy
            }
        default:
            return state;
    }
}
