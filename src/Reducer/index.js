import {combineReducers} from 'redux';
import login from './Login_Reducer'
import updateCustomers from './updateCustomers_Reducer'
import Logout from './Logout_Reducer'
import ShowChatForm from './showChatForm'
export default combineReducers({
  Login : login,
  UpdateCustomers : updateCustomers,
  Logout : Logout,
  ShowChatForm : ShowChatForm
});