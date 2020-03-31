import {  forgot_Actions , forgot_Status} from "./ReserPassword_Contants";

const initialResetPassword = {
    resetPassword_status: forgot_Status.resetPassword.NEW,
    error:''
  }; 

export const resetPassword_Reducer = (state = initialResetPassword, action) => {
    switch(action.type) {
  

      case forgot_Actions.resetPassword.RESET:
      console.log("I am from Reducer resetPassword LOADING..",action);
      return  { ...state, resetPassword_status: forgot_Status.resetPassword.LOADING}
      case forgot_Actions.resetPassword.RESETSUCCESS:
      console.log("I am from Reducer resetPassword SUCCESS..",action);
      return  { ...state, resetPassword_status: forgot_Status.resetPassword.RESET_SUCCESS}
      case forgot_Actions.resetPassword.CHANGESUCCESS:
      console.log("I am from Reducer resetPassword SUCCESS..",action);
      return  { ...state, resetPassword_status: forgot_Status.resetPassword.CHANGE_SUCCESS}
      case forgot_Actions.resetPassword.FAILED:
      console.log("I am from Reducer resetPassword FAILURE..",action);
      return  { ...state, resetPassword_status: forgot_Status.resetPassword.FAILED}
  
       default:
        return {...state, resetPassword_status: forgot_Status.resetPassword.NEW,  error:''}
    }
  };
  

