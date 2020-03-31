import React, { Component, Fragment } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, SafeAreaView, StatusBar } from 'react-native';
import NavBar1 from './NavBar1';

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Fragment>
                <NavBar1/>
                <StatusBar backgroundColor= 'gold' barStyle="dark-content" />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 40 }}>
                            <View style={{ flex: 1, backgroundColor: 'gold', width: '100%' }}>
                                <Text>Hello World!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>Show Modal</Text>
                    </TouchableHighlight>
                </View>
            </Fragment>
        );
    }
}