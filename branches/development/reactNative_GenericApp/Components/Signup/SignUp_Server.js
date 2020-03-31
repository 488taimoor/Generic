import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  User_Actions} from "./SignUp_Constants";
import realm from "../utils/realm/UserSchema";


export const UserServer = {

  postUserSignUp: postUserSignUp,
   
}

function postUserSignUp(data) { //User SignUp Server function

  store.dispatch({type:User_Actions.User_SignUp.LOADING})
  postData = {
    method: 'POST',
    body: JSON.stringify(data),// data containing user email and password
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch(ROOT_URL + "/api/user/signUp", postData) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === "success") {
        
        realm.write(() => {
          realm.delete(realm.objects('UserToken'));
          realm.create('UserToken', {
            AccessToken: responseJson.AccessToken,
            UserId: responseJson.Id
          });
        })
       
        store.dispatch({type:User_Actions.User_SignUp.CREATED,payload:responseJson})
        
      }
      else {
        console.log("Error:" , responseJson)
        if(responseJson.message)
        errormsg=responseJson.message
        //"Server response error. Please try again !"
        store.dispatch({type:User_Actions.User_SignUp.ERROR, error:errormsg})
      }
    })
    .catch((error) => {
      
      errormsg = "Connection Problem:" + error;
   
      store.dispatch({type:User_Actions.User_SignUp.ERROR, error:errormsg})
      
    });
}
