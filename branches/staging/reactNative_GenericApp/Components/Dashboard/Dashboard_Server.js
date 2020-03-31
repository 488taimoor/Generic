import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  User_Actions} from "./Dashboard_Constants";

export const UserServer = {

  postUserLogout: postUserLogout,
 
}



function postUserLogout(data) { // User logout function
  store.dispatch({type: User_Actions.User_SignOut.LOADING})
  //store.dispatch(UserSignOutStatus(User_Status.SignOut_User.LOADING))
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
      if (responseJson.succes) {
        store.dispatch({type: User_Actions.User_SignOut.SUCCESS})
   
      }
      else {

        store.dispatch({type: User_Actions.User_SignOut.ERROR})
      }
    })
    .catch((error) => {
      store.dispatch({type: User_Actions.User_SignOut.ERROR})
    });
}

