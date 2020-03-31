import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FabButton from "./FabButton";

class NavigationBar extends Component {
    render() {

        const { iconName1 = "explore", iconSize1 = 22, iconColor1 = '#2C4BFC', iconName2 = "settings", iconSize2 = 20, iconColor2 = '#FF0034', iconName3 = "person", iconSize3 = 22, iconColor3 = '#BEBEBE', } = this.props;

        return (
            <SafeAreaView style={styles.containerStyle}>
                <View style={styles.footerCli}>
                    <TouchableOpacity>
                        <Icon name={iconName1} size={iconSize1} color={iconColor1} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Image
                        style={{
                            ...(Platform.OS === "android" ? styles.Image : styles.ImageIOS)
                        }}
                        source={require("../../images/Group-10.png")}
                    />
                    </TouchableOpacity> */}
                    <FabButton />
                    {/* <FabButton containerStyle={styles.fabContainerStyle} color='#FF0034' /> */}
                    <TouchableOpacity>
                        <Icon name={iconName3} size={iconSize3} color={iconColor3} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    containerStyle: {
        zIndex: 1,
        backgroundColor: '#fff',
        // ...elevationShadowStyle(2)
    },
    Image: {
        width: 48,
        height: 48
    },
    ImageIOS: {
        width: 48,
        height: 48
    },
    footerCli: {
        // ...Platform.select({
        //     ios: {
        //         flex: 0.1
        //     },
        //     android: {
        //         height: 60
        //     }
        // }),
        // height: 60,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        // elevation: 2,
        // shadowColor: "grey",
        // shadowOffset: { x: 0, y: -2 },
        // shadowRadius: 4,
        // shadowOpacity: 0.2,
        width: "100%"
    },
    fabContainerStyle: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FF0034'
    }
});

export default NavigationBar;
