import { connect } from "react-redux";
import SocialRedirect from "./SocialRedirect";
import { socialServer } from "./SocialRedirect_Server";
import { Redirect_Actions } from './SocialRedirect_Constants'
const mapStateToProps = state => {

    return {

        UserRedirectStatus: state.Redirect_Reducer.User_Redirect_Status,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        AuthenticateGoogleToken: (data) => {
            socialServer.AuthenticateGoogleToken(data);

        },
        AuthenticateToken: (data) => {
            socialServer.AuthenticateToken(data);

        },
        handleFacebookProfile: (data) => {
            socialServer.getFacebookProfile(data)
        },

        FailedRedirectState: () => {
            dispatch({ type: Redirect_Actions.Social_Redirect.ERROR })
        },

        ResetRedirectState: () => {
            dispatch({ type: Redirect_Actions.Social_Redirect.LOADING })
        }
    }
};
const RedirectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SocialRedirect)

export default RedirectContainer
