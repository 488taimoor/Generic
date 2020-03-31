
import {  forgot_Actions , forgot_Status} from "./ForgotPassword_Constants";


  const initialStatesendEmail = {
    sendEmail_status: forgot_Status.sendEmail.NEW,
    error:'',
    UserEmail:""
  }; 


 export const sendEmail_Reducer = (state = initialStatesendEmail, action) => {
    switch(action.type) {
    
      case forgot_Actions.sendEmail.SUCCESS:
      console.log("I am from Reducer forgotPassword SUCCESS..",action);
      return  { ...state, sendEmail_status: forgot_Status.sendEmail.SUCCESS, UserEmail: action.payload}
      case forgot_Actions.sendEmail.SEND:
      console.log("I am from Reducer forgotPassword LOADING..",action);
      return  { ...state, sendEmail_status: forgot_Status.sendEmail.LOADING}
      case forgot_Actions.sendEmail.FAILED:
      console.log("I am from Reducer forgotPassword FAILURE..",action);
      return  { ...state, sendEmail_status: forgot_Status.sendEmail.FAILED }
      case forgot_Actions.sendEmail.NOTFOUND:
      console.log("I am from Reducer forgotPassword NetWork FAILURE..",action);
      return  { ...state, sendEmail_status: forgot_Status.sendEmail.NOTFOUND}
       default:
        return {...state,  sendEmail_status: forgot_Status.sendEmail.NEW,  error:''}
    }
  };
