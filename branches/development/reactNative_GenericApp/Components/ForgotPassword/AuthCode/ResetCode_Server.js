import { ROOT_URL } from '../../../constants/config';
import store from "../../../Store/store";
import {  forgot_Actions} from "./ResetCode_Constants";

export const UserServer = {

    checkResetCode: checkResetCode,

 
}


function checkResetCode(data) {
    store.dispatch({ type: forgot_Actions.AuthResetCode.SEND, payload: data });
    postData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    fetch(ROOT_URL + "/api/user/CheckResetCode", postData)
      .then((response) => response.json())
      .then((responseJson) => {
       // alert(responseJson)
        if (responseJson.status == "success") {
          store.dispatch({ type: forgot_Actions.AuthResetCode.SUCCESS, payload: data });
  
  
        }
        else {
  
          store.dispatch({ type: forgot_Actions.AuthResetCode.FAILED, payload: "internal error" });
        }
  
      })
      .catch((error) => {
        store.dispatch({ type: forgot_Actions.AuthResetCode.FAILED, payload: "network error" });
      });
  }