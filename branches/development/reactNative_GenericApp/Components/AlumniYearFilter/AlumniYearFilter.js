import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import PrimaryHeader from '../Headers/PrimaryHeader'
import InputSearch from '../InputFields/InputSearch'
import { Fonts } from '../utils/Fonts';
import AlumniYearFilterChunk from './AlumniYearFilterChunk';
import NavigationBar from '../NavigationBar/NavigationBar';
export default class AlumniYearFilter extends Component {

    state = {
        searchText: '',
    }

    // todo: function for search input
    searchHandler = (searchText) => {
        this.setState({ searchText });
    }
    // todo: !

    render() {
        const { inputContainerStyle, containerStyle, buttonStyle, alumniContainerStyle, textStyle1, textStyle2, alumniListStyle } = styles;
        const { data = [
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
            { name: 'Jack Milton', className: 'Godley House, Class of 1974', address: 'Lahore, Pakistan' },
        ] } = this.props;
        return (
            <Fragment>
                <PrimaryHeader title="Alumni" iconDisplay1="none" className="box-corners" backgroundColor='#fff' />
                <ScrollView style={{ flex: 1 }}>
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


                    <View style={alumniContainerStyle}>
                        <Text style={textStyle1}>Year 2017</Text>
                        <Text style={textStyle2}>Class of year 2017</Text>
                        <View style={alumniListStyle}>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <AlumniYearFilterChunk name={item.name} className={item.className} address={item.address} />
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>
                <NavigationBar />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 16,
    },
    buttonStyle: {
        paddingHorizontal: 16,
        marginTop: 16,
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
        borderRadius: 10,
        // marginHorizontal: 20,
        backgroundColor: 'rgba(142, 142, 147, 0.1)'
    },
    alumniContainerStyle: {
        marginTop: 24,
        paddingHorizontal: 16,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 20,
        color: '#000'
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 12,
        color: '#909090',
        marginTop: 8,
    },
    alumniListStyle: {

    }
})
