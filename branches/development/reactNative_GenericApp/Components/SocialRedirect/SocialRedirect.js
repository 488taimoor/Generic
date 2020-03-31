import React, { Component } from 'react';
import {
  Text, ScrollView, StyleSheet,
  View,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import realm from "../utils/realm/UserSchema";
import { NavigationActions, StackActions } from 'react-navigation';
import { Redirect_Status } from "./SocialRedirect_Constants";
import LoadingScreen from "../utils/LoadingScreen2"
import { Fonts } from "../utils/Fonts"
import { GoogleConfig, LinkedInConfig, FaceBookConfig } from "../../constants/socialConfig"
import { authorize } from 'react-native-app-auth';
import SnackBar from "../utils/SnackBar"
export default class Redirect extends Component {
  constructor(props) {
    super(props);
    this.GoogleLogin = this.GoogleLogin.bind(this)
    this.LinkedInLogin = this.LinkedInLogin.bind(this)
    this.FaceBookLogin = this.FaceBookLogin.bind(this)
    
  }

  componentDidMount() {

    let Provider = this.props.navigation.state.params.provider
    this.HandleProviders(Provider)
  }
 
  HandleProviders = (Provider) => {
    if (Provider) {
      switch (Provider) {
        case "Google":
          this.GoogleLogin()
          break;
        case "LinkedIn":
          this.LinkedInLogin()
          break
        case "FaceBook":
          this.FaceBookLogin()
          break
        case "Test":
          this.TestLogin()
          break
      }
    }
  }

  async FaceBookLogin() {

  try{
    const result = await authorize(FaceBookConfig);
    if(result.accessToken){
      const newdata = {
      provider: "Facebook",
      AccessToken:result.accessToken,
      appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
      
    }
   this.props.handleFacebookProfile(newdata)
    }
  }catch(err){
    this.props.FailedRedirectState()
  }
    // try {
    //   const result = await authorize(FaceBookConfig);
    // } catch (err) {
    //   console.warn(err)
    // }
    // const newdata = {
    //   provider: "Facebook",
    //   appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
    //   status: rand.toString()
    // }

   // this.props.AuthenticateToken(newdata)
  }
  async LinkedInLogin() {
  
    const min = 1000000;
    const max = 9000000;
    const rand = Math.round((min + Math.random() * (max - min)));


    var config = (' ' + JSON.stringify(LinkedInConfig)).slice(1);
    config = JSON.parse(config)
    config.redirectUrl = LinkedInConfig.redirectUrl + "?status=" + rand

    try {
      const result = await authorize(config);
    } catch (err) {
      console.log(err)
    }
   
    const newdata = {
      provider: "LinkedIn",
      appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
      status: rand.toString()
    }

    this.props.AuthenticateToken(newdata)
  }
  async GoogleLogin() {
    try {
      var result = await authorize(GoogleConfig);
      if (result.accessToken) {

      var newData= {
          provider: "Google",
          AccessToken:result.accessToken,
          appToken: realm.objects('NotifyToken')[0] == null ? null : realm.objects('NotifyToken')[0].NotifyToken,
        }
        this.props.AuthenticateGoogleToken(newData)
      } else {
        console.warn(result)
        this.props.navigation.goBack()
      }
    } catch (err) {
      console.warn(err)
      this.props.FailedRedirectState()

    }
  }
  navigateToScreen = (route) => {

    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    this.props.navigation.dispatch(navigateAction);


  }

  getScreen(status) {
    switch (status) {
      case Redirect_Status.Social_Redirect.NEW:
        return (
          <View>
            <LoadingScreen />
          </View>
        )
      case Redirect_Status.Social_Redirect.LOADING:
        return (
          <View>
            <LoadingScreen />
          </View>
        );
      case Redirect_Status.Social_Redirect.SUCCESS:
        this.navigateToScreen('Authentication')
        return (
          <View>
            <LoadingScreen />
          </View>
        );
      case Redirect_Status.Social_Redirect.FAILED:
      
        this.props.navigation.goBack()
        this.props.ResetRedirectState()
        return (
          <View>
            <SnackBar title="login attempt failed" />
            <LoadingScreen />
          </View>
        );
      default:
        return (
          <View>
            <LoadingScreen />
          </View>
        )
    }
  }

  render() {
    return (
      <ScrollView>



        <View style={{ marginTop: '120%' }} />

        <View>
          {
            this.getScreen(this.props.UserRedirectStatus)
          }
        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    fontFamily: Fonts.EncodeSansBold,
    // borderWidth: 1,
    // flex: 1,
    // backgroundColor: 'pink',
    height: '100%'
  },
  buttonStyle: {
    marginTop: hp('6%'),
    // padding: 5,
    // paddingBottom: 5,
    // backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    height: 60,
    paddingHorizontal: 20
  },
});