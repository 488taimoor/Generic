import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  User_Actions} from "./Login_Constants";
import realm from "../utils/realm/UserSchema";


export const UserServer = {

  postUserLogin: postUserLogin,

 
}



function postUserLogin(data) { //User login Server function
 store.dispatch({type:User_Actions.User_LogIn.LOADING})

  postData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch(ROOT_URL + "/api/user/login", postData)
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

     
        store.dispatch({type:User_Actions.User_LogIn.SUCCESS,payload:responseJson})


      }
      else {
       // console.warn("Error: " , responseJson)

      //  alert(JSON.stringify(responseJson)) 
      if(responseJson.message)
        errormsg=responseJson.message
        store.dispatch({type:User_Actions.User_LogIn.ERROR, payload:errormsg})

      }
    })
    .catch((error) => {
      errormsg = "Connection Problem: " + error;
      store.dispatch({type:User_Actions.User_LogIn.ERROR, payload:errormsg})
    });
}

