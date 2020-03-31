import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
class AlumniChunk extends Component {


  render() {
    const { year = 'Year 2019' } = this.props;
    const {
      containerStyle,
      iconContainerStyle,
      notificationContainerStyle,
      textStyle1,
    } = styles;

    return (
      <TouchableOpacity style={containerStyle}>
        <View style={iconContainerStyle}>
          <Icon name="school" size={14} color="#FFFFFF" />
        </View>
        <View style={notificationContainerStyle}>
          <Text style={textStyle1}>{year}</Text>
          <Icon name="chevron-right" size={22} color="#909090" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    // borderWidth: 1,
    // alignItems: 'center',
  },
  iconContainerStyle: {
    // marginTop: 6,
    height: 24,
    width: 24,
    borderRadius: 3,
    backgroundColor: "#F40000",
    alignItems: "center",
    justifyContent: "center"
  },
  notificationContainerStyle: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 12,
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderColor: "#E1E1E1",
    paddingBottom: 16,
    alignItems: 'center',
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansMedium,
    fontSize: 16,
    flexGrow: 1,
    color: "#000000"
  },


});

export default AlumniChunk;
