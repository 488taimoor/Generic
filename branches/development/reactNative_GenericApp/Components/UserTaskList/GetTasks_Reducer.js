import {Task_Actions, Task_Status} from './Tasks_Constants';

const Get_Tasks_initialState ={
    GetUser_Task_Status:Task_Status.Get_UserTasks.NEW,
    UserTasksList:[],
    Error:''
}
export default function (state = Get_Tasks_initialState, action) {
 
    switch(action.type) {
        case  Task_Actions.Get_Tasks.LOADING:

        return {...state, GetUser_Task_Status:Task_Status.Get_UserTasks.LOADING}
      
        case  Task_Actions.Get_Tasks.SUCCESS:

        return {...state, GetUser_Task_Status:Task_Status.Get_UserTasks.SUCCESS, UserTasksList:action.payload}
      
        case  Task_Actions.Get_Tasks.ERROR:
        return {...state,  GetUser_Task_Status:Task_Status.Get_UserTasks.FAILED, Error:action.err }

        default:
        return {...state,    GetUser_Task_Status:Task_Status.Get_UserTasks.NEW,  Error:''}
    }
}
