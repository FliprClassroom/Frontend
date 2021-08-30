import * as ActionTypes from '../ActionTypes.js'

const initialState = {
    username:'',
    email:'',
    password:'',
    is_staff:'',
    isAuthloading:'',
    errMsg:'',
}

export default (state = initialState,action) => {
    switch(action.type)
    {
        case ActionTypes.HANDLE_AUTH_CHANGES:
            return {
                ...state,
                [action.payload.prop] : action.payload.value
            }
        default:
            return state
    }
}