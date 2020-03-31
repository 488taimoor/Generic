import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Fonts } from "../../utils/Fonts";

const Input1 = props => {
  const {
    iconName,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    autoCapitalize,
    multiline,
    numberOfLines,
    keyboardType,
    textColor,
    height,
    padding
  } = props;
  const { containerStyle, inputStyle } = styles;
  
  // console.log("multiline :", multiline);
  // console.log("Height :", height);

  return (
    <View style={[containerStyle, { height: height }]}>
      <TextInput
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        multiline={multiline}
        textAlignVertical="top"
        // numberOfLines= {numberOfLines}
        placeholderTextColor="#B4B4B4"
        autoCorrect={false}
        style={[inputStyle, { color: textColor, height: height, 
          paddingBottom: padding }]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    // color: "#000",
    // paddingRight: 5,
    // paddingLeft: 5,
    // paddingBottom: 20,
    // marginLeft: -2,
    fontFamily: Fonts.MontserratLight,
    fontSize: 14,
    // lineHeight: 1 ,
    // flex: 1,
    // height: 40,
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black"
  },
  containerStyle: {
    // height: 40,
    // display: 'flex',
    flex: 1,
    paddingTop: 5,
    // paddingRight: 1,
    // paddingLeft: 1,
    // flexDirection: "row",
    // alignItems: "flex-start",
    // justifyContent: 'flex-start',
    // borderWidth: 1,
    // borderColor: "red"
  }
});
export { Input1 };
