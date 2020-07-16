import {INCREASE, DECREASE, LOGIN, UPDATECUSTOMERS, LOGOUT, SHOWCHATFORM} from './type'

export const counterIncrease = () =>({type:INCREASE});
export const counterDecrease = () =>({type:DECREASE});
export const Login = (responseMessage) => {
    return {
        type: LOGIN,
        payload: responseMessage
    }
}
export const Logout = (data) =>{
    return {
        type : LOGOUT,
        payload: data
    }
}
export const updateCustomers = (data) => {
    return {
        type: UPDATECUSTOMERS,
        payload : data
    }
}
export const showChatForm = (data) =>{
    
    return {
        type:SHOWCHATFORM,
        payload : data
    }
    
}