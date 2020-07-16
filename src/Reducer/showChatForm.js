import * as Types from '../Action/type'
const initialState = {
    status : false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case Types.SHOWCHATFORM:
            return {
                status : true,
                UserData : action.payload
            }
        default:
            return state;
    }
}