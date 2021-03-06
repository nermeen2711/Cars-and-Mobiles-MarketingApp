import * as types from './ActionTypes'

export const IncrementCounter = ()=>{
    return (dispatch)=> {
        dispatch({type: types.INCREMENT_COUNTER})
    }
}

export const DecrementCounter = ()=>{
    return (dispatch)=> {
        dispatch({type: types.DECREMENT_COUNTER})
    }
}
export const ResetCounter = ()=> {
    return (dispatch) => {
        dispatch({type: types.RESET_COUNTER})
    }
}