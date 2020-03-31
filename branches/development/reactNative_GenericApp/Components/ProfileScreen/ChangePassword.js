import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
class ChangePassword extends Component {


    render() {
        const {

            textStyle5,

        } = styles;

        return (

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 16 }} onPress={() => { alert('working perfect') }} >
                <View
                    style={{
                        height: 20,
                        width: 20,
                        borderRadius: 3,
                        backgroundColor: "#FF0000",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Icon name='lock' size={11} color='#FFFFFF' />


                </View>
                <View
                    style={{
                        flexDirection: "row",
                        width: "90%",
                        marginLeft: 12,
                        borderBottomWidth: 1,
                        borderColor: "#E1E1E1",
                        paddingBottom: 10,
                    }}
                >
                    <Text style={textStyle5}>Change Password</Text>
                    <Icon name='navigate-next' size={24} color='#000000' />
                </View>
            </TouchableOpacity>

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

export default ChangePassword;
