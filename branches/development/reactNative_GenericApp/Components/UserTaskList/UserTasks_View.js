import React, { Component, Fragment } from "react";
import TaskList from "./TaskList"
import { Task_Status } from "./Tasks_Constants";
import LoadingScreen from "../utils/LoadingScreen"
import realm from "../utils/realm/UserSchema";


export default class LoginForm_View extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentWillUnmount(){
  
    //this.props.GetUserTasks(realm.objects('UserToken')[0].UserId)
  }
  
  getScreen(status) {

    switch (status) {
      case Task_Status.Get_UserTasks.NEW:
      
        return (
       
            <TaskList navigation={this.props.navigation} data={this.props.UserTasksList}/>
        );

      case Task_Status.Get_UserTasks.LOADING:

        return (
        
            <LoadingScreen />
      
        );
      case Task_Status.Get_UserTasks.SUCCESS:
      
        return (

            <TaskList navigation={this.props.navigation} data={this.props.UserTasksList}/>
        );
      case Task_Status.Get_UserTasks.FAILED:
            alert("unable to get data")
        return (
          <TaskList navigation={this.props.navigation} data={this.props.UserTasksList}
          ErrorMsg={this.props.ErrorMsg} />
        );
      default:
        break;
    }
  }

  render() {

    return (
      <Fragment>
  
      {this.getScreen(this.props.GetTaskStatus)}
      </Fragment>
    )
  }
}
