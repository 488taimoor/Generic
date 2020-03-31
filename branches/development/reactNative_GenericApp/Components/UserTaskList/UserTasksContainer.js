import { connect } from "react-redux";
import UserTasks_View from "./UserTasks_View";
import {TaskServer} from "./UserTasks_Server";

const mapStateToProps = state => {
  
    return {
        GetTaskStatus:state.GetTasks_Reducer.GetUser_Task_Status,
        ErrorMsg:state.GetTasks_Reducer.Error,
        UserTasksList:state.GetTasks_Reducer.UserTasksList
    };
};

const mapDispatchToProps = dispatch => {
        return {
            GetUserTasks:(UserId) => {
                
                TaskServer.GetUserTasks(UserId)
                
            },
        }
};
const UserTasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserTasks_View)

export default UserTasksContainer
