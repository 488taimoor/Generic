import { connect } from "react-redux";
import LoginForm_View from "./Login";
import {UserServer} from "./Login_Server";

const mapStateToProps = state => {
    
    return {
        UserLoginStatus:state.UserLogin.User_Login_Status,
        UserLoginErrorMsg:state.UserLogin.User_Login_Error
    };
};

const mapDispatchToProps = dispatch => {
        return {
            Loginuser:(data) => {
                
            UserServer.postUserLogin(data)
                
            },
        }
};
const LoginUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm_View)

export default LoginUserContainer
