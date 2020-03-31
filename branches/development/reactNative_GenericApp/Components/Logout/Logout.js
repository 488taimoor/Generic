import React, { Component } from 'react';
import {
  Text, ScrollView, StyleSheet,
  View,
} from 'react-native';

import {  Button } from "../utils/common";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import realm from "../utils/realm/UserSchema";
import { NavigationActions, StackActions } from 'react-navigation';
import { User_Status } from "./Logout_Constants";
import LoadingScreen from "../utils/LoadingScreen2"
import {Fonts} from "../utils/Fonts"

export default class Logout extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  logoutUser = async() => {
    //alert(JSON.stringify(realm.objects('UserToken')[0]))
    var data = {
      AccessToken: realm.objects('UserToken')[0].AccessToken,
      UserId: realm.objects('UserToken')[0].UserId,
      
    }
    if(realm.objects('UserToken')[0].provider)
    {
      data={
        ... data, provider:realm.objects('UserToken')[0].provider
      }

      this.props.LogoutAppUser(data)
    }else{
     this.props.LogoutUser(data)
    }
   
  };

  navigateToScreen = (route) => {

    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    this.props.navigation.dispatch(navigateAction);


  }

  getScreen(status) {
    
    switch (status) {
      case User_Status.SignOut_User.NEW:
    
        return (
          <View style={styles.buttonStyle}>
          <Button Color="#07E592" onPress={this.logoutUser}>
            LOGOUT
          </Button>
        </View>
        )
      case User_Status.SignOut_User.LOADING:
        return (
          <View>
            <LoadingScreen />
          </View>
        );
      case User_Status.SignOut_User.SUCCESS:
          
        realm.write(() => {
          realm.delete(realm.objects('UserToken'));
         })
        this.navigateToScreen('Authentication')
         
        return (
          <View/>
        );
      case User_Status.SignOut_User.FAILED:
        return (
          <View>
             <View style={styles.buttonStyle}>
          <Button Color="#07E592" onPress={this.logoutUser}>
            LOGOUT
          </Button>
        </View>
            <Text style={{ color: "red" }}>
             Server response Error! Try again
            </Text>
          </View>
        );

      default:
        break;
    }
  }

  render() {
    return (
              this.getScreen(this.props.UserSignOutStatus)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    fontFamily:Fonts.EncodeSansBold,
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