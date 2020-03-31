import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, Modal } from 'react-native'
import NavBar from '../utils/NavBar';
import { Fonts } from "../utils/Fonts";
import NotificationSetting from './NotificationSetting';
import ChangePassword from './ChangePassword';
import ImagePicker1 from './ImagePicker1';
import InputUpdate from '../utils/InputUpdate';
export default class ProfileScreen extends Component {
    state = {
        modalVisible: false,
        searchText: '',
        name: ''
    }

    // ! function for search input
    searchHandler = (searchText) => {
        this.setState({ searchText });
    }
    // !

    setModalVisible = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    render() {

        const {
            textContainerStyle,
            textStyle2,
            textStyle3,
            containerStyle,
            textStyle4,
            inputContainerStyle,
            buttonContainerStyle
        } = styles;



        return (
            <Fragment>
                <StatusBar backgroundColor="gold" barStyle="dark-content" />
                <NavBar title="My Profile" iconName2="" iconName4="notifications" />
                <ImagePicker1 />
                <View style={textContainerStyle}>
                    <TouchableOpacity onPress={this.setModalVisible}>
                        <Text style={textStyle2}>Rameez Ahmad</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: "flex-end", alignItems: 'center' }}>
                            <View style={{ padding: 20, backgroundColor: 'white', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Text style={{ fontFamily: Fonts.EncodeSansSemiBold, }}>Enter your name</Text>

                                <InputUpdate
                                    placeholder="Search ..."
                                    inputTextColor="#000"
                                    inputValue={this.state.searchText}
                                    textHelper="Use only Characters"
                                    autoFocus={true}
                                    maxLength={25}
                                    inputContainerStyle={inputContainerStyle}
                                    onChange={this.searchHandler}
                                />
                                <View style={buttonContainerStyle}>
                                    <TouchableOpacity
                                        onPress={this.setModalVisible}
                                        style={{ marginRight: 24 }}
                                    >
                                        <Text style={{ fontFamily: Fonts.EncodeSansMedium }}>CANCEL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.setModalVisible}
                                    >
                                        <Text style={{ fontFamily: Fonts.EncodeSansMedium }}>SAVE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => alert('edit email')}>
                        <Text style={textStyle3}>rameez@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('edit DOB')}>
                        <Text style={textStyle3}>DOB: 20, july 1991</Text>
                    </TouchableOpacity>
                </View>
                <View style={containerStyle}>
                    <Text style={textStyle4}>Settings</Text>
                    <NotificationSetting />
                    <ChangePassword />
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    textContainerStyle: {
        paddingVertical: 20,
        alignItems: "center",
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 24,
        color: "#000000",
    },
    textStyle3: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 12,
        color: "#767676",
        marginTop: 10,

    },
    containerStyle: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        // backgroundColor: "pink",
        paddingHorizontal: 20,
    },
    textStyle4: {
        alignSelf: 'flex-start',
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: "#000000",
    },
    inputContainerStyle: {
        borderBottomWidth: 1,
        // paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5,
    },
    buttonContainerStyle: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
});
