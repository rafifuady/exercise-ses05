const appState = {
    user: {
        name: 'udin',
        email: '',
        age: null
    },
    count: 1
}

const app = (state = {...appState}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        case 'CHANGENAME':
            return{
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        default:
            return state
    }
}

export default app