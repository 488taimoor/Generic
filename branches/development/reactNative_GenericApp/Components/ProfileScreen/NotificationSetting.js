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
    this.setState({switch: !this.state.switch})
  }

  render() {
    const {
      textStyle5,
    } = styles;

    return (
      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 3,
            backgroundColor: "#FF7700",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="notifications" size={12} color="#FFFFFF" />
        </View>
        <View

          style={{
            flexDirection: "row",
            width: "90%",
            marginLeft: 12,
            borderBottomWidth: 1,
            borderColor: "#E1E1E1",
            paddingBottom: 10
          }}
        >

          <Text style={textStyle5}>Notifications</Text>

          <Switch
            style={{ marginTop: -3 }} value={this.state.switch}
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


  textStyle5: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 18,
    marginTop: -3,
    flexGrow: 1,
    color: "#000000"
  },


});

export default NotificationSetting;
