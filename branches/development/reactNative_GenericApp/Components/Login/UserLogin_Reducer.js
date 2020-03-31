import {User_Status, User_Actions} from './Login_Constants';

const User_Login_initialState ={
    User_Login_Status:User_Status.Login_User.NEW,
    User_Login_Error:''
}
export default function (state = User_Login_initialState, action) {
    switch(action.type) {
        case  User_Actions.User_LogIn.LOADING:
        
        return {...state, User_Login_Status:User_Status.Login_User.LOADING}
      
        case  User_Actions.User_LogIn.SUCCESS:
        return {...state, User_Login_Status:User_Status.Login_User.SUCCESS}
      
        case  User_Actions.User_LogIn.ERROR:
        return {...state,  User_Login_Status:User_Status.Login_User.FAILED, User_Login_Error:action.payload }

        default:
        return {...state,  User_Login_Status:User_Status.Login_User.NEW,  User_Login_Error:''}
    }
}
