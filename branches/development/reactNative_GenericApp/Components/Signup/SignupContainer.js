import { connect } from "react-redux";
import SignupForm_View from "./SignUp";
import {UserServer} from "./SignUp_Server";

const mapStateToProps = state => {
    
    return {
        UserSignUpStatus:state.UserSignup.User_Signup_Status,
        AddUserErrorMsg:state.UserSignup.User_Signup_Error
    };
};

const mapDispatchToProps = dispatch => {
        return {
            SignupUser:(data) => {
                UserServer.postUserSignUp(data)
            }
        }
};
const AddUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm_View)

export default AddUserContainer
