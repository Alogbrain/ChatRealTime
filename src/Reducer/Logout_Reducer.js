import * as types from '../Action/type'
import cookie from 'react-cookies'
const initialState = {
    data: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGOUT:
            console.log("LOGOUT")
            cookie.load("customersList").map(value => {
                state.data.push(value)
            })
            state.data.map((value, index) => {
                if (value.username === action.payload.username && value.action === action.payload.action) {
                    state.data.splice(index, 1)
                }
            })
            cookie.save("customersList", state.data, { path: "/" })
            return Object.assign({}, state, {
                    LogoutStatus : "Logout"
            })
        default:
            return state
    }
}