import * as ActionTypes from '../ActionTypes.js'

const initialState = {
    username:'',
    email:'',
    password:'',
    is_staff:'',
    isloading:'',
    errMsg:'',
}

export default (state = initialState,action) => {
    switch(action.type)
    {
        default:
            return state
    }
}