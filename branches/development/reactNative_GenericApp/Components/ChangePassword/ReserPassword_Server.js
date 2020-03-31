import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  forgot_Actions} from "./ReserPassword_Contants";

export const UserServer = {

    UpdateForgotPassword: UpdateForgotPassword,

 
}



function UpdateForgotPassword(data) {
    store.dispatch({type: forgot_Actions.resetPassword.RESET})
    
    postData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
  
    fetch(ROOT_URL + "/api/user/UpdateForgotPassword", postData)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == "success") {
  
            store.dispatch({type: forgot_Actions.resetPassword.RESETSUCCESS})
        //   if (data.login) {
        //     store.dispatch(UpdateUserPassword(User_Status.Comfirm_Reset_Password.CHANGE_PASSWORD_SUCCESS))
        //   } else {
        //     store.dispatch(UpdateUserPassword(User_Status.Comfirm_Reset_Password.SUCCESS))
        //   }
  
        }
        else {
            store.dispatch({type: forgot_Actions.resetPassword.FAILED})
        }
      })
      .catch((error) => {
        store.dispatch({type: forgot_Actions.resetPassword.FAILED})
      });
  }