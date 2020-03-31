import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {UserServer} from "./Dashboard_Server";

const mapStateToProps = state => {
    
    return {
        
        UserSignOutStatus:state.UserSignOut.User_SignOut_Status,
        
    };
};

const mapDispatchToProps = dispatch => {
        return {
           LogoutUser:(data) => {
            UserServer.postUserLogout(data);
                
            }
        }
};
const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)

export default DashboardContainer
