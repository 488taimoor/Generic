import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import MenuHeader from '../Headers/MenuHeader'
import PrimaryHeader from '../Headers/PrimaryHeader'
import SecondaryHeader from '../Headers/SecondaryHeader'
import TitleHeader from '../Headers/TitleHeader'
import TitleHeaderWithoutIcon from '../Headers/TitleHeaderWithoutIcon'
import InputSearch from '../InputFields/InputSearch'
import SolarSiteCardInfoCard from '../Cards/SolarSiteCardInfoCard'

export default class Events extends Component {

    state = {
        searchText: '',
    }

    // ! function for search input
    searchHandler = (searchText) => {
        this.setState({ searchText });
    }
    // !

    render() {
        const { inputContainerStyle, containerStyle } = styles;
        return (
            <Fragment>
                <MenuHeader backgroundColor='gold' title="Home" />
                <ScrollView style={{ paddingHorizontal: 16 }}>
                    <View style={containerStyle}>
                        <InputSearch
                            placeholder="Search"
                            iconName="search"
                            iconSize={18}
                            iconColor="#707070"
                            placeholderTextColor="#707070"
                            inputTextColor="#000"
                            inputValue={this.state.searchText}
                            inputContainerStyle={inputContainerStyle}
                            onChange={this.searchHandler}
                        />
                    </View>
                    <SolarSiteCardInfoCard />
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        // paddingHorizontal: 16,
    },
    inputContainerStyle: {
        ...Platform.select({
            ios: {
                paddingVertical: 10,
            },
            android: {
                paddingVertical: 5,
            }
        }),
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        // paddingVertical: 10,
        borderRadius: 5,
        // marginHorizontal: 20,
        backgroundColor: 'rgba(142, 142, 147, 0.3)'
    },
})
