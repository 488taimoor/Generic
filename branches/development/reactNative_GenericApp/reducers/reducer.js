import { combineReducers } from 'redux';

import UserSignup from '../Components/Signup/UserSignup_Reducer';
import UserLogin from '../Components/Login/UserLogin_Reducer';
import { UserSignOut } from "../Components/Logout/UserSignOut_Reducer"
import { sendEmail_Reducer } from "../Components/ForgotPassword/ForgotPassword_Reducer"
import { AuthResetCode_Reducer } from "../Components/ForgotPassword/AuthCode/ResetCode_Reducer"
import { resetPassword_Reducer } from "../Components/ChangePassword/ResetPassword_Reducer"
import { Redirect_Reducer } from "../Components/SocialRedirect/SocialRedirect_Reducer"
import GetTasks_Reducer from "../Components/UserTaskList/GetTasks_Reducer";
const reducer = combineReducers({
  UserSignup,
  UserLogin,
  UserSignOut,
  sendEmail_Reducer,
  AuthResetCode_Reducer,
  resetPassword_Reducer,
  Redirect_Reducer,
  GetTasks_Reducer
});

export default reducer;
