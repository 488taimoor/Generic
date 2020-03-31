import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Content, DatePicker, Text } from "native-base";
import { Fonts } from "../../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

const DatePick = props => {
  const {
    placeHolderText,
    onDateChange,
    iconName,
    size,
    defaultDate,
    minimumDate,
    maximumDate,
    androidMode
  } = props;
  const { placeHolderTextStyle, textStyle, containerStyle, iconStyle } = styles;

  return (
    <View style={containerStyle}>
      <Icon style={iconStyle} name={iconName} size={size} />
      <DatePicker
        defaultDate={defaultDate}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={androidMode}
        placeHolderText={placeHolderText}
        textStyle={textStyle}
        placeHolderTextStyle={placeHolderTextStyle}
        onDateChange={onDateChange}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeHolderTextStyle: {
    color: "#9FAAA4",
    fontFamily: Fonts.MontserratLight,
    fontSize: 14
    // borderWidth: 1,
  },
  textStyle: {
    color: "#000000",
    fontFamily: Fonts.MontserratLight,
    fontSize: 14
    // borderWidth: 1,
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
    // borderWidth: 1,
    // borderColor: 'red'
  },
  iconStyle: {
    color: "#787878",
    // fontSize: 18,
    // height: 12,
    // width: 12,
    // paddingLeft: 5,
    // paddingRight: 12
    // flex: 1,
    // borderWidth: 1,
    // borderColor: 'black'
  }
});

export { DatePick };
