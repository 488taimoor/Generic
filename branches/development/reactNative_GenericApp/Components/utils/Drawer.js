import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { ListItem } from 'react-native-elements'
import LogoutContainer from "../Logout/LogoutContainer"
import { NavigationActions, StackActions, DrawerActions } from 'react-navigation';
export default class Drawer extends Component {
    navigateToScreen = ( route) => {
  
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
    
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
      }

    render() {

        const { containerStyle } = styles;
        return (
            <View>
            <TouchableOpacity style={containerStyle}>
                <ListItem
                    key={0}
                    title="Dashboard"  
                    leftIcon={{ name: 'business' }}
                    bottomDivider
                    containerStyle={{  width:'100%'  }}
                    onPress={() => {
                        this.navigateToScreen('Dashboard')
                      }}
                />
                </TouchableOpacity >
                      <LogoutContainer  navigation={this.props.navigation} />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {


        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
  

})
