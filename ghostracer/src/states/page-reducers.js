const initStates = {
    loading: false,
}

export function page(state = initStates, action) {
    switch (action.type) {
        case '@PAGE/START_LOADING':
            return {
                ...state,
                loading: true
            }
        case '@PAGE/END_LOADING':
            return {
                ...state,
                loading: false
            }
        default :
            return state
    }
}
