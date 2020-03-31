import { ROOT_URL } from '../../constants/config';
import store from "../../Store/store";
import {  Redirect_Actions} from "./SocialRedirect_Constants";
import realm from "../utils/realm/UserSchema";
export const socialServer = {

  AuthenticateGoogleToken: AuthenticateGoogleToken,
  AuthenticateToken:AuthenticateToken,
  getFacebookProfile:getFacebookProfile
}


function AuthenticateToken(data) { 
  store.dispatch({type: Redirect_Actions.Social_Redirect.LOADING})

  postData = {
    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

 fetch(ROOT_URL+"/api/user/GetIncompleteToken",postData) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === "success") {
          let ProfileData={
            appToken:data.appToken,
            accessToken:responseJson.doc.accessToken
          }
         
          if(data.provider == "Facebook"){
            getFacebookProfile(ProfileData)
          }else if(data.provider == "LinkedIn"){
            getLinkedInProfile(ProfileData)
          }
         // getLinkedInProfile(ProfileData)
      }
      else {
        store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"server error"})
      }
    })
    .catch((error) => {
      
      store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"Connection Problem:"})
      
    });

}

function getFacebookProfile (data){
  store.dispatch({type: Redirect_Actions.Social_Redirect.LOADING})
  postData = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    }
  };
  var errormsg = "Server response error. Please try again !";
  fetch('https://graph.facebook.com/me?fields=email&access_token='+data.AccessToken) //Signup User API
     .then((response) => response.json())
     .then((responseJson) => {
        
          
          const email=responseJson.email;
          let AuthData={
            email:email,
            provider:"Facebook",
            isSocialLogin:true,
            accessToken:data.AccessToken,
            appToken:data.appToken
          }
     //     alert(JSON.stringify(AuthData))
        return SocialSignup(AuthData)
     })
     .catch((error) => {
       
       store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"Connection Problem:"})
       
     });
}
function getLinkedInProfile(data){
  store.dispatch({type: Redirect_Actions.Social_Redirect.LOADING})
  postData = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+data.accessToken
    }
  };
  
  fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', postData) //Signup User API
     .then((response) => response.json())
     .then((responseJson) => {
        
          var jsonSTR=JSON.stringify(responseJson.elements[0]).replace("~","123")
          const email=JSON.parse(jsonSTR).handle123.emailAddress;
          let AuthData={
            email:email,
            provider:"LinkedIn",
            isSocialLogin:true,
            accessToken:data.accessToken,
            appToken:data.appToken
          }
     //     alert(JSON.stringify(AuthData))
        return SocialSignup(AuthData)
     })
     .catch((error) => {
       
       store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"Connection Problem:"})
       
     });
}

function AuthenticateGoogleToken(data) { // User logout function
  store.dispatch({type: Redirect_Actions.Social_Redirect.LOADING})
  //store.dispatch(UserSignOutStatus(User_Status.SignOut_User.LOADING))
  postData = {
    method: 'POST',
  
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'
    }
  };
 
 fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+data.AccessToken) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.verified_email){
        var AuthData={
          email:responseJson.email,
          provider:"Google",
          isSocialLogin:true,
          accessToken:data.AccessToken,
          appToken:data.appToken
        }
       return SocialSignup(AuthData)
      }
    })
    .catch((error) => {
      
      store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"Connection Problem:"})
      
    });
}


function SocialSignup(data){

  postData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };

  fetch(ROOT_URL + "/api/user/SocialSignup", postData)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if (responseJson.status === "success") {
          
        realm.write(() => {
          realm.delete(realm.objects('UserToken'));
       
          realm.create('UserToken', {
            AccessToken: responseJson.AccessToken,
            UserId: responseJson.Id,
            provider: responseJson.loginProvider
          });
          
        })

        store.dispatch({type:Redirect_Actions.Social_Redirect.SUCCESS})

      }
      else {
        store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"server error"})
      }
    })
    .catch((error) => {
      console.warn(error)
      store.dispatch({type:Redirect_Actions.Social_Redirect.ERROR, error:"Connection Problem:"})
    });
}
