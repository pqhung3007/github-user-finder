const githubReducer = (state, action) => {
    // action is object with type property (usually a string)
    switch (action.type) {
        // return current and updated states
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'CLEAR_RESULTS':
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}

export default githubReducer;