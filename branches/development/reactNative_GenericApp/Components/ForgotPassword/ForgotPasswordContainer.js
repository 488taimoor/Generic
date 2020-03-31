import { connect } from "react-redux";
import ForgotPasswordForm_View from "./ForgotPasswordForm_View";
import {UserServer} from "./ForgotPassword_Server";
// import {ResetPasswordAuth} from "../actions/UserActions"
const mapStateToProps = state => {
    
    return {
        SendEmailStatus:state.sendEmail_Reducer.sendEmail_status,
        email:state.sendEmail_Reducer.UserEmail,
    };
};

const mapDispatchToProps = dispatch => {
        return {
           ResetPassword:(data) => {
                
            UserServer.ResetPassword(data)
                
            },
            // ResetPasswordBackStatus:(status) =>{
            //     dispatch(ResetPasswordAuth(status))
            // }
        }
};
const ForgotPasswordContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPasswordForm_View)

export default ForgotPasswordContainer
