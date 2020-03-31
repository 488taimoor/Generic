import React, { Component } from "react";
import Snackbar from 'react-native-snackbar';

import { StyleSheet, View, Text } from 'react-native';


export default class SnackBar extends React.Component {
    state = {
        visible: false,
    };
    
    componentDidMount() {  
      
        Snackbar.show({
            title: this.props.title,
            duration: Snackbar.LENGTH_LONG,
            color:'white',
            action: {
                title: 'X',
                color: 'green',
                onPress: () => { /* Do something. */ },
            },
        });
    }
  
    render() {

        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});