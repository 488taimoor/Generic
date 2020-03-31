import {Redirect_Status, Redirect_Actions} from './SocialRedirect_Constants';

const Redirect_initialState = {
    User_Redirect_Status: Redirect_Status.Social_Redirect.NEW

}
export const Redirect_Reducer = function (state = Redirect_initialState, action) {
    switch (action.type) {
        case Redirect_Actions.Social_Redirect.LOADING:
        return { ...state, User_Redirect_Status: Redirect_Status.Social_Redirect.LOADING.LOADING }
        case Redirect_Actions.Social_Redirect.SUCCESS:
        return { ...state, User_Redirect_Status: Redirect_Status.Social_Redirect.SUCCESS }
        case Redirect_Actions.Social_Redirect.ERROR:
        return { ...state, User_Redirect_Status: Redirect_Status.Social_Redirect.FAILED }
        default:
        return { ...state,  User_Redirect_Status: Redirect_Status.Social_Redirect.NEW}
    }
}
