export function startLoading() {
    return {
        type: '@PAGE/START_LOADING',
        loading: true
    }
}

export function endLoading() {
    return {
        type: '@PAGE/END_LOADING',
        loading: false
    }
}
