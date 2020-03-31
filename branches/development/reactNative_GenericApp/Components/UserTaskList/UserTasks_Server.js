import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import { Task_Actions} from "./Tasks_Constants";



export const TaskServer = {

  GetUserTasks: GetUserTasks,

 
}



function GetUserTasks(userId) { //User login Server function
 store.dispatch({type:Task_Actions.Get_Tasks.LOADING})

  postData = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch(ROOT_URL + "/api/user/getTasksByUserId/"+userId, postData)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === "success") {

     
        store.dispatch({type:Task_Actions.Get_Tasks.SUCCESS,payload:responseJson.Tasklist})


      }
      else {
      
        store.dispatch({type:Task_Actions.Get_Tasks.ERROR,err:'Internal Server Error'})


      }
    })
    .catch((error) => {
      errormsg = "Connection Problem: " + error;
      store.dispatch({type:Task_Actions.Get_Tasks.ERROR,err:errormsg})
    });
}

