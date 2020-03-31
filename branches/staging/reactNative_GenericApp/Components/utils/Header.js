import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
  ScrollView,
  
} from "react-native";
import realm from "./realm/UserSchema";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackActions, DrawerActions } from 'react-navigation';
import NotifyIcon from "./NotifyIcon";
class Header extends Component {
  loginHandler = () => {
    // Alert.alert('history');
    console.log(this.props.navigation)
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  notificationHandler = () => {
    // alert("open2"+this.props);
    console.log(this.props.navigation)

    this.props.navigation.navigate('Notifications', { UserId: realm.objects('UserToken')[0].UserId })
    // this.props.navigation.dispatch("/Notifications");
  };

  render() {
    const {
      textStyle1,
      iconContainerStyle1,
      iconStyle1,
      iconStyle2,
      iconImageStyle2,
      searchIconStyle,
      menuIconStyle,
    } = styles;

    return (
      <View style={iconContainerStyle1}>
        <SafeAreaView style={menuIconStyle}>
          <TouchableOpacity onPress={this.loginHandler}>
            <Icon style={iconStyle1} name="reorder" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={{
          position: 'absolute',
          top: hp('3%'),
          left: '18%',
          // flex:1,
        }}>

          <Text style={textStyle1}>{this.props.title}</Text>
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
    // display: 'flex',
    flexDirection: "row",
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent:'center'
    // borderColor: 'black',
  },
  menuIconStyle: {
    position: 'absolute',
    top: hp('3%'),
    left: '5%',
    // flex:1,
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  iconStyle1: {
    color: "#000000",
    fontSize: hp('4%'),
    // borderWidth: 1,
    // borderColor: 'black',
  },
  searchIconStyle: {
    position: 'absolute',
    top: hp('3.5%'),
    right: '17%',
    // flex:1,
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  iconStyle2: {
    color: "#000000",
    fontSize: hp('3%'),
    // marginTop: -14,
    // alignSelf: "center"
    // borderWidth: 1,
    // borderColor: 'black',
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
    // borderWidth: 1,
    // borderColor: 'black',
  },
  textStyle1: {
    // position: 'absolute',
    fontFamily: Fonts.EncodeSansBold,
    fontSize: hp('2.8%'),
    color: "#000000",
    // top: '36%',
    // left: '18%',
    // marginRight: 48,
    // borderWidth: 1,
    // borderColor: 'black',
  }
});

export default Header;
