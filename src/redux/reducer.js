const appState = {
    user: {
        name: 'udin',
        email: '',
        age: null
    },
    count: 1,
    swapiData:{
        loading: false,
        data: [0]
    },
    selectedProfile: {
        loading: false,
        data: {},
        urlDetail : 'https://swapi.co/api/people/01'
    }
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
        case 'FETCH_SWAPI':
            return {
                ...state,
                swapiData: {
                    ...state.swapiData,
                    loading:true
                }
            }
        case 'FETCH_SWAPI_SUCCESS':
            return {
                ...state,
                swapiData: {
                    ...state.swapiData,
                    data: action.payload,
                    loading: false
                }
            }
        case 'FETCH_SWAPI_FAILED':
            return {
                ...state,
                swapiData: {
                    ...state.swapiData,
                    loading: false
                }
            }
        case 'FETCH_SWAPI_DETAIL':
            return{
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    loading:true
                }
            }
        case 'FETCH_SWAPI_DETAIL_SUCCESS':
            return{
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    loading: false,
                    data: action.payload
                }
            }
        case 'FETCH_SWAPI_DETAIL_FAILED':
            return{
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    loading: false,
                }
            }
        case 'UPDATE_URL_DETAIL':
            return{
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    urlDetail: action.payload
                }
            }
        default:
            return state
    }
}

export default app