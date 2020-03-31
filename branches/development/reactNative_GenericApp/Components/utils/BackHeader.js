import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackActions, DrawerActions } from 'react-navigation';
import realm from "./realm/UserSchema";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NotifyIcon from "./NotifyIcon"
const popAction = StackActions.pop({
  n: 1,
});
export default class BackHeader extends Component {
  myPracticesHandler = () => {
    console.log(this.props.navigation)
    if (this.props.dispatchNewState) {
      // alert("here")

      this.props.dispatchNewState()
    }

    // console.log(this.props.navigate)
    this.props.navigation.goBack()

  };

  notificationHandler = () => {
    this.props.navigation.navigate('Notifications', { UserId: realm.objects('UserToken')[0].UserId })

  };

  render() {
    console.log(this.props.navigation);
    const {
      textStyle1,
      iconContainerStyle1,
      iconStyle1,
      iconStyle2,
      iconImageStyle2,
      backIconStyle,
      searchIconStyle,
    } = styles;

    return (

      <View style={iconContainerStyle1}>
        <SafeAreaView style={backIconStyle}>
          <TouchableOpacity onPress={this.myPracticesHandler} >
            <Icon style={iconStyle1} name="navigate-before" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={{
          position: 'absolute',
          top: hp('3%'),
          left: '14%',
          // flex:1,
        }}>

          <Text style={textStyle1}>{this.props.title.length>12? (this.props.title.substring(0,13)+ '...'):(this.props.title)}</Text>
        </SafeAreaView>
        {/* <SafeAreaView style={searchIconStyle}>

          <TouchableOpacity >
            <Icon style={iconStyle2} name="search" />
          </TouchableOpacity>
        </SafeAreaView> */}

        {/* <TouchableOpacity style={{ alignSelf: "center" }}>
            <Icon style={iconStyle3} name="notifications" />
          </TouchableOpacity> */}
        <SafeAreaView style={{
          position: 'absolute',
          top: hp('3.5%'),
          right: '5%',
          // flex:1,
        }}>
        <NotifyIcon notificationHandler={this.notificationHandler} />
        </SafeAreaView>

      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  iconContainerStyle1: {
    position: "relative",
    marginTop: hp('4%'),
    height: hp('8%'),
    width: '100%',
    // top: 10,
    // left: -10,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'black',
  },
  backIconStyle: {
    position: 'absolute',
    top: hp('3%'),
    left: '3%',
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  iconStyle1: {
    color: "#000000",
    fontSize: hp('4%'),
  },
  searchIconStyle: {
    position: 'absolute',
    top: hp('3.5%'),    
    right: '17%',
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  iconStyle2: {
    color: "#000000",
    fontSize: hp('3%'),  
  },
  iconImageStyle2: {
    // position: 'absolute',
    height: hp('2.5%'),
    width: hp('2%'),
    // top: '50%',
    // right: '5%',
    // marginTop: -14,
    // marginLeft: 35,
    // marginRight: 24,
    alignSelf: "center",
  },
  textStyle1: {
    // position: 'absolute',
    fontFamily: Fonts.EncodeSansBold,
    fontSize: hp('2.8%'),  
    color: "#000000",
    // top: '36%',
    // left: '15%',
    // marginTop: 3,
    // marginRight: 48
  }
});

