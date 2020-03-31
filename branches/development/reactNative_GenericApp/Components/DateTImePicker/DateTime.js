// import React, { Component } from 'react';
// import { View, Button, Platform, Text, SafeAreaView } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default class DateTime extends Component {
//     state = {
//         date: new Date('2020-06-12T14:42:42'),
//         mode: 'date',
//         show: false,
//     }

//     setDate = (event, date) => {
//         date = date || this.state.date;

//         this.setState({
//             show: Platform.OS === 'ios' ? true : false,
//             date,
//         });
//     }

//     show = mode => {
//         this.setState({
//             show: true,
//             mode,
//         });
//     }

//     datepicker = () => {
//         this.show('date');
//     }

//     timepicker = () => {
//         this.show('time');
//     }

//     render() {
//         const { show, date, mode } = this.state;

//         return (
//             <SafeAreaView>
//                 <View>
//                     <Button onPress={this.datepicker} title="Show date picker!" />
//                 </View>
//                 <View>
//                     <Button onPress={this.timepicker} title="Show time picker!" />
//                 </View>
//                 <Text>Hello {show} </Text>
//                 {show && <DateTimePicker value={date}
//                     mode={mode}
//                     is24Hour={true}
//                     display="default"
//                     onChange={this.setDate} />
//                 }
//             </SafeAreaView>
//         );
//     }
// }

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Fonts } from "../utils/Fonts";

export default class DateTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            selectedDate: ""
        };
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({ selectedDate: date.toString() });
        this.hideDateTimePicker();
    };

    render() {
        const { isDateTimePickerVisible, selectedDate, } = this.state;
        const { containerStyle, inputContainerStyle1, textStyle, titleStyle } = styles;
        const { titleIOS = "Pick a Date", mode = 'date', inputText = 'Date', iconName = "event", iconSize = 18, iconColor = '#909090', inputContainerStyle } = this.props

        return (
            <View style={containerStyle}>
                <TouchableOpacity style={[inputContainerStyle1, { inputContainerStyle }]} onPress={this.showDateTimePicker}>
                    <Icon name={iconName} size={iconSize} color={iconColor} />
                    <Text style={textStyle}>{selectedDate == '' ? inputText : selectedDate}</Text>
                </TouchableOpacity>
                {/* <Button title="Show DatePicker" onPress={this.showDateTimePicker} /> */}
                {/* <Text style={styles.text}>{selectedDate}</Text> */}
                <DateTimePicker
                    isVisible={isDateTimePickerVisible}
                    mode={mode}
                    titleIOS={titleIOS}
                    titleStyle={titleStyle}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainerStyle1: {
        borderBottomWidth: 0.5,
        borderColor: '#909090',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
    },
    textStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 16,
        color: '#909090',
        marginLeft: 8,
        flex: 1
    },
    titleStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        color: '#000',
        fontSize: 16
    },
    text: {
        marginVertical: 10
    }
});