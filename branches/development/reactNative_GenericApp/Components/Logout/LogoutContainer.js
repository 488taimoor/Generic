import { connect } from "react-redux";
import Logout from "./Logout";
import {UserServer} from "./Logout_Server";

const mapStateToProps = state => {
    
    return {
        
        UserSignOutStatus:state.UserSignOut.User_SignOut_Status,
        
    };
};

const mapDispatchToProps = dispatch => {
        return {
           LogoutUser:(data) => {
            UserServer.postUserLogout(data);
                
            },
            LogoutAppUser:(data) =>{
                UserServer.LogoutUser(data)
            }
        }
};
const LogoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)

export default LogoutContainer
