/* user */

const initUserState = {
    ID: 'lawrence',
    loggedIn: false,
    username: '',
    friends: [],
    friendsListMore: false,
    maxSpeed: '68',
    avgSpeed: 3,
    avgAccuracy: 50,
    avatar: 3,
    friendsListMore: false,
    friendsList: '',
    img: 2,
    money: 10
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
                maxSpeed: action.speed,
                img: action.img,
                money: action.money
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
