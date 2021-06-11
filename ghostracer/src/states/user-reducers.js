/* user */

const initUserState = {
    loggedIn: false,
    loading: false,
    username: 'Guest',
    friends: [],
    friendsListMore: false,
    maxSpeed: '',
    avgSpeed: '',
}
export function user(state = initUserState, action) {
    switch (action.type) {
        case '@USER/START_LOADING':
            return {
                ...state,
                loading: true
            }
        case '@USER/END_LOADING':
            return {
                ...state,
                loading: false
            }
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
                avgSpeed: action.avgSpeed

            }
        default:
            return state;
    }
}