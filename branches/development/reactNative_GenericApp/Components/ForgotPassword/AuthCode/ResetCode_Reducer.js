
import {  forgot_Actions , forgot_Status} from "./ResetCode_Constants";

  const initialAuthResetCode = {
    AuthResetCode_status: forgot_Status.AuthResetCode.NEW,
    error:''
  }; 


export const AuthResetCode_Reducer = (state = initialAuthResetCode, action) => {
    switch(action.type) {

      case forgot_Actions.AuthResetCode.SUCCESS:
      console.log("I am from Reducer AuthResetCode SUCCESS..",action);
      return  { ...state, AuthResetCode_status: forgot_Status.AuthResetCode.SUCCESS}
      case forgot_Actions.AuthResetCode.SEND:
      console.log("I am from Reducer AuthResetCode LOADING..",action);
      return  { ...state, AuthResetCode_status: forgot_Status.AuthResetCode.LOADING}
      case forgot_Actions.AuthResetCode.FAILED:
      console.log("I am from Reducer AuthResetCode FAILURE..",action);
      return  { ...state, AuthResetCode_status: forgot_Status.AuthResetCode.FAILED, error:action.payload}
  
       default:
        return {...state,  AuthResetCode_status: forgot_Status.AuthResetCode.NEW,  error:''}
    }
  };
