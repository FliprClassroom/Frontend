import * as ActionTypes from '../ActionTypes'

export const handleAuthChanges = ({prop,value}) => {
    return{
        type:ActionTypes.HANDLE_AUTH_CHANGES,
        payload:{prop,value}
    };
}