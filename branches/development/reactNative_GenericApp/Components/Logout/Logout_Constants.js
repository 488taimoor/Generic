
export const User_Status = {
    
    SignOut_User: { // reducer: UserSignOut
        NEW: "SignOut_User_New",
        FAILED: "SignOut_User_Failed",
        LOADING: "SignOut_User_Loading",
        SUCCESS: "SignOut_User_SUCCESS"
    },
    
}

export const User_Actions = {   
    
    User_SignOut: {
        SUCCESS: "SUCCESS_User_SignOut",
        LOADING:"LOADING_User_SignOut",
        ERROR: 'USER_SIGNOUT_ERROR'
    }
}
