import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import TitleHeader from '../../Headers/TitleHeader'
import SolarSiteCardInfoCard from '../../Cards/SolarSiteCardInfoCard'
import FusionCharts from '../../Charts/FusionChart'
import { Fonts } from '../../utils/Fonts'
import SolarInverterCard from '../../Cards/SolarInverterCard'
export default class SolarSiteInfo extends Component {
    render() {
        const { containerStyle, viewStyle, textStyle } = styles
        return (
            <Fragment>
                <TitleHeader backgroundColor='white' title="Home" pageTitle='IBM UET Roof_Site22' />
                <ScrollView style={containerStyle}>
                    <SafeAreaView style={viewStyle}>
                        <SolarSiteCardInfoCard />
                        <FusionCharts />
                        <Text style={textStyle}>Site Invertrs</Text>
                        <SolarInverterCard />
                        <SolarInverterCard />
                        <SolarInverterCard />
                    </SafeAreaView>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
    viewStyle: {
        flex: 1,
        marginTop: 16,
    },
    textStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: '#000',
        marginTop: 30,
        marginBottom: 9,
    }
})
