import React, { Component } from 'react';

import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

class LoadingScreen extends Component {
    render() {
        return (
            <View style={{ width:'100%',alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="grey" />
                <Text style={{ fontSize: 14, color: 'grey', marginTop: 20}}>Loading ...</Text>
            </View>

        )
    }
}
export default LoadingScreen;