import * as types from '../Action/type';
// import cookie from 'react-cookies'
const initialState = {
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return Object.assign({}, state, {
                responseMessage: action.payload,
            })
        default:
            return state;
    }
}