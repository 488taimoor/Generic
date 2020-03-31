import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Fonts } from "../utils/Fonts";
import PrimaryHeader from "../Headers/PrimaryHeader";
import ModalHeader from "../Headers/ModalHeader";
import SecondaryHeader from "../Headers/SecondaryHeader";
import NavigationBar from "../NavigationBar/NavigationBar";


class NotificationScreen extends Component {


    render() {
        const {
            data = [
                { id: '0', desc: 'Jane Smith marked as going to your event “Batch 43 G2G”', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '1', desc: 'Your profile marked complete and added to the directory. Find your classmates.', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '2', desc: 'Billy Morty marked as going to your event “Batch 43 G2G”', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '3', desc: 'Your profile details has been updated', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '4', desc: 'Congratulations! Your profile is added to the directory. Find your classmates.', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '5', desc: 'Billy Morty marked as going to your event “Batch 43 G2G”', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '6', desc: 'Usman Iqbal', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '7', desc: 'Hamza Saeed Khan', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '8', desc: 'Usman Iqbal', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '9', desc: 'Hamza Saeed Khan', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '10', desc: 'Usman Iqbal', time: '3 Hours ago', img: require('../images/logo.png') },
                { id: '11', desc: 'Hamza Saeed Khan', time: '3 Hours ago', img: require('../images/logo.png') },
            ]
        } = this.props
        const {
            containerStyle,
            textStyle2,
            textStyle3,
            medicalContainerStyle,
            imageStyle,
            nextIconStyle
        } = styles;
        return (
            <Fragment>
                <PrimaryHeader title="Notifications" iconColor2="#2C4BFC" iconDisplay1='none' />
                {/* <ModalHeader title="New Event" /> */}
                {/* <SecondaryHeader title="Events" /> */}
                <View style={containerStyle}>

                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={medicalContainerStyle}>
                                    {/* <View style={{ flexDirection: "row" }}> */}
                                    <View style={imageStyle}>
                                        <Image
                                            style={{ height: "100%", width: "100%" }}
                                            source={item.img}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            borderBottomWidth: 1,
                                            borderColor: "#E1E1E1",
                                            // borderWidth: 1,
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            // width: '76%'
                                            paddingBottom: 12,
                                            height: '100%',
                                        }}
                                    >
                                        <View style={{ flex: 1 }}>
                                            <Text style={textStyle2}>{item.desc}</Text>
                                            <Text style={textStyle3}>{item.time}</Text>
                                        </View>
                                        <View style={nextIconStyle}></View>
                                    </View>
                                    {/* <Icon style={nextIconStyle} name="navigate-next" /> */}
                                    {/* </View> */}
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />

                </View>
                <NavigationBar/>
            </Fragment >
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // borderWidth:1,
        // alignItems: "center",
        // marginTop: 30
        // backgroundColor: "gold"
    },
    medicalContainerStyle: {
        marginTop: 15,
        // left: -14,
        // flexDirection: "row",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        // width:'100%',
        // borderColor: 'red',
        paddingHorizontal: 16,
        minHeight: 66,
    },
    imageStyle: {
        height: 48,
        width: 48,
        // paddingLeft: 5,
        marginRight: 16,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 100,
        overflow: 'hidden',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 14,
        color: "#000000",
        // alignSelf: "flex-start",
        // marginLeft: wp('-20%'),
        // marginTop: hp('3%'),
        // marginBottom: 5
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 12,
        color: "#000000",
        // borderWidth: 1,
        // flex:1,
        // marginTop: 3
    },
    textStyle3: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: "#AAAAAA",
        marginTop: 3,
        // marginBottom: 15
    },
    nextIconStyle: {
        // fontSize: 24,
        // color: "#000000",
        // borderWidth:1,
        height: 8,
        width: 8,
        borderRadius: 100,
        backgroundColor: '#007AFF',
        marginHorizontal: 8,
        // marginTop: 10
    },

});

export default NotificationScreen;
