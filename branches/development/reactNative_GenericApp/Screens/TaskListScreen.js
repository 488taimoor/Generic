import React, { Component, Fragment } from "react";
import NavBar from "../Components/utils/NavBar"
import { StackActions, DrawerActions } from 'react-navigation';
import UserTasksContainer from "../Components/UserTaskList/UserTasksContainer"
import LogoutContainer from "../Components/Logout/LogoutContainer"
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  openDrawer= () =>{
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }
  render() {

    return (
      <Fragment>
      <NavBar titleColor="white" backgroundColor={"#2196F3"} title={"User Tasks"} iconHandler1={this.openDrawer} iconName2={null} iconColor1='white' iconColor3="white" iconColor4="white" />
      <UserTasksContainer navigation={this.props.navigation} />
   
      </Fragment>
    )
  }
}


