import {User_Status, User_Actions} from './SignUp_Constants';

const User_Signup_initialState ={
    User_Signup_Status:User_Status.Add_User.NEW,
    User_Signup_Error:'',    
}
export default function (state = User_Signup_initialState, action) {
    switch(action.type) {
        case  User_Actions.User_SignUp.LOADING:
     
        return {...state, User_Signup_Status:User_Status.Add_User.LOADING}
        case  User_Actions.User_SignUp.CREATED:
        
        return {...state, User_Signup_Status:User_Status.Add_User.SUCCESS}
          case  User_Actions.User_SignUp.ERROR:
          return {...state,User_Signup_Status:User_Status.Add_User.FAILED, User_Signup_Error:action.error}
   
        default:
        return  {...state, User_Signup_Error:'', User_Signup_Status:User_Status.Add_User.NEW}
    }
}
