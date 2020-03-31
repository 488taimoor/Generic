import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import PrimaryHeader from '../Headers/PrimaryHeader'
import InputSearch from '../InputFields/InputSearch'
import Button1 from '../Buttons/Button1';
import { Fonts } from '../utils/Fonts';
import AlumniChunk from './AlumniChunk';
import NavigationBar from '../NavigationBar/NavigationBar';
export default class Alumni extends Component {

    state = {
        searchText: '',
    }

    // todo: function for search input
    searchHandler = (searchText) => {
        this.setState({ searchText });
    }
    // todo: !

    render() {
        const { inputContainerStyle, containerStyle, buttonStyle, alumniContainerStyle, textStyle1, alumniListStyle } = styles;
        const { data = [
            { year: 'Year 2019' },
            { year: 'Year 2018' },
            { year: 'Year 2017' },
            { year: 'Year 2016' },
            { year: 'Year 2015' },
            { year: 'Year 2014' },
            { year: 'Year 2013' },
            { year: 'Year 2012' },
            { year: 'Year 2011' },
            { year: 'Year 2010' },
            { year: 'Year 2009' },
            { year: 'Year 2008' },
        ] } = this.props;
        return (
            <Fragment>
                <PrimaryHeader title="Alumni" iconDisplay1="none" />
                <ScrollView style={{flex:1}}>
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

                    <View style={buttonStyle}>
                        <Button1 />
                    </View>
                    <View style={alumniContainerStyle}>
                        <Text style={textStyle1}>Select Class of</Text>
                        <View style={alumniListStyle}>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <AlumniChunk year={item.year} />
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>
                <NavigationBar/>
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
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 14,
        color: '#000'
    },
    alumniListStyle: {

    }
})
