import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../../utils/Fonts";

const Button = ({ onPress, children, Color, diable=false}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity disabled={diable} onPress={onPress} style={[buttonStyle, {backgroundColor: Color}]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 3,
    justifyContent: 'center',
    elevation: 2,
    // borderWidth: 1,
    // borderColor: "#007aff",
  },
  textStyle: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: Fonts.EncodeSansBold,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { Button };
