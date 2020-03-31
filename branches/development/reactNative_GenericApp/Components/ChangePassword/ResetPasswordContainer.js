import { connect } from "react-redux";
import ResetPassword from "./ResetPassword_View";
import {UserServer} from "./ReserPassword_Server";

const mapStateToProps = state => {
    
    return {
        UpdatePasswordStatus:state.resetPassword_Reducer.resetPassword_status
    };
};

const mapDispatchToProps = dispatch => {
        return {
            UpdateForgotPassword:(data) => {
                
            UserServer.UpdateForgotPassword(data)
                
            },
      
        }
};
const ResetPasswordContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword)

export default ResetPasswordContainer
