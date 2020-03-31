import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, FlatList, TouchableHighlight, SafeAreaView } from 'react-native';
import { Fonts } from '../utils/Fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DropDownList extends Component {
    state = {
        modalVisible: false,
        selectedValue: 'Default Value',
        selectedIndex: null
    }

    modalHandler = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    selectedValueHandler = (selectedValue, selectedIndex) => {
        this.setState({ selectedValue, selectedIndex }, () => { console.log('selectedIndex :', this.state.selectedIndex) })
        this.modalHandler()
    }

    render() {

        const {
            data = [
                { name: 'Tariq Ali' },
                { name: 'Shahid Ghafoor' },
                { name: 'Jafeel' },
                { name: 'Sabir Khan' },
                { name: 'Muzaffar Iqbal' },
                { name: 'Taimoor Khan' },
                { name: 'Usman Iqbal' },
                { name: 'Hamza Saeed Khan' },
                { name: 'Tariq Ali' },
                { name: 'Shahid Ghafoor' },
                { name: 'Jafeel' },
                { name: 'Sabir Khan' },
                { name: 'Muzaffar Iqbal' },
                { name: 'Taimoor Khan' },
                { name: 'Usman Iqbal' },
                { name: 'Hamza Saeed Khan' },
                { name: 'Tariq Ali' },
                { name: 'Shahid Ghafoor' },
                { name: 'Jafeel' },
                { name: 'Sabir Khan' },
                { name: 'Muzaffar Iqbal' },
                { name: 'Taimoor Khan' },
                { name: 'Usman Iqbal' },
                { name: 'Hamza Saeed Khan' },
                { name: 'Tariq Ali' },
                { name: 'Shahid Ghafoor' },
                { name: 'Jafeel' },
                { name: 'Sabir Khan' },
                { name: 'Muzaffar Iqbal' },
                { name: 'Taimoor Khan' },
                { name: 'Usman Iqbal' },
                { name: 'Hamza Saeed Khan' },
            ],
            title
        } = this.props;

        const { pickerContainerStyle, containerStyle, textStyle1, headingStyle, modalContainerStyle, dataContainerStyle, modalHeaderStyle, modalHeadingStyle, textStyle2, flatListContainerStyle,fieldStyle } = styles;
        return (
            <Fragment>
                <View style={containerStyle}>
                    <Text style={headingStyle}>{title}</Text>
                    <TouchableOpacity style={pickerContainerStyle} onPress={() => this.modalHandler()}>
                        <Text style={textStyle1}>{this.state.selectedValue}</Text>
                        <Icon name="keyboard-arrow-down" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={modalContainerStyle}>
                        <SafeAreaView style={dataContainerStyle}>
                            <View style={modalHeaderStyle}>
                                <Text style={modalHeadingStyle}>{title}</Text>
                                <TouchableOpacity onPress={this.modalHandler}>
                                    <Icon name="clear" size={20} color="#000" />
                                </TouchableOpacity>
                            </View>

                            <View style={flatListContainerStyle}>

                                <FlatList
                                    style={{ width: '100%' }}
                                    data={data}
                                    renderItem={({ item, index }) => (
                                        <TouchableHighlight style={fieldStyle} onPress={() => this.selectedValueHandler(item.name, index)}>
                                            <Text style={[textStyle2, { color: index == this.state.selectedIndex ? '#2C4BFC' : '#909090' }]}>{item.name}</Text>
                                        </TouchableHighlight>
                                    )}

                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>

                        </SafeAreaView>
                    </View>
                </Modal>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 16,
    },
    headingStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        color: "#000",
        fontSize: 10,
    },
    pickerContainerStyle: {
        marginTop: 4,
        borderBottomWidth: 0.5,
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansRegular,
        color: "#9B9B9B",
        fontSize: 14,
    },
    modalContainerStyle: {
        padding: 20,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "center",
        alignItems: 'center'
    },
    dataContainerStyle: {
        // flex: 1,
        // padding: 20,
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        borderRadius: 10,
    },
    modalHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        padding: 16,
    },
    modalHeadingStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        color: "#000",
        fontSize: 16,
    },
    flatListContainerStyle: {
        flex: 1,
        // alignItems: 'center',
        // borderWidth: 1,
        paddingVertical: 20,
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansRegular,
        color: "#000",
        fontSize: 14,
        // textAlign: 'center'
    },
    fieldStyle:{
        borderBottomWidth:0.5,
        padding:16,
    }

})
