import {User_Status, User_Actions} from './Logout_Constants';

const User_SignOut_initialState = {
    User_SignOut_Status: User_Status.SignOut_User.NEW,

}
export const UserSignOut = function (state = User_SignOut_initialState, action) {
    switch (action.type) {
        case User_Actions.User_SignOut.LOADING:
        return { ...state, User_SignOut_Status: User_Status.SignOut_User.LOADING }
        case User_Actions.User_SignOut.SUCCESS:
   
        return { ...state, User_SignOut_Status: User_Status.SignOut_User.SUCCESS }
        case User_Actions.User_SignOut.ERROR:
        return { ...state, User_SignOut_Status: User_Status.SignOut_User.FAILED }
        default:
        return { ...state,  User_SignOut_Status: User_Status.SignOut_User.NEW}
    }
}
