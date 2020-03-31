import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../../utils/Fonts";

const Button1 = ({ onPress, children, Color}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, {borderColor: Color}]}>
      <Text style={[textStyle,{color: Color}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    // backgroundColor: "#07E592",
    borderRadius: 3,
    justifyContent: 'center',
    // elevation: 2,
    borderWidth: 1,
    // borderColor: "#FB8E00",
    // borderColor: Color,
  },
  textStyle: {
    alignSelf: "center",
    // color: "#FB8E00",
    // color: Color,
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { Button1 };
