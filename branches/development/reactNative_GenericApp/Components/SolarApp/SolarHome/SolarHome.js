import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import MenuHeader from '../../Headers/MenuHeader'
import { Fonts } from '../../utils/Fonts'
import SolarSiteCard from '../../Cards/SolarSiteCard'
export default class SolarHome extends Component {
    render() {
        const { conatinerStyle, viewStyle, textStyle } = styles
        return (
            <Fragment>
                <MenuHeader backgroundColor='white' title="Home" />
                <ScrollView style={conatinerStyle}>
                    <SafeAreaView style={viewStyle}>
                        <Text style={textStyle}>Assigned Sites</Text>
                        <View style={{marginTop: 24}}>
                            <SolarSiteCard />
                            <SolarSiteCard />
                            <SolarSiteCard />
                            <SolarSiteCard />
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    conatinerStyle: {
        flex: 1,
        paddingHorizontal:16,
        // backgroundColor: 'gold',
    },
    viewStyle: {
        flex: 1,
        // paddingHorizontal: 16,
        // backgroundColor: 'white',
        marginTop: 12
    },
    textStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: '#000',
    }
})
