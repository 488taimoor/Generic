import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
class NotificationSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    }
  }

  toggleSwitch = () => {
    this.setState({ switch: !this.state.switch })
  }

  render() {
    const {
      containerStyle,
      iconContainerStyle,
      notificationContainerStyle,
      textStyle5,
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={iconContainerStyle}>
          <Icon name="notifications" size={12} color="#FFFFFF" />
        </View>
        <View style={notificationContainerStyle}>
          <Text style={textStyle5}>Notifications</Text>
          <Switch
            value={this.state.switch}
            onValueChange={this.toggleSwitch}
          // ios_backgroundColor="grey"
          // thumbColor="blue"
          // trackColor={{false: 'pink', true: 'gold'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    marginTop: 32,
    // borderWidth: 1,
    // alignItems: 'center',
  },
  iconContainerStyle: {
    marginTop:6,
    height: 20,
    width: 20,
    borderRadius: 3,
    backgroundColor: "#FF7700",
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
  textStyle5: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16,
    flexGrow: 1,
    color: "#000000"
  },


});

export default NotificationSetting;
