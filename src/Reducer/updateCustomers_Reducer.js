import * as types from '../Action/type'
import cookie from 'react-cookies';
const initialState = {
    data: cookie.load("customersList") || []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATECUSTOMERS:
            if (typeof cookie.load("customersList") !== "undefined") {
                // console.log("CHECK KHAC UNDEFINES")
                if(JSON.stringify(cookie.load("customersList")).includes(JSON.stringify(action.payload)) === false)
                {
                    return Object.assign({}, state, {
                        data: state.data.concat(action.payload)
                    })
                }
            }
            else {
                // console.log("CHECK SAI")
                return Object.assign({}, state, {
                    data: state.data.concat(action.payload)
                })
            }
        default:
            return state;
    }
}