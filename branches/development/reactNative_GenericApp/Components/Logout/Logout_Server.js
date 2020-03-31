import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  User_Actions} from "./Logout_Constants";

export const UserServer = {

  postUserLogout: postUserLogout,
  LogoutUser:LogoutUser
}

function LogoutUser(data){
  if(data.provider === "Facebook")
  LogoutFacebookUser(data)
  else
  postUserLogout(data)
}

function LogoutFacebookUser(data){
  
  store.dispatch({type: User_Actions.User_SignOut.LOADING})

  fetch('https://graph.facebook.com/me/permissions/?method=delete&access_token='+data.AccessToken)
    .then((response) => response.json())
    .then((responseJson) => {
  
        postUserLogout(data)
    })
    .catch((error) => {
      postUserLogout(data)
    });
}
function postUserLogout(data) { // User logout function
  store.dispatch({type: User_Actions.User_SignOut.LOADING})

  postData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  errormsg = "";
  fetch(ROOT_URL + "/api/user/logout", postData)
    .then((response) => response.json())
    .then((responseJson) => {
      console.warn(responseJson)
      if (responseJson.status === "success") {
     
        store.dispatch({type: User_Actions.User_SignOut.SUCCESS})
   
      }
      else {

        store.dispatch({type: User_Actions.User_SignOut.ERROR})
      }
    })
    .catch((error) => {
      console.warn(error)
      store.dispatch({type: User_Actions.User_SignOut.ERROR})
    });
}

