import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  forgot_Actions} from "./ForgotPassword_Constants";
import realm from "../utils/realm/UserSchema";


export const UserServer = {

    ResetPassword: ResetPassword,

 
}



function ResetPassword(data) { //User login Server function

 store.dispatch({type:forgot_Actions.sendEmail.SEND})

postData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
};
fetch(ROOT_URL + "/api/user/SendForgotPasswordEmail", postData)
  .then((response) => response.json())
  .then((responseJson) => {
   // console.warn(responseJson)
    if (responseJson.status == "success") {
      
      store.dispatch({type:forgot_Actions.sendEmail.SUCCESS, payload:data.email})
      
     // data.navigate('ConfirmEmail', { email: responseJson.doc.email, fullName: responseJson.doc.fullName, dateOfBirth: responseJson.doc.dateOfBirth, profileURL:url })
      
    }
    else {
      if (responseJson.mail_not_found || responseJson.status ==  "Not Found")
        store.dispatch({type:forgot_Actions.sendEmail.NOTFOUND})
      
      else {
        store.dispatch({type:forgot_Actions.sendEmail.FAILED})
      }
    }
  })
  .catch((error) => {
    alert("erroe" + error)
    store.dispatch({type:forgot_Actions.sendEmail.FAILED})
  });
}

